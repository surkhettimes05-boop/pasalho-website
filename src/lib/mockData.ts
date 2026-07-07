export const MOCK_PRODUCTS = [
  {
    id: "p1",
    name: "Aashirvaad Atta (Whole Wheat)",
    category: "Staples",
    price: 450,
    mrp: 520,
    unit: "5 kg",
    image: "/images/products/staples_flour.jpg",
    description: "100% pure whole wheat chakki fresh atta.",
    badge: "Most popular",
    rating: 4.8,
    reviews: 124
  },
  {
    id: "p2",
    name: "Wai Wai Noodles (Chicken)",
    category: "Snacks",
    price: 20,
    mrp: 25,
    unit: "75g",
    image: "/images/products/snacks_chips.jpg",
    description: "Ready to eat brown noodles.",
    stock: 3,
    badge: "500+ orders this week",
    rating: 4.9,
    reviews: 856
  },
  {
    id: "p3",
    name: "Dettol Antiseptic Liquid",
    category: "Personal Care",
    price: 180,
    mrp: 210,
    unit: "250ml",
    image: "/images/products/personal_care_soap.jpg",
    description: "First aid and personal hygiene liquid.",
    rating: 4.6,
    reviews: 89
  },
  {
    id: "p4",
    name: "Pampers Baby Dry Pants (L)",
    category: "Baby Products",
    price: 1450,
    mrp: 1899,
    unit: "44 Count",
    image: "/images/products/baby_diapers.jpg",
    description: "Up to 12 hours of dryness for your baby.",
    stock: 5,
    badge: "Selling fast",
    rating: 4.7,
    reviews: 210
  },
  {
    id: "p5",
    name: "Vim Dishwash Bar",
    category: "Cleaning Products",
    price: 35,
    mrp: 45,
    unit: "300g",
    image: "/images/products/cleaning_dishwash.jpg",
    description: "Removes tough grease with the power of lemons.",
    rating: 4.5,
    reviews: 67
  },
  {
    id: "p6",
    name: "Coca-Cola Original",
    category: "Beverages",
    price: 100,
    mrp: 120,
    unit: "1 Liter",
    image: "/images/products/beverages_cola.jpg",
    description: "Refreshing original cola beverage.",
    badge: "Bestseller",
    rating: 4.8,
    reviews: 342
  },
  {
    id: "p7",
    name: "Mansuli Rice",
    category: "Staples",
    price: 1850,
    mrp: 2100,
    unit: "25 kg",
    image: "/images/products/staples_flour.jpg",
    description: "Premium quality daily consumption rice.",
    rating: 4.4,
    reviews: 45
  },
  {
    id: "p8",
    name: "Himalayan Pink Salt",
    category: "Staples",
    price: 110,
    mrp: 150,
    unit: "1 kg",
    image: "/images/products/household_towels.jpg",
    description: "Natural rock salt with essential minerals.",
    stock: 2,
    rating: 4.9,
    reviews: 18
  }
];

export const MOCK_STORES = [
  {
    id: "s1",
    name: "PasalHO - Baneshwor",
    address: "New Baneshwor Chowk, Kathmandu",
    phone: "+977-1-4123456",
    hours: "07:00 AM - 09:00 PM",
    amenities: ["Parking", "Wheelchair Access", "Fresh Bakery"],
    manager: "Ram Shrestha",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "s2",
    name: "PasalHO - Lazimpat",
    address: "Lazimpat Road, Kathmandu",
    phone: "+977-1-4765432",
    hours: "07:00 AM - 10:00 PM",
    amenities: ["Valet Parking", "Pharmacy", "Cafe"],
    manager: "Sita Gurung",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "s3",
    name: "PasalHO - Patan",
    address: "Pulchowk, Lalitpur",
    phone: "+977-1-5555555",
    hours: "08:00 AM - 09:00 PM",
    amenities: ["Parking", "Electronics Section"],
    manager: "Hari Thapa",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800"
  }
];

export const MOCK_CATEGORIES = [
  "Staples",
  "Snacks",
  "Beverages",
  "Personal Care",
  "Cleaning Products",
  "Baby Products",
  "Household Essentials"
];

