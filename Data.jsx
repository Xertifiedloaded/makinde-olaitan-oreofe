import digiCosmetics from "./public/digiCosmetics.png"
import portfolio from "./public/digiCosmetics.png"
import appleStore from "./public/appleStore.png"
import golsam from "./public/golsam.png"

import Testimonial1 from "./public/testimonial1.jpg"
import Testimonial2 from "./public/testimonial2.jpg"
import Testimonial3 from "./public/testimonial3.jpg"
import Testimonial4 from "./public/testimonial4.jpg"
import Testimonial5 from "./public/testimonial5.jpg"

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Resume",
    path: "resume",
  },
  {
    name: "Testimonials",
    path: "testimonial",
  },
  {
    name: "Pricing",
    path: "pricing",
  },
  {
    name: "Blog",
    path: "blog",
  },
  {
    name: "Contact",
    path: "contact",
  },
]

export const skill = [
  {
    id: 1,
    name: "HTML",
    percentage: 99,
    description:
      "Hypertext Markup Language (HTML) is the standard markup language used to create web pages and web applications.",
  },

  {
    id: 2,
    name: "JavaScript",
    percentage: 90,
    description:
      "JavaScript is a scripting language used for creating dynamic web pages and web applications.",
  },

  {
    id: 3,
    name: "React.js",
    percentage: 85,
    description:
      "A popular JavaScript library for building user interfaces, React is used to create dynamic and responsive web applications.",
  },

  {
    id: 4,
    name: "Next.js",
    percentage: 75,
    description:
      "Next.js is a React-based framework for building server-side rendered and statically generated web applications.",
  },

  {
    id: 5,
    name: "TypeScript",
    percentage: 75,
    description:
      "TypeScript is a superset of JavaScript that adds optional static typing and other features to the language.",
  },

  {
    id: 6,
    name: "Tailwind CSS",
    percentage: 80,
    description:
      "Tailwind CSS is a utility-first CSS framework that provides developers with a set of pre-built CSS classes for styling web applications.",
  },

  {
    id: 7,
    name: "Git",
    percentage: 80,
    description:
      "Git is a widely used version control system that is essential for collaborative development and project management. ",
  },

  {
    id: 8,
    name: "Webpack",
    percentage: 50,
    description:
      "Webpack is a module bundler for modern JavaScript applications. It bundles assets, modules, and dependencies into a single file.",
  },

  {
    id: 9,
    name: "RESTful API",
    percentage: 90,
    description:
      "RESTful API is an interface that two computer systems use to exchange information securely over the internet.",
  },

  {
    id: 10,
    name: "Redux",
    percentage: 80,
    description:
      "Redux is a predictable state container for JavaScript apps, used to manage the state of complex applications.",
  },
]

export const project = [
  {
    id: 1,
    img: digiCosmetics,
    category: "Landing",
    title: "digiCosmetics",
    description:
      "Landing page designed for selling cosmetic products. It typically includes a visually appealing design, easy navigation, and clear product descriptions.",
    url: "https://digicosmetics.netlify.app",
    sourceUrl: "https://github.com/khakiiman/digiCosmetics",
  },

  {
    id: 2,
    img: portfolio,
    category: "Portfolio",
    title: "Developer Portfolio",
    description:
      "This Portfolio involves creating a visually appealing and user-friendly website that showcases the skills and portfolio of a frontend developer.",
    url: "http://imankhaki.netlify.app/",
    sourceUrl: "https://github.com/khakiiman/portfolio",
  },

  {
    id: 3,
    img: appleStore,
    category: "Ecommerce",
    title: "New Apple Store",
    description:
      "The new Apple Store landing page is a web page designed for showcasing and promoting Apple products, services, and features.",
    url: "https://newapplestore.netlify.app/",
    sourceUrl: "https://github.com/khakiiman/applestore",
  },

  {
    id: 4,
    img: golsam,
    category: "Blog",
    title: "Golsam Sepahan",
    description:
      "A new design blog provides informative content related to the agricultural industry, including tips and advice on the use of fertilizers and pesticides. ",
    url: "https://golsamsepahan.netlify.app",
    sourceUrl: "https://github.com/khakiiman/golsam-sepahan",
  },
]


