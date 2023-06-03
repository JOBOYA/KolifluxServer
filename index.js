import express from 'express';
import db from './config/Database.js';
import router from './routes/index.js';
import dotenv from 'dotenv';
import cookieParsers from 'cookie-parser';
import cors from 'cors';
dotenv.config();

// Create a new express application instance
const app = express();

//
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}.`);
});


try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

//app.use(cors({ origin: ['https://koliflux.onrender.com', 'https://taupe-hummingbird-5f0d47.netlify.app'], credentials: true }));
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));



app.use (cookieParsers());
app.use(express.json());
app.use(router);
