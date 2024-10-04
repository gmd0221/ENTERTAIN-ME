const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());  // Parse JSON bodies (for POST requests)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