export const cv = [
  {
    id: 1,
    title: "Basic of Coding",
    subtitle: "Coding Basics by Segun and Sikiru Abidemi",
    date: "2020 - 2021",
    description:
      "I was taught the basics of coding by Segun and Sikiru Abidemi. This foundational knowledge helped me develop a strong base in programming, which has been instrumental in my career growth.",
    category: "education",
  },
  {
    id: 2,
    title: "Federal University Of Agriculture",
    subtitle: "B.Sc. in Agriculture",
    date: "2017 - 2023",
    description:
      "The Bachelor of Science in Agriculture program at the Federal University of Agriculture equips students with comprehensive knowledge and practical skills in agricultural science. The curriculum covers various aspects of agriculture, including crop production, soil science, animal husbandry, and agricultural technology. Students gain hands-on experience through fieldwork and research projects, preparing them to address challenges in modern agriculture and contribute to the advancement of sustainable farming practices.",
    category: "education",
  },
  {
    id: 3,
    title: "TechyJoint",
    subtitle: "UI/UX Design",
    date: "2022 - 2023",
    description:
      "The UI/UX Design program at TechyJoint provided a comprehensive understanding of user interface and user experience design principles. This training included learning about design tools, user research, wireframing, and prototyping, which are crucial for creating intuitive and visually appealing digital products.",
    category: "education",
  },
  {
    id: 4,
    title: "Africa Trainovation Center",
    subtitle: "Frontend (React and Next.js)",
    date: "2022 - 2023",
    description:
      "The Frontend (React and Next.js) program at Africa Trainovation Center focused on developing skills in building modern web applications using React and Next.js. The training covered component-based architecture, state management, and server-side rendering techniques, equipping me to create dynamic and high-performance user interfaces.",
    category: "education",
  },
  {
    id: 5,
    title: "Career Connect",
    subtitle: "Backend",
    date: "2023 - 2024",
    description:
      "The SQL Server Certificate program at Career Connect is a training program that provides students with advanced knowledge of SQL Server databases, including database design, administration, and programming.",
    category: "education",
  },
  {
    id: 6,
    title: "Freelancing (Web Development)",
    subtitle: "Blog",
    date: "2017 - 2018",
    description:
      "As a freelance frontend developer, I was responsible for developing the frontend of a blog website from scratch, which involved creating an intuitive and visually engaging user interface. My responsibilities included designing and implementing responsive layouts, optimizing website performance, and ensuring cross-browser compatibility.",
    category: "experience",
  },
  {
    id: 7,
    title: "Duwithub (Frontend Developer)",
    subtitle: "Crypto Company",
    date: "2023 - 2024",
    description:
      "At Duwithub, I worked as a frontend developer for a crypto company, focusing on building and maintaining the user interface of their web applications. My role involved implementing design specifications, optimizing performance, and ensuring a seamless user experience.",
    category: "experience",
  },
  {
    id: 8,
    title: "Department of Animal Breeding and Genetics",
    subtitle: "Fullstack Developer",
    date: "2023 - Present",
    description:
      "Currently working as a Fullstack Developer at the Department of Animal Breeding and Genetics, where I am involved in developing and maintaining web applications for managing breeding and genetics data. My role includes both frontend and backend development tasks.",
    category: "experience",
  },
  {
    id: 9,
    title: "Buystuff (Fullstack Developer)",
    subtitle: "E-commerce",
    date: "2024 - Present",
    description:
      "Working as a Fullstack Developer at Buystuff, an e-commerce company, where I am responsible for developing and optimizing their online store. My work includes designing user interfaces, implementing backend functionality, and ensuring a smooth shopping experience for customers.",
    category: "experience",
  },
  {
    id: 10,
    title: "Facilitator",
    subtitle: "Teaching",
    date: "2024 - Present",
    description:
      "Currently serving as a facilitator, teaching a group of 10 students. My role involves delivering lessons, providing guidance, and helping students develop their skills in various subjects.",
    category: "experience",
  },
  {
    id: 11,
    title: "Tech Monstro (Frontend Developer)",
    subtitle: "Tech Monstro",
    date: "2024 - Present",
    description:
      "As a Frontend Developer at Tech Monstro, I am responsible for designing and implementing user interfaces for their web applications. This role involves collaborating with designers and backend developers to create high-quality and user-friendly digital products.",
    category: "experience",
  },
  {
    id: 12,
    title: "Coming Soon...",
    subtitle: "Coming Soon...",
    date: "2024 - Present",
    description:
      "Coming Soon...",
    category: "experience",
  },
];


