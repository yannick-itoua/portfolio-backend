const express = require("express");
const { getProjects, addProject } = require("../controllers/projectController"); // Import des fonctions

const router = express.Router();

// Route GET pour obtenir tous les projets
router.get("/", getProjects);

// Route POST pour ajouter un nouveau projet
router.post("/", addProject);

router.get('/experiences', projectController.getExperiences); 
module.exports = router;
