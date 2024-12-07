import Tutorial from '../models/tutorial.model.js'; // Adjust the path as needed

// Controller function to get all tutorials
export const getAllTutorials = (req, res) => {
    Tutorial.getAll((err, data) => {
        if (err) {
            console.error("Error retrieving tutorials:", err);
            return res.status(500).json({
                message: "Error retrieving tutorials",
                error: err,
            });
        }

        if (data.length === 0) {
            return res.status(404).json({
                message: "No tutorials found",
            });
        }

        res.status(200).json(data);
    });
};

// Controller function to get a tutorial by ID
export const getTutorialById = (req, res) => {
    const id = req.params.id;
    Tutorial.findById(id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                return res.status(404).json({
                    message: `Tutorial not found with id ${id}`,
                });
            }

            console.error("Error retrieving tutorial:", err);
            return res.status(500).json({
                message: `Error retrieving tutorial with id ${id}`,
                error: err,
            });
        }

        res.status(200).json(data);
    });
};

// Controller function to create a new tutorial
export const createTutorial = (req, res) => {
    const newTutorial = new Tutorial(req.body);

    Tutorial.create(newTutorial, (err, data) => {
        if (err) {
            console.error("Error creating tutorial:", err);
            return res.status(500).json({
                message: "Error creating tutorial",
                error: err,
            });
        }

        res.status(201).json(data);
    });
};

// Controller function to update a tutorial by ID
export const updateTutorialById = (req, res) => {
    const id = req.params.id;
    const tutorial = new Tutorial(req.body);

    Tutorial.updateById(id, tutorial, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                return res.status(404).json({
                    message: `Tutorial not found with id ${id}`,
                });
            }

            console.error("Error updating tutorial:", err);
            return res.status(500).json({
                message: `Error updating tutorial with id ${id}`,
                error: err,
            });
        }

        res.status(200).json(data);
    });
};

// Controller function to delete a tutorial by ID
export const deleteTutorialById = (req, res) => {
    const id = req.params.id;

    Tutorial.remove(id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                return res.status(404).json({
                    message: `Tutorial not found with id ${id}`,
                });
            }

            console.error("Error deleting tutorial:", err);
            return res.status(500).json({
                message: `Error deleting tutorial with id ${id}`,
                error: err,
            });
        }

        res.status(200).json({
            message: `Tutorial with id ${id} deleted successfully`,
        });
    });
};

// Controller function to delete all tutorials
export const deleteAllTutorials = (req, res) => {
    Tutorial.removeAll((err, data) => {
        if (err) {
            console.error("Error deleting all tutorials:", err);
            return res.status(500).json({
                message: "Error deleting all tutorials",
                error: err,
            });
        }

        res.status(200).json({
            message: `All tutorials deleted successfully`,
        });
    });
};

// Controller function to get all published tutorials
export const getPublishedTutorials = (req, res) => {
    Tutorial.getAllPublished((err, data) => {
        if (err) {
            console.error("Error retrieving published tutorials:", err);
            return res.status(500).json({
                message: "Error retrieving published tutorials",
                error: err,
            });
        }

        if (data.length === 0) {
            return res.status(404).json({
                message: "No published tutorials found",
            });
        }

        res.status(200).json(data);
    });
};

// Controller function to find tutorials by title keyword
export const findTutorialsByTitle = (req, res) => {
    const title = req.query.title;

    if (!title) {
        return res.status(400).json({
            message: "Title query parameter is required",
        });
    }

    Tutorial.findByTitle(title, (err, data) => {
        if (err) {
            console.error("Error retrieving tutorials by title:", err);
            return res.status(500).json({
                message: `Error retrieving tutorials with title containing '${title}'`,
                error: err,
            });
        }

        if (data.length === 0) {
            return res.status(404).json({
                message: `No tutorials found with title containing '${title}'`,
            });
        }

        res.status(200).json(data);
    });
};
