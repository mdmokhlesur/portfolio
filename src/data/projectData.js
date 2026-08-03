import kutirGhor from "../assets/kutir-ghor.jpg";
import freshFood from "../assets/FreshFood.jpg";
import travel from "../assets/Travel-community.jpg";
import nextJob from "../assets/nextjs-job-board.png";
import littleJoyFull from "../assets/little-joyfull.jpg";
import footballDen from "../assets/football-den.jpg";
import abcerp from "../assets/abcerp.png";
import prayogik from "../assets/prayogik.png";
import footballDenOne from "../assets/Football-Den/Football-Den-1.jpg";
import footballDenTwo from "../assets/Football-Den/Football-Den-2.jpg";
import littleJoyFullOne from "../assets/Little-JoyFull/little-joyfull-1.jpg";
import littleJoyFullTwo from "../assets/Little-JoyFull/little-joyfull-2.jpg";

const projectData = [
  {
    id: 1,
    slug: "abc-erp",
    thumbnail: abcerp,
    title: "ABC ERP",
    role: "ERP management modules",
    category: "Enterprise",
    status: "Professional",
    mainTechnology: "Next js",
    languageColor: "#61dafb",
    updatedAt: "2026-06-18",
    stack: [
      "Next js",
      "REST APIs",
      "Shadcn UI",
      "React-hook-form",
      "JWT",
      "ZOD",
      "Prisma",
      "PostgresSQL",
    ],
    description:
      "Developed the HR module with employee profile management and attendance tracking features. Contributed to the Procurement module by implementing supplier chain functionalities. Also worked on the Account module, supporting financial data operations and integrating backend APIs to ensure efficient processing and system performance.",
    fullDescription:
      "ABC ERP is an enterprise resource planning product where I contributed to HR, procurement, and account management workflows. The work focused on practical business operations: employee profile management, attendance tracking, supplier chain flows, financial data handling, and reliable backend API integration.",
    features: [
      "Employee profile management for HR operations",
      "Attendance tracking workflows",
      "Supplier chain functionality for procurement teams",
      "Financial data operations inside account modules",
      "Backend API integration for production business processes",
    ],
    responsibilities: [
      "Built HR module screens and interactions",
      "Integrated backend endpoints with frontend workflows",
      "Implemented procurement and account module features",
      "Improved data flow and user feedback across enterprise forms",
    ],
  },
  {
    id: 2,
    slug: "prayogik",
    thumbnail: prayogik,
    title: "Prayogik",
    role: "E-commerce checkout",
    category: "E-commerce",
    status: "Live",
    mainTechnology: "Next.js",
    languageColor: "#000000",
    updatedAt: "2026-05-28",
    stack: ["Next.js", "Payment Flow", "REST APIs"],
    description:
      "Designed and developed the complete add-to-cart to payment workflow, ensuring a smooth and user-friendly checkout experience. Implemented robust cart validation to verify product availability, pricing, and quantity before checkout. Built order processing logic to handle transactions efficiently, integrate backend APIs, and ensure accurate data flow between the cart, payment, and order management systems.",
    fullDescription:
      "Prayogik is an e-commerce platform where I designed and developed the customer checkout path from add-to-cart through payment. The work emphasized validation, order processing, and dependable API coordination so product availability, pricing, quantities, payment, and order data stayed consistent.",
    features: [
      "Cart-to-payment checkout journey",
      "Product availability and quantity validation",
      "Pricing validation before checkout",
      "Order processing flow",
      "Backend API integration across cart, payment, and order modules",
    ],
    responsibilities: [
      "Designed checkout interaction flow",
      "Built validation logic before payment",
      "Connected order processing to backend APIs",
      "Handled user-facing cart and payment states",
    ],
    liveLink: "https://prayogik.com/",
  },
  {
    id: 3,
    slug: "kutir-ghor",
    thumbnail: kutirGhor,
    title: "Kutir Ghor",
    role: "Marketplace platform",
    category: "Marketplace",
    status: "Live",
    mainTechnology: "Next Js",
    languageColor: "#61dafb",
    updatedAt: "2025-12-12",
    stack: ["Next Js", "E-commerce", "Mongodb", "Firebase"],
    description:
      "This platform is a combination of products from different industries, allowing users to buy or sell their desired products. It focuses on traditional items and provides a user-friendly interface to help customers find what they are looking for with ease. Moreover, the platform offers a variety of unique product ideas to inspire creativity and enhance the shopping experience",
    fullDescription:
      "Kutir Ghor is a marketplace for traditional and locally inspired products. The platform brings products from different industries into a familiar commerce experience, helping users discover, buy, and sell items with a clean browsing flow.",
    features: [
      "Marketplace-style product discovery",
      "Traditional product focus",
      "Buy and sell product flows",
      "Firebase-backed app experience",
      "Responsive browsing interface",
    ],
    responsibilities: [
      "Developed frontend product browsing interfaces",
      "Structured reusable commerce components",
      "Integrated Firebase services",
      "Connected project navigation and listing flows",
    ],
    liveLink: "https://kutir-shilpo.vercel.app/",
    github: [
      {
        id: 1,
        title: "github",
        link: "https://github.com/kutir-shilpo/kutir-shilpo",
      },
    ],
  },
  {
    id: 4,
    slug: "football-coach-den",
    thumbnail: footballDen,
    previewImages: [footballDen, footballDenOne, footballDenTwo],
    title: "Football coach Den",
    role: "Course and payment platform",
    category: "Learning",
    status: "Live",
    mainTechnology: "React",
    languageColor: "#61dafb",
    updatedAt: "2025-10-04",
    stack: ["React", "Express.js", "MongoDB"],
    description:
      "This website is based on kids. Here they can do multiple courses during their summer vacation. Built with ReactJS, ExpressJS, and MongoDB, it provides a seamless user experience and integrates features like Firebase and React Stripe for secure payments.",
    fullDescription:
      "Football Coach Den is a course platform for kids, designed around summer learning and sports coaching. It combines a React frontend, Express.js backend, MongoDB data storage, Firebase authentication, and Stripe payment handling for a complete course enrollment experience.",
    features: [
      "Course discovery and enrollment",
      "Firebase authentication",
      "Stripe-powered payment flow",
      "MongoDB-backed server data",
      "Role-ready full-stack architecture",
    ],
    responsibilities: [
      "Built frontend course and enrollment interfaces",
      "Implemented backend APIs with Express.js",
      "Connected MongoDB data models",
      "Integrated authentication and payment flows",
    ],
    liveLink: "https://the-football-coach-den.web.app/",
    github: [
      {
        id: 1,
        title: "client",
        link: "https://github.com/pm-rahman/Football-coatch-den-client",
      },
      {
        id: 2,
        title: "server",
        link: "https://github.com/pm-rahman/Football-Coach-Den-Server",
      },
    ],
  },
  {
    id: 5,
    slug: "next-job-board",
    thumbnail: nextJob,
    title: "Next job board",
    role: "Job discovery product",
    category: "Job Board",
    status: "Live",
    mainTechnology: "Next.js",
    languageColor: "#000000",
    updatedAt: "2025-08-21",
    stack: [
      "Next.js",
      "Frontend",
      "Filters",
      "React-hook-form",
      "JWT",
      "ZOD",
      "Prisma",
      "Mongodb",
    ],
    description:
      "This job board, developed with Next.js, offers a platform for tech professionals to find various developer positions, including full-time, part-time, contract, and remote roles across different locations. It provides job filters by type and location to simplify the search, connecting talent with job opportunities effectively.",
    fullDescription:
      "Next Job Board is a developer-focused job discovery product built with Next.js. It lets users browse role types, locations, and work modes through focused filters so the job list is easier to scan and act on.",
    features: [
      "Developer job listing interface",
      "Filters by job type",
      "Location-based discovery",
      "Remote and contract role support",
      "Next.js frontend architecture",
    ],
    responsibilities: [
      "Built the job listing UI",
      "Implemented filtering interactions",
      "Structured reusable Next.js components",
      "Designed responsive listing states",
    ],
    liveLink: "https://portfolio-1f5e4.web.app/my-work",
    github: [
      {
        id: 1,
        title: "github",
        link: "https://github.com/pm-rahman/nextjs-job-board",
      },
    ],
  },
  {
    id: 6,
    slug: "little-joyful-land",
    thumbnail: littleJoyFull,
    previewImages: [littleJoyFull, littleJoyFullOne, littleJoyFullTwo],
    title: "Little Joyful Land",
    role: "Toy commerce app",
    category: "E-commerce",
    status: "Live",
    mainTechnology: "React",
    languageColor: "#61dafb",
    updatedAt: "2025-06-16",
    stack: ["React", "Express", "JWT"],
    description:
      "There is cars, truck, and Regular car toy available. Built with ReactJS, ExpressJS, and MongoDB, With seamless integration of Firebase and JWT, It ensures a secure and exciting shopping experience for young car lovers.",
    fullDescription:
      "Little Joyful Land is a toy commerce app focused on car, truck, and vehicle toys. It combines React, Express.js, MongoDB, Firebase, and JWT-based authentication to support a playful but secure shopping experience.",
    features: [
      "Toy product catalog",
      "Firebase authentication",
      "JWT-secured backend access",
      "Express.js API layer",
      "MongoDB product and user data",
    ],
    responsibilities: [
      "Developed product and shopping interfaces",
      "Built server endpoints with Express.js",
      "Implemented JWT-secured flows",
      "Connected Firebase authentication",
    ],
    liveLink: "https://little-joyful-land.web.app/",
    github: [
      {
        id: 1,
        title: "client",
        link: "https://github.com/pm-rahman/little-joyful-land-client",
      },
      {
        id: 2,
        title: "server",
        link: "https://github.com/pm-rahman/little-joyfull-land-server",
      },
    ],
  },
  {
    id: 7,
    slug: "fresh-food",
    thumbnail: freshFood,
    title: "Fresh Food",
    role: "Recipe discovery app",
    category: "Food",
    status: "Live",
    mainTechnology: "React",
    languageColor: "#61dafb",
    updatedAt: "2025-03-03",
    stack: ["React", "Firebase", "Express"],
    description:
      "Explore the taste of Bangladesh through a React-based website. Discover a wide variety of recipes from talented Bangladeshi chefs. With ExpressJS handling the server side and the convenience of Firebase authentication.",
    fullDescription:
      "Fresh Food is a Bangladeshi recipe discovery app where users can explore chefs and recipes through a React frontend. Firebase authentication and an Express.js server support the core app experience.",
    features: [
      "Bangladeshi recipe discovery",
      "Chef-focused browsing",
      "Firebase authentication",
      "Express.js server integration",
      "Responsive recipe pages",
    ],
    responsibilities: [
      "Built recipe and chef browsing views",
      "Integrated authentication",
      "Connected frontend views to server data",
      "Designed responsive user flows",
    ],
    liveLink: "https://favourite-food-recipes.web.app/",
    github: [
      {
        id: 1,
        title: "client",
        link: "https://github.com/pm-rahman/frash-food-recipe-client",
      },
      {
        id: 2,
        title: "server",
        link: "https://github.com/pm-rahman/frash-food-recipe-server",
      },
    ],
  },
  {
    id: 8,
    slug: "travel-community",
    thumbnail: travel,
    title: "Travel Community",
    role: "Community dashboard",
    category: "Community",
    status: "Live",
    mainTechnology: "React",
    languageColor: "#61dafb",
    updatedAt: "2024-12-09",
    stack: ["React", "Dashboard", "Community"],
    description:
      "This is a Travel system application. There is a feature which will try to make a community among all travelers who will use the application. Any traveler can create his/her own community, where they can manage members from Dashboard. ",
    fullDescription:
      "Travel Community is a travel system application centered on traveler communities. Users can create communities and manage members through dashboard-style screens, creating a more connected experience for travel groups.",
    features: [
      "Traveler community creation",
      "Member management dashboard",
      "Community-oriented travel flows",
      "Responsive dashboard pages",
      "Client and server repository split",
    ],
    responsibilities: [
      "Built community and dashboard interfaces",
      "Implemented member management workflows",
      "Structured frontend state and reusable views",
      "Connected live deployment and repository links",
    ],
    liveLink: "https://travel-community-dd955.web.app/",
    github: [
      {
        id: 1,
        title: "client",
        link: "https://github.com/pm-rahman/Travel-community-client",
      },
      {
        id: 2,
        title: "server",
        link: "https://github.com/pm-rahman/Travel-community-server",
      },
    ],
  },
];

export default projectData;
