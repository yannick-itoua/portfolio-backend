const express = require("express");
const { getProjects, addProject } = require("../controllers/projectController"); // Import controller functions

const router = express.Router();

// Route to get all projects
router.get("/", getProjects);

// Route to add a new project
router.post("/", addProject);

module.exports = router;
