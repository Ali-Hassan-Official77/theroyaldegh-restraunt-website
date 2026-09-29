export type Category = {
  id: string;
  name: string;
  icon: string;
  accent: string;
  note: string;
};

export const runtime = 'edge';
export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  description: string;
  ingredients: string[];
  image: string;
  badge?: string;
  calories: number;
  spicy?: boolean;
  popular?: boolean;
  accent?: string;
};

export const categories: Category[] = [
  {
    id: "degh",
    name: "Signature Deghs",
    icon: "🥘",
    accent: "#b89652",
    note: "Slow-cooked for the table",
  },
  {
    id: "karahi",
    name: "Karahi",
    icon: "🍲",
    accent: "#9d6f3d",
    note: "Smoky, rich & desi",
  },
  {
    id: "biryani",
    name: "Biryani",
    icon: "🍚",
    accent: "#c69a45",
    note: "Fragrant basmati rice",
  },
  {
    id: "bbq",
    name: "BBQ & Tikka",
    icon: "🍢",
    accent: "#a34f32",
    note: "Charcoal-kissed grills",
  },
  {
    id: "breads",
    name: "Breads & Sides",
    icon: "🫓",
    accent: "#d2a85f",
    note: "Fresh from the tandoor",
  },
  {
    id: "drinks",
    name: "Drinks & Desserts",
    icon: "🥤",
    accent: "#6d8c5a",
    note: "Cool finishes",
  },
];

