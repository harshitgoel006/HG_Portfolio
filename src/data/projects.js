export const projects = [
  {
    id: "smart-cart",
    title: "Smart Cart",
    tagline: "Production-grade e-commerce platform with RBAC and secure APIs",
    description:
      "A scalable, multi-vendor e-commerce platform built with a modern React frontend and a robust Node.js backend, designed to handle real-world business workflows and secure user interactions.",
    features: [
      "3-tier RBAC (Admin/Seller/User) implemented using JWT and custom middleware",
      "Highly optimized REST APIs for inventory, orders, and reviews",
      "MongoDB aggregation pipelines for analytics dashboards and performance",
      "Automated email notifications (OTP, order status updates) using Nodemailer",
      "Protected routes, filters, and debounced search for a smooth UX",
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Postman", "Git"],
    github: "https://github.com/harshitgoel006/Smart-Cart",
    live: null, // add later
    featured: true,
  },
  {
    id: "currency-converter",
    title: "Currency Converter",
    tagline: "Real-time currency conversion with custom React hooks",
    description:
      "A lightweight React application that fetches live exchange rates from a public API, focusing on clean component design, state management, and a responsive user interface.",
    features: [
      "Custom React hook for fetching and caching live exchange rates",
      "Optimized state management for smooth currency swaps",
      "Responsive, glassmorphism-style UI with input validation",
      "Graceful API error handling and loading states",
    ],
    tech: ["React", "Tailwind CSS", "Vite", "Public API"],
    github: "https://github.com/harshitgoel006/Currency-Converter",
    live: "https://currency-converter-dusky-eta-38.vercel.app/",
    featured: false,
  },
];