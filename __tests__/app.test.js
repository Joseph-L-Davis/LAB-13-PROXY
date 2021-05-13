import { locationData } from '../data/location-data.js';
import { weatherData } from '../data/weather-data.js';
import { formatLocation, formatWeather } from '../lib/utils.js';


describe('location Routes', () => {

  const expectedLocations = 
    [
      {
        'city': 'Portland, Multnomah County, Oregon, USA',
        'latitude': '45.5202471',
        'longitude': '-122.6741949',
        'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
      },
      {
        'city': 'Portland, Cumberland County, Maine, USA',
        'latitude': '43.6610277',
        'longitude': '-70.2548596',
        'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
      }
    ];

  // If a GET request is made to /api/cats, does:
  // 1) the server respond with status of 200
  // 2) the body match the expected API data?
  it('Munge location', async () => {
    // act - make the request
    const output = formatLocation(locationData);

    expect(output).toEqual(expectedLocations);
  });

});

describe('weather Routes', () => {

  const expectedWeather = 
    [
      {
        'time': '2021-05-12',
        'forecast': {
          'description': 'Broken clouds'
        },
      },
      {
        'valid_date': '2021-05-13',
        'weather': {
          'description': 'Few clouds'
        },
      }
    ];

  // If a GET request is made to /api/cats, does:
  // 1) the server respond with status of 200
  // 2) the body match the expected API data?
  it('Munge weather', async () => {
    // act - make the request
    const output = formatWeather(weatherData);

    expect(output).toEqual(expectedWeather);
  });

});