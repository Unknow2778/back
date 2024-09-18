require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const i18n = require('i18n');

const routes = require('./routes');
const database = require('./config/database');

const app = express();
const host = process.env.APP_HOST;
const port = process.env.APP_PORT;

// Configure i18n
i18n.configure({
  locales: ['en', 'kn'], // Add your supported locales here
  directory: __dirname + '/locales', // Path to your translation files
  defaultLocale: 'kn', // Default locale
  cookie: 'your-cookie-name', // Optional: cookie name for storing locale
  queryParameter: 'lang', // Optional: query parameter for locale
  autoReload: true, // Optional: auto reload translations when files change
  syncFiles: true, // Optional: sync translations between files
  logWarnFn: (msg) => console.warn(msg), // Optional: function to log warnings
});

// Use i18n middleware
app.use(i18n.init);

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

database();

app.use(``, routes());

app.listen(port, () => {
  console.log(`Server started at ${host}:${port}/`);
});

module.exports = app;
