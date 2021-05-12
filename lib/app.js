/* eslint-disable no-console */
// import dependencies
import express from 'express';
import request from 'superagent';
import cors from 'cors';
import morgan from 'morgan';
import { formatLocation } from './utils.js';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

// heartbeat route
app.get('/', (req, res) => {
  res.send('Location API');
});

// API routes,
app.get('/location', async (req, res) => {
  try {
    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_API_KEY}&q=${req.query.search}&format=json`);
    // .query({ key: process.env.LOCATION_API_KEY })
    // .query({ q: req.query.search })
    // .query({ format: json });
    const locations = formatLocation(response.body);
    console.log(response);
    console.log(response.body);
    res.json(locations);
  }
  catch(err) {
    console.log(err.message);
    res.status(500).send({ error: err });
  }
});

export default app;