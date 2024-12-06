import express from 'express';
import routes from './routes/tutorial.routes.js'; // Adjust path as needed

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Call the routes function to set up the routes
routes(app);

// Set port and start the server
const PORT = process.env.PORT || 3022;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
