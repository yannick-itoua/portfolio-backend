const Project = require("../models/Project");

// Fetch all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new project
exports.addProject = async (req, res) => {
  const { title, description, techStack, githubLink, liveLink } = req.body;
  try {
    const newProject = new Project({ title, description, techStack, githubLink, liveLink });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
