export interface Author {
  name: string;
  avatar: string;
}

export interface Card {
  id: number;
  title: string;
  category: string;
  badge: string;
  price: number;
  author: Author;
}

export const allCards: Card[] = [
  {
    id: 1,
    title: "The Ultimate Google Ads Training Course",
    category: "marketing",
    badge: "Marketing",
    price: 100,
    author: {
      name: "Jeromee Bell",
      avatar: "images/jerome-bell.png",
    },
  },
  {
    id: 2,
    title: "Prduct Management Fundamentals",
    category: "management",
    badge: "Management",
    price: 480,
    author: {
      name: "Marvin McKinney",
      avatar: "images/marvin-mckinney.png",
    },
  },
  {
    id: 3,
    title: "HR  Management and Analytics",
    category: "hr & recruting",
    badge: "HR & Recruting",
    price: 200,
    author: {
      name: "Leslie Alexander Li",
      avatar: "images/leslie-alexander-li.png",
    },
  },
  {
    id: 4,
    title: "TBrand Management & PR Communications",
    category: "marketing",
    badge: "Marketing",
    price: 530,
    author: {
      name: "Kristin Watson",
      avatar: "images/kristin-watson.png",
    },
  },
  {
    id: 5,
    title: "Graphic Design Basic",
    category: "design",
    badge: "Design",
    price: 500,
    author: {
      name: "Guy Hawkins",
      avatar: "images/guy-hawkins.png",
    },
  },
  {
    id: 6,
    title: "Business Development Management",
    category: "management",
    badge: "Management",
    price: 400,
    author: {
      name: "Dianne Russell",
      avatar: "images/dianne-russell.png",
    },
  },
  {
    id: 7,
    title: "Highload Software Architecture",
    category: "development",
    badge: "Development",
    price: 600,
    author: {
      name: "Brooklyn Simmons",
      avatar: "images/brooklyn-simmons.png",
    },
  },
  {
    id: 8,
    title: "Human Resources – Selection and Recruitment",
    category: "hr & recruting",
    badge: "HR & Recruting",
    price: 150,
    author: {
      name: "Kathryn Murphy",
      avatar: "images/kathrin-murphy.png",
    },
  },
  {
    id: 9,
    title: "User Experience. Human-centered Design",
    category: "design",
    badge: "Design",
    price: 240,
    author: {
      name: "Cody Fisher",
      avatar: "images/cody-fisher.png",
    },
  },
  {
    id: 10,
    title: "Google Ads Retargeting Mastery",
    category: "marketing",
    badge: "Marketing",
    price: 180,
    author: {
      name: "Jeromee Bell",
      avatar: "images/jerome-bell.png",
    },
  },
  {
    id: 11,
    title: "Agile Product Management",
    category: "management",
    badge: "Management",
    price: 350,
    author: {
      name: "Marvin McKinney",
      avatar: "images/marvin-mckinney.png",
    },
  },
  {
    id: 12,
    title: "Recruiting Operations",
    category: "hr & recruting",
    badge: "HR & Recruting",
    price: 300,
    author: {
      name: "Leslie Alexander Li",
      avatar: "images/leslie-alexander-li.png",
    },
  },
  {
    id: 13,
    title: "Microservices Architecture",
    category: "development",
    badge: "Development",
    price: 720,
    author: {
      name: "Brooklyn Simmons",
      avatar: "images/brooklyn-simmons.png",
    },
  },
  {
    id: 14,
    title: "Brand Strategy & PR Crash Course",
    category: "marketing",
    badge: "Marketing",
    price: 250,
    author: {
      name: "Kristin Watson",
      avatar: "images/kristin-watson.png",
    },
  },
  {
    id: 15,
    title: "HR Analytics & Reporting",
    category: "hr & recruting",
    badge: "HR & Recruting",
    price: 280,
    author: {
      name: "Kathryn Murphy",
      avatar: "images/kathrin-murphy.png",
    },
  },
  {
    id: 16,
    title: "Rust for High‑load Systems",
    category: "development",
    badge: "Development",
    price: 680,
    author: {
      name: "Brooklyn Simmons",
      avatar: "images/brooklyn-simmons.png",
    },
  },
  {
    id: 17,
    title: "Talent Sourcing Strategies",
    category: "hr & recruting",
    badge: "HR & Recruting",
    price: 220,
    author: {
      name: "Leslie Alexander Li",
      avatar: "images/leslie-alexander-li.png",
    },
  },
]
