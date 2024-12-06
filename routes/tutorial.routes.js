import { getAllTutorials } from '../controllers/tutorial.controllers.js';
import { Router } from 'express';

const routes = (app) => {
    const router = Router();

    // Route to get all tutorials
    router.get("/", getAllTutorials);

    app.use('/api/tutorials', router);
};

export default routes;