export const testimonial = [
  {
    id: 1,
    img: Testimonial1,
    name: "Barbara Wilson",
    author: "CEO Company",
    description: "Coming Soon...",
  },
  {
    id: 2,
    img: Testimonial2,
    name: "Charlie Smith",
    author: "Designer",
    description: "Coming Soon...",
  },
  {
    id: 3,
    img: Testimonial3,
    name: "Roy Wang",
    author: "Manager GYM",
    description: "Coming Soon...",
  },
  {
    id: 4,
    img: Testimonial4,
    name: "Jennifer Smith",
    author: "CEO & Founder",
    description: "Coming Soon...",
  },
  {
    id: 5,
    img: Testimonial5,
    name: "Paul Freeman",
    author: "Photographer",
    description: "Coming Soon...",
  },
]

export const post = [
  {
    id: 1,
    date: "October 31, 2022",
    imgURL:
      "https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/freeCodeCamp-Cover.png",
    title: "Introduction to React Hooks",
    description:
      "Learn how to use React Hooks to simplify state management and improve performance in your frontend applications.",
  },
  {
    id: 2,
    date: "November 19, 2022",
    imgURL: "https://softagency.in/wp-content/uploads/2023/02/vuejsfeat.jpg",
    title: "Getting Started with Vue.js",
    description:
      "Explore the basics of Vue.js, a progressive JavaScript framework for building user interfaces.",
  },
  {
    id: 3,
    date: "April 12, 2022",
    imgURL:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*qF8LfAwUhl57g9T0BVvVdg.jpeg",
    title: "Best Practices for Responsive Web Design",
    description:
      "Discover the key principles and techniques for creating responsive web designs that look great on any device.",
  },
  {
    id: 4,
    date: "March 5, 2022",
    imgURL:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--CHCog3Bn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/3200/1%2AtiS4RzayAJdIeTEkNL1ztw.png",
    title: "Mastering CSS Flexbox",
    description:
      "Get up to speed with CSS Flexbox, a powerful layout tool for building modern, flexible, and responsive web designs.",
  },
  {
    id: 5,
    date: "June 25, 2022",
    imgURL:
      "https://silktide.com/app/uploads/2021/05/We-analyzed-6554-websites-1024x576.jpg",
    title: "Creating Accessible Web Content",
    description:
      "Learn how to make your web content more accessible to users with disabilities, including tips for designing for screen readers and other assistive technologies.",
  },
  {
    id: 6,
    date: "November 19, 2022",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OyXMz4TaaY4FJOg00N6c7zsYKuqAAA8VUA&usqp=CAU",
    title: "10 Tips for Writing Clean Code in JavaScript",
    description:
      "Discover best practices for writing clean, maintainable, and efficient JavaScript code that will help you become a better developer.",
  },
  {
    id: 7,
    date: "November 19, 2022",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lU_0yLYzO5o9oKAeShqM-8y_s1BWudtcyQ&usqp=CAU",
    title: "The Future of Frontend Development: What to Expect in 2022",
    description:
      "Explore the latest trends and technologies in frontend development.",
  },
  {
    id: 8,
    date: "November 19, 2022",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANuqChNWRh2a5AbtgPZYPnAogzqDsBQ-dAg&usqp=CAU",
    title: "10 Essential Tools for Every Frontend Developer",
    description:
      "Check out our list of must-have tools for frontend developers, from code editors.",
  },
  {
    id: 9,
    date: "November 19, 2022",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpPs_cWDHKLvC45gy0btz4sNfD9LOArjcdA&usqp=CAU",
    title: "Mastering the Fundamentals of Web Development",
    description:
      "Learn the basics of web development, including HTML, CSS, and JavaScript, and start building your own web applications from scratch.",
  },
  {
    id: 10,
    date: "November 19, 2022",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KXJ50sZkMTcGcKBRpGj3Vnwz8g6iTnqKSQ&usqp=CAU",
    title: "Creating Beautiful and Responsive UI Designs with CSS Grid",
    description:
      "Get up to speed with CSS Grid, a powerful layout tool for creating complex and responsive user interfaces that adapt to any screen size.",
  },
]
