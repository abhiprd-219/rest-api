import Tutorial from "../models/tutorial.model.js";

// Create and Save a new Tutorial
// Correct export of functions
export const create = (req, res) => {
    res.send("Create tutorial");
  };
  
  export const findAll = (req, res) => {
    res.send("Retrieve all tutorials");
  };
  
  export const findAllPublished = (req, res) => {
    res.send("Retrieve all published tutorials");
  };
  
  export const findOne = (req, res) => {
    res.send("Retrieve a single tutorial by ID");
  };
  
  export const update = (req, res) => {
    res.send("Update a tutorial");
  };
  
  export const deleteTutorial = (req, res) => {
    res.send("Delete a tutorial");
  };
  
  export const deleteAll = (req, res) => {
    res.send("Delete all tutorials");
  };
  