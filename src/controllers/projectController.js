const projects = [
  {
    _id: "1",
    title: "Blogging Platform",
    description: "A platform for creating and managing blog posts.",
    githubLink: "https://github.com/yannick-itoua/BloggingPlatform",
    image: "/bloggingplatform.png",
  },
  {
    _id: "2",
    title: "Employee Management System",
    description: "A system to manage employees and their roles.",
    githubLink: "https://github.com/yannick-itoua/Employee-Management-System-angular-springboot",
    image: "/employeemanagementsystem.png",
  },
  {
    _id: "3",
    title: "To-Do App",
    description: "A simple to-do list application with user authentication.",
    githubLink: "https://github.com/yannick-itoua/to-do-react-django",
    image: "/todoapp.png",
  },
];

// Fonction pour obtenir tous les projets
const getProjects = (req, res) => {
  res.status(200).json(projects);
};

// Fonction pour ajouter un projet
const addProject = (req, res) => {
  const newProject = {
    _id: String(projects.length + 1),
    title: req.body.title,
    description: req.body.description,
    githubLink: req.body.githubLink,
    image: req.body.image || "",
  };
  projects.push(newProject);
  res.status(201).json(newProject);
};

module.exports = { getProjects, addProject };
