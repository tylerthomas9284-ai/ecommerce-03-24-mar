// Product data and utilities
const products = [
  {
    id: '1',
    name: 'Classic Black Dress',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1759090988109-2ed7abd1eefc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmxhY2slMjBkcmVzcyUyMGZhc2hpb258ZW58MXx8fHwxNzcwNDk0NDk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: "Women's Fashion",
    description: 'Elegant black dress perfect for any formal occasion. Made with premium fabric and tailored for a perfect fit.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: '2',
    name: 'Premium Leather Jacket',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1645636667214-c4875ef3d59c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbGVhdGhlciUyMGphY2tldCUyMGZhc2hpb258ZW58MXx8fHwxNzcwNTAxNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: "Men's Fashion",
    description: 'Timeless leather jacket crafted from genuine leather. Features modern design with classic appeal.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '3',
    name: 'Designer Handbag',
    price: 279.99,
    image: 'https://images.unsplash.com/photo-1758171692659-024183c2c272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWclMjBsdXh1cnl8ZW58MXx8fHwxNzcwNDk0NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    description: 'Luxury designer handbag with spacious interior and premium materials. Perfect for everyday elegance.',
    sizes: ['One Size'],
  },
  {
    id: '4',
    name: 'Minimalist White Shirt',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1769072058710-66381e166f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2hpdGUlMjBzaGlydCUyMGZhc2hpb258ZW58MXx8fHwxNzcwNTgyODQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: "Men's Fashion",
    description: 'Clean, minimalist white shirt perfect for any occasion. Premium cotton with exceptional comfort.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '5',
    name: 'Trendy Sneakers',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1695459468644-717c8ae17eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVuZHklMjBzbmVha2VycyUyMGZvb3R3ZWFyfGVufDF8fHx8MTc3MDU4Mjg0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    description: 'Modern sneakers combining style and comfort. Perfect for casual wear with premium materials.',
    sizes: ['7', '8', '9', '10', '11', '12'],
  },
  {
    id: '6',
    name: 'Elegant Beige Coat',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1762605135012-56a59a059e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWlnZSUyMGNvYXQlMjBmYXNoaW9uJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzA1ODI4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: "Women's Fashion",
    description: 'Sophisticated beige coat with timeless design. Perfect for transitional weather and elegant styling.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: '7',
    name: 'Modern Casual Wear',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1759567066672-4b9f48000096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXN1YWwlMjB3ZWFyJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzcwNTgyODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: "Men's Fashion",
    description: 'Contemporary casual ensemble perfect for everyday wear. Comfort meets style in this modern collection.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '8',
    name: 'Stylish Summer Dress',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1765229276796-c93c73cc3f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwd29tZW4lMjBmYXNoaW9uJTIwZHJlc3N8ZW58MXx8fHwxNzcwNTgyODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Seasonal Collection',
    description: 'Vibrant summer dress with modern silhouette. Breathable fabric and stunning design for warm days.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: '9',
    name: 'Premium Suit Collection',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1627962534033-0818d66f82ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbWVuJTIwZmFzaGlvbiUyMGNsb3RoaW5nfGVufDF8fHx8MTc3MDU4Mjg0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: "Men's Fashion",
    description: 'Luxury tailored suit made from the finest materials. Perfect fit and impeccable style for professionals.',
    sizes: ['38R', '40R', '42R', '44R', '46R'],
  },
  {
    id: '10',
    name: 'Luxury Watch Collection',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBsdXh1cnl8ZW58MXx8fHwxNzcwNTgyODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    description: 'Exquisite timepiece combining precision and elegance. A statement piece for the discerning individual.',
    sizes: ['One Size'],
  },
  {
    id: '11',
    name: 'Elegant Evening Gown',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1761637986331-39a8748dd84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBlbGVnYW50fGVufDF8fHx8MTc3MDUzMzMwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: "Women's Fashion",
    description: 'Stunning evening gown with exquisite detailing. Perfect for galas, weddings, and special occasions.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: '12',
    name: 'Summer Collection Set',
    price: 229.99,
    image: 'https://images.unsplash.com/photo-1768289222419-255b80c65259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBmYXNoaW9uJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NzA1ODE1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Seasonal Collection',
    description: 'Complete summer outfit featuring coordinated pieces. Lightweight, stylish, and perfect for the season.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

const categories = [
  "Men's Fashion",
  "Women's Fashion",
  'Accessories',
  'Seasonal Collection',
];

function getProductById(id) {
  return products.find(product => product.id === id);
}

function getProductsByCategory(category) {
  return products.filter(product => product.category === category);
}

function getFeaturedProducts(count = 8) {
  return products.slice(0, count);
}
