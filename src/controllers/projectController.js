const projects = [
  {
    _id: "1",
    title: "Blogging Platform",
    description: "A platform for creating and managing blog posts.",
    githubLink: "https://github.com/yannick-itoua/BloggingPlatform",
    image: "/bloggingplatform.png",
    stack: ["Node.js", "Express", "MongoDB", "React"]
  },
  {
    _id: "2",
    title: "Employee Management System",
    description: "A system to manage employees and their roles.",
    githubLink: "https://github.com/yannick-itoua/Employee-Management-System-angular-springboot",
    image: "/employeemanagementsystem.png",
    stack: ["Angular", "Spring Boot"]
  },
  {
    _id: "3",
    title: "To-Do App",
    description: "A simple to-do list application with user authentication.",
    githubLink: "https://github.com/yannick-itoua/to-do-react-django",
    image: "/todoapp.png",
    stack: ["React", "Django"]
  },
  {
    _id: "4",
    title: "Movie Catalog – MERN Full-Stack App",
    description: "A dynamic movie catalog application built with the MERN stack (MongoDB, Express, React, Node.js), allowing users to browse, search, and manage movies. The backend integrates TMDB API to fetch real-time movie data, while the frontend provides a clean and interactive UI with pagination, filtering, and CRUD operations. This project showcases API integration, database management, and full-stack development skills.",
    githubLink: "https://github.com/yannick-itoua/movie-catalog",
    image: "/Movie mern.png",
    stack: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    _id: "5",
    title: "Movie Catalog App Angular",
    description: "A dynamic movie catalog web application that allows users to browse, search, and manage movies efficiently. Built with Angular and optimized with Vite for fast performance, the app features filtering, sorting, and pagination for a seamless user experience. API requests are optimized to reduce load time and enhance responsiveness.",
    githubLink: "https://github.com/yannick-itoua/movie_catalog_angular",
    image: "/movie angular.png",
    stack: ["Angular", "Spring Boot", "PostgreSQL"]
  },
  {
    _id: "6",
    title: "Anime Catalog App Django",
    description: "A full-stack web application designed for anime enthusiasts to browse, search, and manage an anime collection. Built with Django (REST API) and Next.js, the app features a dynamic search function, real-time filtering, and a responsive UI. Users can explore an extensive anime database, search by title, and manage entries seamlessly. The project showcases my skills in backend API development, frontend UI design, and efficient state management.",
    githubLink: "https://github.com/yannick-itoua/movie_catalog_django",
    image: "/anime django.png",
    stack: ["Django", "Next.js"]
  },
  {
    _id: "7",
    title: "EasyAccess",
    description: "EasyAccess is a full-stack web application designed to help users find, share, and manage accessible public spaces in their city. Built with Next.js (React) for the frontend and Spring Boot for the backend, the platform features interactive maps, advanced filtering, and user authentication. Dockerized deployment and a PostgreSQL database ensure easy setup and scalability. The app prevents duplicate data, supports CRUD operations, and provides a seamless user experience for discovering inclusive locations.",
    githubLink: "https://github.com/yannick-itoua/EasyAccess",
    image: "/easyaccess.png",
    stack: ["Next.js", "React", "Spring Boot", "PostgreSQL", "Docker"]
  },
  {
    _id: "8",
    title: "BookBox",
    description: "BookBox is a full-stack digital library management system that allows users to browse, search, borrow and return books. Built with Next.js for the frontend and Spring Boot for the backend, the application features an intuitive UI with dynamic book search, user authentication, and real-time availability tracking. The platform leverages the Open Library API for extended book information and implements a robust borrowing system with status tracking. Containerized with Docker and using PostgreSQL for data persistence, BookBox showcases clean architecture principles with separate frontend/backend services and demonstrates my skills in creating responsive interfaces and RESTful API development.",
    githubLink: "https://github.com/yannick-itoua/BookBox",
    image: "/Bookbox.png",
    stack: ["Next.js", "React", "Spring Boot", "PostgreSQL", "Docker", "Tailwind CSS"]
  },
  {
    _id: "9",
    title: "WeatherWear",
    image: "/Weatherwear.png",
    description: "WeatherWear is a full-stack application built to help users make informed clothing decisions based on real-time weather conditions. Developed with Next.js 15 and TypeScript for the frontend and Spring Boot for the backend, this containerized solution delivers personalized outfit recommendations tailored to local weather patterns. The platform features user profiles with customizable clothing preferences, historical recommendation tracking, and comprehensive weather data visualization. A microservices architecture with Docker ensures smooth deployment and scalability, while the RESTful API design facilitates seamless integration with the OpenWeather API. The responsive UI built with Tailwind CSS provides consistent experiences across devices, helping users navigate unpredictable climates from harsh winters to sudden rainstorms with appropriate attire suggestions.",
    githubLink: "https://github.com/yannick-itoua/WeatherWear",
    stack: ["Next.js", "React", "Spring Boot", "PostgreSQL", "Docker", "Tailwind CSS"]
  }
];

// Fonction pour obtenir tous les projets
const getProjects = (req, res) => {
  res.status(200).json(projects);
};

// Fonction pour obtenir toutes les expériences
const getExperiences = (req, res) => {
  res.status(200).json(experiences);
};

// Fonction pour ajouter un projet
const addProject = (req, res) => {
  const newProject = {
    _id: String(projects.length + 1),
    title: req.body.title,
    description: req.body.description,
    githubLink: req.body.githubLink,
    image: req.body.image || "",
    stack: req.body.stack || []
  };
  projects.push(newProject);
  res.status(201).json(newProject);
};

module.exports = { getProjects, addProject, getExperiences };
