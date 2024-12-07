import sql from './db.js';

class Tutorial {
    constructor(tutorial) {
        this.title = tutorial.title;
        this.description = tutorial.description;
        this.published = tutorial.published;
    }

    // Method to fetch all tutorials
    static getAll(result) {
        sql.query("SELECT * FROM tutorials", (err, res) => {
            if (err) {
                console.log("Error retrieving tutorials: ", err);
                result(err, null);
                return;
            }

            if (res.length === 0) {
                console.log("No tutorials found.");
                result(null, []);
                return;
            }

            console.log("Tutorials found: ", res);
            result(null, res);
        });
    }

    // Method to fetch a tutorial by ID
    static findById(id, result) {
        sql.query("SELECT * FROM tutorials WHERE id = ?", [id], (err, res) => {
            if (err) {
                console.log("Error retrieving tutorial by ID: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("Tutorial found: ", res[0]);
                result(null, res[0]);
                return;
            }

            console.log("Tutorial not found with ID: ", id);
            result({ kind: "not_found" }, null);
        });
    }

    // Method to add a new tutorial
    static create(newTutorial, result) {
        sql.query("INSERT INTO tutorials SET ?", newTutorial, (err, res) => {
            if (err) {
                console.log("Error creating tutorial: ", err);
                result(err, null);
                return;
            }

            console.log("Created tutorial: ", { id: res.insertId, ...newTutorial });
            result(null, { id: res.insertId, ...newTutorial });
        });
    }

    // Method to update a tutorial by ID
    static updateById(id, tutorial, result) {
        sql.query(
            "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
            [tutorial.title, tutorial.description, tutorial.published, id],
            (err, res) => {
                if (err) {
                    console.log("Error updating tutorial: ", err);
                    result(null, err);
                    return;
                }

                if (res.affectedRows === 0) {
                    console.log("Tutorial not found with ID: ", id);
                    result({ kind: "not_found" }, null);
                    return;
                }

                console.log("Updated tutorial: ", { id: id, ...tutorial });
                result(null, { id: id, ...tutorial });
            }
        );
    }

    // Method to delete a tutorial by ID
    static remove(id, result) {
        sql.query("DELETE FROM tutorials WHERE id = ?", [id], (err, res) => {
            if (err) {
                console.log("Error deleting tutorial: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows === 0) {
                console.log("Tutorial not found with ID: ", id);
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("Deleted tutorial with ID: ", id);
            result(null, res);
        });
    }

    // Method to remove all tutorials
    static removeAll(result) {
        sql.query("DELETE FROM tutorials", (err, res) => {
            if (err) {
                console.log("Error deleting all tutorials: ", err);
                result(null, err);
                return;
            }

            console.log(`Deleted ${res.affectedRows} tutorials`);
            result(null, res);
        });
    }

    // Method to find all published tutorials
    static getAllPublished(result) {
        sql.query("SELECT * FROM tutorials WHERE published = true", (err, res) => {
            if (err) {
                console.log("Error retrieving published tutorials: ", err);
                result(null, err);
                return;
            }

            if (res.length === 0) {
                console.log("No published tutorials found.");
                result(null, []);
                return;
            }

            console.log("Published tutorials found: ", res);
            result(null, res);
        });
    }

    // Method to find all tutorials with a specific keyword in the title
    static findByTitle(title, result) {
        sql.query("SELECT * FROM tutorials WHERE title LIKE ?", [`%${title}%`], (err, res) => {
            if (err) {
                console.log("Error retrieving tutorials by title: ", err);
                result(err, null);
                return;
            }

            if (res.length === 0) {
                console.log("No tutorials found with title containing: ", title);
                result(null, []);
                return;
            }

            console.log("Tutorials found by title: ", res);
            result(null, res);
        });
    }
}

export default Tutorial;
