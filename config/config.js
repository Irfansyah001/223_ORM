require("dotenv").config(); // Load environment variables from .env file

const development = { // Development environment configuration
  username: process.env.DB_USER, // Database username from environment variable
  password: process.env.DB_PASS, // Database password from environment variable
  database: process.env.DB_DATABASE, // Database name from environment variable
  host: process.env.DB_HOST, // Database host from environment variable
  port: process.env.DB_PORT, // Database port from environment variable
  dialect: process.env.DB_DIALECT // Database dialect from environment variable
}

const test = { // Test environment configuration
  username: process.env.DB_USER, // Database username from environment variable
  password: process.env.DB_PASS, // Database password from environment variable
  database: process.env.DB_DATABASE_TEST, // Test database name from environment variable
  host: process.env.DB_HOST, // Database host from environment variable
  port: process.env.DB_PORT, // Database port from environment variable
  dialect: process.env.DB_DIALECT // Database dialect from environment variable
};

const production = { // Production environment configuration
  username: process.env.DB_USER, // Database username from environment variable
  password: process.env.DB_PASS, // Database password from environment variable
  database: process.env.DB_DATABASE_PROD, // Production database name from environment variable
  host: process.env.DB_HOST, // Database host from environment variable
  port: process.env.DB_PORT, // Database port from environment variable
  dialect: process.env.DB_DIALECT // Database dialect from environment variable
};

module.exports = { development, test, production }; // Export the configurations