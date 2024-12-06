import * as tutorials from '../controllers/tutorial.controllers.js';
import { Router } from "express";




const routes = (app) => {
    const router = Router();
    
    router.post("/", tutorials.create);
    router.get("/", tutorials.findAll);
    router.get("/published", tutorials.findAllPublished);
    router.get("/:id", tutorials.findOne);
    router.put("/:id", tutorials.update);
    // router.delete("/:id", tutorials.delete);
    router.delete("/", tutorials.deleteAll);
    
    app.use('/api/tutorials', router);
  };
  
  export default routes;

  console.log('create function:', tutorials.create);
console.log('findAll function:', tutorials.findAll);
console.log('findOne function:', tutorials.findOne);

  