export const products: Product[] = [
  {
    id: "royal-chicken-degh",
    slug: "royal-chicken-degh",
    name: "Royal Chicken Degh",
    category: "degh",
    price: 3499,
    oldPrice: 3899,
    rating: 4.9,
    reviews: 1,
    description:
      "A generous house degh of tender chicken, slow-cooked with tomato, ginger, garlic and royal spices for a rich family-style meal.",
    ingredients: [
      "Chicken",
      "Tomato",
      "Ginger & garlic",
      "Royal spice blend",
    ],
    image:
      "https://i.pinimg.com/736x/08/b2/4d/08b24df5c2a325d27b3557ef469e73c8.jpg?auto=format&fit=crop&w=1400&q=90",
    badge: "HOUSE SIGNATURE",
    calories: 980,
    popular: true,
    accent: "#b89652",
  },

  {
    id: "mutton-degh",
    slug: "mutton-degh",
    name: "Royal Mutton Degh",
    category: "degh",
    price: 5499,
    oldPrice: 5999,
    rating: 4.9,
    reviews: 1,
    description:
      "Slow-braised mutton with caramelised onions, whole spices and a deep desi gravy, finished for the centre of your table.",
    ingredients: ["Mutton", "Onion", "Whole spices", "Yogurt"],
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1400&q=90",
    badge: "ROYAL FEAST",
    calories: 1180,
    popular: true,
    accent: "#8c5d37",
  },

  {
    id: "chicken-karahi",
    slug: "chicken-karahi",
    name: "Royal Chicken Karahi",
    category: "karahi",
    price: 2199,
    oldPrice: 2499,
    rating: 4.8,
    reviews: 1,
    description:
      "Fresh chicken wok-tossed in tomato, green chilli, ginger and crushed spices, served sizzling in traditional karahi style.",
    ingredients: ["Chicken", "Tomatoes", "Green chilli", "Ginger"],
    image:
      "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=1400&q=90",
    badge: "BESTSELLER",
    calories: 760,
    popular: true,
    accent: "#a34f32",
  },

  {
    id: "mutton-karahi",
    slug: "mutton-karahi",
    name: "Mutton Karahi",
    category: "karahi",
    price: 2999,
    rating: 4.8,
    reviews: 1,
    description:
      "Tender mutton cooked hot and fast with tomatoes, ginger, chilli and a fragrant Royal Degh masala.",
    ingredients: ["Mutton", "Tomato", "Ginger", "Chilli"],
    image:
      "https://i.pinimg.com/736x/d6/d1/40/d6d140ed7723b7960bfe0bb8e5274383.jpg?auto=format&fit=crop&w=1400&q=90",
    calories: 890,
    accent: "#9d6f3d",
  },

  {
    id: "royal-biryani",
    slug: "royal-chicken-biryani",
    name: "Royal Chicken Biryani",
    category: "biryani",
    price: 1399,
    oldPrice: 1599,
    rating: 4.8,
    reviews: 1,
    description:
      "Long-grain basmati layered with spiced chicken, saffron notes, fried onion and fragrant whole spices.",
    ingredients: ["Basmati rice", "Chicken", "Saffron", "Fried onion"],
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1400&q=90",
    badge: "FAMILY FAVOURITE",
    calories: 710,
    popular: true,
    accent: "#c69a45",
  },

  {
    id: "mutton-biryani",
    slug: "royal-mutton-biryani",
    name: "Mutton Biryani",
    category: "biryani",
    price: 1899,
    rating: 4.8,
    reviews: 1,
    description:
      "Fragrant basmati rice layered with tender mutton, caramelised onion, mint and aromatic masala.",
    ingredients: ["Mutton", "Basmati rice", "Mint", "Biryani masala"],
    image:
      "https://i.pinimg.com/736x/46/a8/82/46a8826b4f06e4f850801f86e1d40915.jpg?auto=format&fit=crop&w=1400&q=90",
    calories: 820,
    accent: "#b98345",
  },

  {
    id: "seekh-kebab",
    slug: "charcoal-seekh-kebab",
    name: "Charcoal Seekh Kebab",
    category: "bbq",
    price: 1299,
    rating: 4.7,
    reviews: 1,
    description:
      "Hand-shaped minced meat kebabs grilled over charcoal with herbs, chilli and our house seasoning.",
    ingredients: ["Minced meat", "Herbs", "Green chilli", "Charcoal"],
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1400&q=90",
    badge: "FROM THE GRILL",
    calories: 520,
    popular: true,
    accent: "#a34f32",
  },

  {
    id: "chicken-tikka",
    slug: "malai-chicken-tikka",
    name: "Malai Chicken Tikka",
    category: "bbq",
    price: 1399,
    rating: 4.8,
    reviews: 1,
    description:
      "Juicy boneless chicken marinated in cream, yogurt and mild spices, then finished over hot charcoal.",
    ingredients: ["Chicken", "Cream", "Yogurt", "Mild spices"],
    image:
      "https://i.pinimg.com/736x/dc/c4/dd/dcc4ddf2ded81ce2e285603f0c2495bc.jpg?auto=format&fit=crop&w=1400&q=90",
    calories: 560,
    accent: "#c48d58",
  },

  {
    id: "garlic-naan",
    slug: "royal-garlic-naan",
    name: "Royal Garlic Naan",
    category: "breads",
    price: 249,
    rating: 4.7,
    reviews: 1,
    description:
      "Soft tandoori naan brushed with butter and fresh garlic, made to tear and share.",
    ingredients: ["Flour", "Garlic", "Butter"],
    image:
      "https://i.pinimg.com/736x/60/5e/2f/605e2f25881aa1f07bf7adf3e58cd70c.jpg?auto=format&fit=crop&w=1400&q=90",
    calories: 280,
    popular: true,
    accent: "#d2a85f",
  },

  {
    id: "family-platter",
    slug: "royal-family-platter",
    name: "Royal Family Platter",
    category: "bbq",
    price: 3299,
    oldPrice: 3599,
    rating: 4.9,
    reviews: 1,
    description:
      "A table-ready platter with seekh kebabs, chicken tikka, malai boti, fries, naan and signature chutneys.",
    ingredients: ["Seekh kebab", "Chicken tikka", "Malai boti", "Naan"],
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=90",
    badge: "FOR THE TABLE",
    calories: 1320,
    popular: true,
    accent: "#b89652",
  },

  {
    id: "mint-lassi",
    slug: "fresh-mint-lassi",
    name: "Fresh Mint Lassi",
    category: "drinks",
    price: 399,
    rating: 4.7,
    reviews: 1,
    description:
      "Chilled yogurt lassi blended with fresh mint and a gentle savoury finish.",
    ingredients: ["Yogurt", "Mint", "Ice"],
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1400&q=90",
    calories: 190,
    accent: "#6d8c5a",
  },

  {
    id: "kheer",
    slug: "royal-kheer",
    name: "Royal Kheer",
    category: "drinks",
    price: 449,
    rating: 4.8,
    reviews: 1,
    description:
      "Slow-cooked creamy rice pudding with cardamom, nuts and a delicate saffron finish.",
    ingredients: ["Milk", "Rice", "Cardamom", "Pistachio"],
    image:
      "https://i.pinimg.com/736x/2b/cb/22/2bcb221831fd04247142758e420c3f86.jpg?auto=format&fit=crop&w=1400&q=90",
    badge: "SWEET FINISH",
    calories: 330,
    accent: "#b89652",
  },
];

export const offers = [
  {
    code: "ROYAL300",
    title: "Rs. 300 OFF",
    sub: "On selected family orders above Rs. 3,000",
    label: "WELCOME TO THE ROYAL TABLE",
  },
  {
    code: "DEGH15",
    title: "15% OFF",
    sub: "On selected signature deghs this week",
    label: "ROYAL DEGH DAYS",
  },
  {
    code: "FREESHIP",
    title: "FREE DELIVERY",
    sub: "On orders above Rs. 2,500 in our service area",
    label: "DELIVERY PERK",
  },
];

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}