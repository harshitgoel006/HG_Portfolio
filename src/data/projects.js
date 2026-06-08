export const projects = [
  {
    id: "news-nexus",
    title: "News Nova",
    tagline: "Real-time news aggregation platform with Redis caching",
    description:
      "A high-performance full-stack news platform delivering personalized content. Features include JWT + OTP security, Redis caching for lightning-fast speeds, and a scalable backend architecture optimized for high traffic.",
    features: [
      "Secure authentication with JWT and OTP verification",
      "Real-time news aggregation from multiple high-authority APIs",
      "Redis caching for 80% faster content delivery",
      "Personalized feeds with bookmarking and history tracking",
      "Backend security with rate limiting and secure headers",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Redis", "Tailwind CSS"],
    github: "https://github.com/harshitgoel006/News_Nova", // Replace with actual link if different
    live: "https://news-nova-rose.vercel.app",
    featured: true,
  },

  {
    id: "smart-cart",
    title: "Smart Cart",
    tagline: "Scalable multi-vendor e-commerce platform with RBAC and secure APIs",
    description:
      "A scalable multi-vendor e-commerce platform featuring role-based access control, secure authentication, inventory management, order processing, and analytics-driven business workflows.",
    features: [
      "3-tier RBAC (Admin/Seller/User) using custom middleware",
      "Highly optimized REST APIs for inventory and orders",
      "MongoDB aggregation pipelines for analytics dashboards",
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/harshitgoel006/Smart-Cart",
    live: null,
    featured: true,
  },

  {
    id: "skycast",
    title: "SkyCast",
    tagline: "Modern animated weather dashboard with real-time insights",
    description:
      "SkyCast provides real-time weather conditions and air quality data with dynamic UI transitions that adapt to day and night environments.",
    features: [
      "Real-time weather data via OpenWeather API",
      "Dynamic UI adapting to environmental conditions",
      "Sun path visualization and radar map integration",
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion", "OpenWeather API"],
    github: "https://github.com/harshitgoel006/SkyCast",
    live: "https://skycast-plum-one.vercel.app/",
    featured: false,
  },
  
];
