import {
    getAllTutorials,
    getTutorialById,
    createTutorial,
    updateTutorialById,
    deleteTutorialById,
    deleteAllTutorials,
    getPublishedTutorials,
    findTutorialsByTitle
} from '../controllers/tutorial.controllers.js';

import { Router } from 'express';

const routes = (app) => {
    const router = Router();

    // Route to get all tutorials
    router.get("/", getAllTutorials);

    // Route to get a tutorial by ID
    router.get("/:id", getTutorialById);

    // Route to create a new tutorial
    router.post("/", createTutorial);

    // Route to update a tutorial by ID
    router.put("/updateById/:id", updateTutorialById);

    // Route to delete a tutorial by ID
    router.delete("/deleteById/:id", deleteTutorialById);

    // Route to delete all tutorials
    router.delete("/deleteAll/", deleteAllTutorials);

    // Route to get all published tutorials
    router.get("/published/getAll/", getPublishedTutorials);

    // Route to find tutorials by title keyword
    router.get("/", findTutorialsByTitle);

    app.use('/api/tutorials', router);
};

export default routes;
