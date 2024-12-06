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
}

export default Tutorial;
