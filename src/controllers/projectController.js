const projects = [
  {
    _id: "1",
    title: "Blogging Platform ",
    description: "A modern full-stack application for creating, editing, and managing blogs with secure user authentication, role-based access control, and real-time comment management. Built with Next.js, Tailwind CSS, Express.js, and MongoDB for a responsive and scalable user experience.",
    githubLink: "https://github.com/yannick-itoua/BloggingPlatform.git",
    //liveLink: "",
  },
  {
    _id: "2",
    title: "Employee Management System",
    description: "A full-stack web application for managing employee data, built with Angular, Spring Boot, and PostgreSQL. Features include dynamic search, server-side pagination, responsive UI with Tailwind CSS, and real-time form validation for seamless user interaction.",
    githubLink: "https://github.com/yannick-itoua/Employee-Management-System-angular-springboot.git",
    //liveLink: null,
  },
  {
    _id: "3",
    title: "to do list",
    description: "A full-stack task management application built with React and Django REST Framework. Features include user authentication, task creation, editing, and deletion, with automated email reminders powered by Django Celery and Redis. A responsive and modern design ensures a seamless user experience.",
    githubLink: "https://github.com/yannick-itoua/to-do-react-django.git",
    //liveLink: null,
  },
];

// Obtenir tous les projets
const getProjects = (req, res) => {
  res.status(200).json(projects);
};

// Ajouter un projet (optionnel)
const addProject = (req, res) => {
  const newProject = {
    _id: String(projects.length + 1),
    title: req.body.title,
    description: req.body.description,
    githubLink: req.body.githubLink,
    //liveLink: req.body.liveLink || null,
  };
  projects.push(newProject);
  res.status(201).json(newProject);
};

module.exports = { getProjects, addProject };
