const express = require('express');
const app = express();
const db = require('./models');
const PORT = 3307

app.use(express.json());

app.use(express.urlencoded({ 
    extended: true 
}));

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

db.sequelize.sync()
.then((result) => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})

.catch((err) => {
    console.log(err);
});