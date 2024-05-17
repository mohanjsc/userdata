const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();

connectDB();

app.use(bodyParser.json());

app.use(express.json({ extended: false }));

// app.use(cors({
//   origin: 'http://localhost:3000'  // Allow requests from this origin
// }));

app.use(cors());

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
