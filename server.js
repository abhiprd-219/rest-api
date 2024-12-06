import express from 'express';
import bodyParser from 'body-parser';
import tutorialRoutes from "./routes/tutorial.routes.js";


const app = express();

// Middleware
app.use(bodyParser.json());

// Sample Route
app.get('/', (req, res) => {
    res.send('Hey! I am abhi and creating my very first express Application');
});

tutorialRoutes(app);
// Set Port
const PORT = process.env.PORT || 3022;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
