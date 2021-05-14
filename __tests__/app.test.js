import { locationData } from '../data/location-data.js';
import { weatherData } from '../data/weather-data.js';
import { formatLocation, formatWeather } from '../lib/utils.js';


describe('location Routes', () => {

  const expectedLocations = 
    
      {
        'formatted_query': 'Portland, Multnomah County, Oregon, USA',
        'latitude': '45.5202471',
        'longitude': '-122.6741949',
      }
    ;

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
        'forecast': 'Broken clouds'
      },
      {
        'time': '2021-05-13',
        'forecast': 'Few clouds'
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