export const MOCK_CATEGORY_DETAILS = [
  { name: "Staples", image: "/images/products/staples_flour.jpg" },
  { name: "Snacks", image: "/images/products/snacks_chips.jpg" },
  { name: "Beverages", image: "/images/products/beverages_cola.jpg" },
  { name: "Personal Care", image: "/images/products/personal_care_soap.jpg" },
  { name: "Cleaning Products", image: "/images/products/cleaning_dishwash.jpg" },
  { name: "Baby Products", image: "/images/products/baby_diapers.jpg" },
  { name: "Household Essentials", image: "/images/products/household_towels.jpg" }
];

export const MOCK_BLOG_POSTS = [
  {
    id: 1,
    title: 'PasalHO Launches First Store in Kathmandu',
    excerpt: 'We are excited to announce the opening of our flagship store in Thamel, bringing modern retail experience to the heart of Kathmandu.',
    date: 'June 15, 2026',
    author: 'PasalHO Team',
    category: 'News',
    image: 'blog-1'
  },
  {
    id: 2,
    title: 'Introducing Our Loyalty Program',
    excerpt: 'Earn points on every purchase and redeem them for exciting rewards. Learn more about our new customer loyalty initiative.',
    date: 'June 10, 2026',
    author: 'Marketing Team',
    category: 'Features',
    image: 'blog-2'
  },
  {
    id: 3,
    title: 'Sustainable Practices at PasalHO',
    excerpt: 'Discover how we are committed to reducing our environmental footprint through eco-friendly packaging and sustainable sourcing.',
    date: 'June 5, 2026',
    author: 'Operations Team',
    category: 'Sustainability',
    image: 'blog-3'
  },
  {
    id: 4,
    title: 'Meet Our Local Suppliers',
    excerpt: 'We take pride in partnering with local farmers and producers. Learn about the amazing people behind our products.',
    date: 'May 28, 2026',
    author: 'Procurement Team',
    category: 'Community',
    image: 'blog-4'
  },
  {
    id: 5,
    title: 'Tips for Smart Grocery Shopping',
    excerpt: 'Expert advice on how to shop efficiently, save money, and make healthier choices for your family.',
    date: 'May 20, 2026',
    author: 'Customer Experience',
    category: 'Tips',
    image: 'blog-5'
  },
  {
    id: 6,
    title: 'Expanding to Pokhara - Coming Soon',
    excerpt: 'Our next store opening in Pokhara is just around the corner. Here is what you can expect from our Lakeside location.',
    date: 'May 15, 2026',
    author: 'Expansion Team',
    category: 'News',
    image: 'blog-6'
  }
];

export const MOCK_OPENINGS = [
  {
    title: 'Store Manager',
    department: 'Operations',
    location: 'Kathmandu',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Lead store operations, manage team, and ensure exceptional customer experience.'
  },
  {
    title: 'Sales Associate',
    department: 'Retail',
    location: 'Kathmandu',
    type: 'Full-time',
    experience: '1+ years',
    description: 'Assist customers, manage inventory, and maintain store presentation.'
  },
  {
    title: 'Warehouse Manager',
    department: 'Supply Chain',
    location: 'Kathmandu',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Oversee warehouse operations, inventory management, and logistics coordination.'
  },
  {
    title: 'Marketing Executive',
    department: 'Marketing',
    location: 'Kathmandu',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Execute marketing campaigns, manage social media, and drive brand awareness.'
  },
  {
    title: 'Software Engineer',
    department: 'Technology',
    location: 'Kathmandu',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Develop and maintain PasalHO OS platform and web applications.'
  },
  {
    title: 'Procurement Officer',
    department: 'Supply Chain',
    location: 'Kathmandu',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Manage supplier relationships, negotiate contracts, and ensure product quality.'
  }
];

import { DollarSign, Briefcase, Heart, TrendingUp, Users, Target } from 'lucide-react';

export const MOCK_BENEFITS = [
  {
    icon: DollarSign,
    title: 'Competitive Salary',
    description: 'Market-competitive compensation with performance bonuses'
  },
  {
    icon: Heart,
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for you and your family'
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Clear career path with training and development programs'
  },
  {
    icon: Users,
    title: 'Great Culture',
    description: 'Collaborative environment with passionate team members'
  },
  {
    icon: Target,
    title: 'Employee Discounts',
    description: 'Special discounts on all PasalHO products'
  },
  {
    icon: Briefcase,
    title: 'Work-Life Balance',
    description: 'Flexible working hours and paid time off'
  }
];

