require('dotenv').config();

const express = require('express');
const expressLayount = require('express-ejs-layouts');

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files

app.use(express.static('public'));