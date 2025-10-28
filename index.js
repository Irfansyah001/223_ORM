const express = require('express'); // Import Express framework
const app = express(); // Create an Express application
const db = require('./models'); // Import Sequelize models
const PORT = 3307 // Define the port number

app.use(express.json()); // Middleware to parse JSON request bodies

app.use(express.urlencoded({ // Middleware to parse URL-encoded request bodies
    extended: true // Allow nested objects
}));

app.listen(PORT, async () => { // Start the server
    console.log(`Server is running on http://localhost:${PORT}`); // Log the server URL
});

db.sequelize.sync() // Synchronize Sequelize models with the database
.then((result) => { // On successful synchronization
    app.listen(PORT, () => { // Start the server
        console.log(`Server is running on http://localhost:${PORT}`); // Log the server URL
    });
})

.catch((err) => {
    console.log(err);
});