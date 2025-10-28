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
        console.log(`Databaseis running on http://localhost:${PORT}`); // Log the server URL
    });
})

.catch((err) => { // On error during synchronization
    console.log(err); // Log the error
});

app.post('/komiks', async (req, res) => { // Endpoint to create a new Komik
    const data = req.body; // Get data from request body
    try {
        const komik = await db.Komik.create(data); // Create a new Komik record
        res.send(komik); // Send the created record as response
    } catch (error) { // Handle errors
        res.send(error); // Send error if creation fails
    }
});

app.get('/komiks', async (req, res) => { // Endpoint to get all Komiks
    try {
        const komiks = await db.Komik.findAll(); // Retrieve all Komik records
        res.send(komiks); // Send the records as response
    } catch (error) { // Handle errors
        res.send(error); // Send error if retrieval fails
    }  
});