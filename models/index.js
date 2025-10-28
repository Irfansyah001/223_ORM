'use strict'; // Enforce strict mode

const fs = require('fs'); // File system module
const path = require('path'); // Path module
const Sequelize = require('sequelize'); // Sequelize ORM
const process = require('process'); // Process module
const basename = path.basename(__filename); // Get the base name of the current file
const env = process.env.NODE_ENV || 'development'; // Determine the environment
const config = require(__dirname + '/../config/config.js')[env]; // Load the database configuration for the current environment
const db = {}; // Initialize an empty object to hold the models

let sequelize; // Declare the Sequelize instance
if (config.use_env_variable) { // If using environment variable for database connection
  sequelize = new Sequelize(process.env[config.use_env_variable], config); // Initialize Sequelize with the environment variable
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config); // Initialize Sequelize with config parameters
}

fs
  .readdirSync(__dirname) // Read all files in the current directory
  .filter(file => { // Filter the files
    return (
      file.indexOf('.') !== 0 && // Exclude hidden files
      file !== basename && // Exclude the current file
      file.slice(-3) === '.js' && // Include only .js files
      file.indexOf('.test.js') === -1 // Exclude test files
    );
  })
  .forEach(file => { // For each model file
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes); // Import the model
    db[model.name] = model; // Add the model to the db object
  });

Object.keys(db).forEach(modelName => { // For each model
  if (db[modelName].associate) { // If the model has associations
    db[modelName].associate(db); // Set up the associations
  }
});

db.sequelize = sequelize; // Export the Sequelize instance
db.Sequelize = Sequelize; // Export Sequelize class

module.exports = db; // Export the db object containing all models and Sequelize instance
