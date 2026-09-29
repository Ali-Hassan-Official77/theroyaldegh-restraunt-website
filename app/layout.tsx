import type { Metadata } from 'next';import './globals.css';import { AppProvider } from '@/components/providers';
export const runtime = 'edge';
export const metadata: Metadata={title:{default:'The Royal Degh — Authentic Pakistani Cuisine',template:'%s — The Royal Degh'},description:'The Royal Degh — signature Pakistani deghs, karahi, biryani and charcoal BBQ in Rawalpindi.',icons:{icon:'/favicon.svg',shortcut:'/favicon.svg',apple:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth"><body><AppProvider>{children}</AppProvider></body></html>}
