const express = require("express");
const projectController = require("../controllers/projectController"); // Import the full controller

const router = express.Router();

// Route GET pour obtenir tous les projets
router.get("/", projectController.getProjects);

// Route POST pour ajouter un nouveau projet
router.post("/", projectController.addProject);

// Route GET pour obtenir toutes les expériences
router.get('/experiences', projectController.getExperiences); 

module.exports = router;
