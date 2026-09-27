'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/lib/data';

type CartItem = Product & { quantity: number };
type Order = { id:string; status:string; createdAt:string; eta:string; total:number; items:CartItem[]; customer:{name:string;phone:string;address:string} };
type Toast = { id:number; message:string; tone?:'success'|'info'|'error' };
type AppContextValue = { cart:CartItem[]; favorites:string[]; orders:Order[]; cartCount:number; subtotal:number; darkMode:boolean; toasts:Toast[]; addToCart:(product:Product)=>void; removeFromCart:(id:string)=>void; setQuantity:(id:string,q:number)=>void; toggleFavorite:(id:string)=>void; clearCart:()=>void; saveOrder:(order:Order)=>void; toggleDarkMode:()=>void; toast:(message:string,tone?:Toast['tone'])=>void; dismissToast:(id:number)=>void };
const AppContext=createContext<AppContextValue|null>(null);
export function AppProvider({children}:{children:React.ReactNode}){
 const [cart,setCart]=useState<CartItem[]>([]),[favorites,setFavorites]=useState<string[]>([]),[orders,setOrders]=useState<Order[]>([]),[darkMode,setDarkMode]=useState(false),[toasts,setToasts]=useState<Toast[]>([]);
 useEffect(()=>{try{setCart(JSON.parse(localStorage.getItem('trd-cart')||'[]'));setFavorites(JSON.parse(localStorage.getItem('trd-favorites')||'[]'));setOrders(JSON.parse(localStorage.getItem('trd-orders')||'[]'));const t=localStorage.getItem('trd-theme');setDarkMode(t ? t === 'dark' : true)}catch{}},[]);
 useEffect(()=>localStorage.setItem('trd-cart',JSON.stringify(cart)),[cart]);useEffect(()=>localStorage.setItem('trd-favorites',JSON.stringify(favorites)),[favorites]);useEffect(()=>localStorage.setItem('trd-orders',JSON.stringify(orders)),[orders]);
 useEffect(()=>{document.documentElement.classList.toggle('dark',darkMode);localStorage.setItem('trd-theme',darkMode?'dark':'light')},[darkMode]);
 const toast=(message:string,tone:Toast['tone']='success')=>{const id=Date.now()+Math.random();setToasts(v=>[...v.slice(-2),{id,message,tone}]);window.setTimeout(()=>setToasts(v=>v.filter(x=>x.id!==id)),3200)};
 const value=useMemo<AppContextValue>(()=>({cart,favorites,orders,darkMode,toasts,cartCount:cart.reduce((s,i)=>s+i.quantity,0),subtotal:cart.reduce((s,i)=>s+i.price*i.quantity,0),addToCart:p=>{setCart(c=>{const x=c.find(i=>i.id===p.id);return x?c.map(i=>i.id===p.id?{...i,quantity:i.quantity+1}:i):[...c,{...p,quantity:1}]});toast(`${p.name} added to your order.`)},removeFromCart:id=>{setCart(c=>c.filter(i=>i.id!==id));toast('Item removed from your order.','info')},setQuantity:(id,q)=>setCart(c=>q<=0?c.filter(i=>i.id!==id):c.map(i=>i.id===id?{...i,quantity:q}:i)),toggleFavorite:id=>{setFavorites(c=>{const liked=c.includes(id);toast(liked?'Removed from your saved dishes.':'Saved to your favourites.','info');return liked?c.filter(x=>x!==id):[...c,id]})},clearCart:()=>setCart([]),saveOrder:o=>setOrders(c=>[o,...c]),toggleDarkMode:()=>setDarkMode(v=>!v),toast,dismissToast:id=>setToasts(c=>c.filter(i=>i.id!==id))}),[cart,favorites,orders,darkMode,toasts]);
 return <AppContext.Provider value={value}>{children}<ToastStack/></AppContext.Provider>
}
function ToastStack(){const {toasts,dismissToast}=useApp();return <div className="toast-stack" aria-live="polite">{toasts.map(t=><button className={`toast toast-${t.tone||'success'}`} key={t.id} onClick={()=>dismissToast(t.id)}><span>✦</span>{t.message}</button>)}</div>}
export function useApp(){const v=useContext(AppContext);if(!v)throw new Error('useApp must be used inside AppProvider');return v}
