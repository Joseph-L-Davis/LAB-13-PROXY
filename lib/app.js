/* eslint-disable no-console */
// import dependencies
import express from 'express';
import request from 'superagent';
import cors from 'cors';
import morgan from 'morgan';
import { formatLocation, formatWeather, formatYelp } from './utils.js';

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
  res.send('Proxy Stuff API');
});

// API routes,
//  Location
app.get('/location', async (req, res) => {
  try {
    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_API_KEY}&q=${req.query.search}&format=json`);

    const locations = formatLocation(response.body);
    res.json(locations);
  }
  catch(err) {
    console.log(err.message);
    res.status(500).send({ error: err });
  }
});

// Weather
app.get('/weather', async (req, res) => {
  try {
    const response = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.WEATHER_API_KEY}`);
    console.log(response.body);
    const weather = formatWeather(response.body);

    res.json(weather);
  }
  catch(err) {
    console.log(err.message);
    res.status(500).send({ error: err });
  }
});

app.get('/yelp', async (req, res) => {
  try {
    const response = await request
      .get(`https://api.yelp.com/v3/businesses/search?latitude=${req.query.coordinates.latitude}&longitude=${req.query.coordinates.longitude}`)
      .set(`Authorization: ${process.env.YELP_API_KEY}`);
    console.log(response.body);
    const yelp = formatYelp(response.body);

    res.json(yelp);
  }
  catch(err) {
    console.log(err.message);
    res.status(500).send({ error: err });
  }
});

export default app;