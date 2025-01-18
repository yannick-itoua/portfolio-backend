const projects = [
  {
    _id: "1",
    title: "Blogging Platform",
    description: "A platform for creating and managing blog posts.",
    githubLink: "https://github.com/yannick-itoua/blogging-platform",
    image: "/bloggingplatform.png", // Path to the image
  },
  {
    _id: "2",
    title: "Employee Management System",
    description: "A system to manage employees and their roles.",
    githubLink: "https://github.com/yannick-itoua/employee-management-system",
    image: "/Employee Management System.png",
  },
  {
    _id: "3",
    title: "To-Do App",
    description: "A simple to-do list application with user authentication.",
    githubLink: "https://github.com/yannick-itoua/todo-app",
    image: "/todoapp.png",
  },
];

const getProjects = (req, res) => {
  res.status(200).json(projects);
};

module.exports = { getProjects };
//nothing