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

        // Send the fetched tutorials as JSON
        res.status(200).json(data);
    });
};
