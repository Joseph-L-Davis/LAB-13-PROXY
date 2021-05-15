import { locationData } from '../data/location-data.js';
import { weatherData } from '../data/weather-data.js';
import { yelpData } from '../data/yelp-data.js';
import { formatLocation, formatWeather, formatYelp } from '../lib/utils.js';


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

describe('Yelp Routes', () => {

  const expectedYelp = 
    [
      {
        'name': 'Timberwood Grill',
        'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/tYLDE6HRJuNmb5FGOrjSuA/o.jpg',
        'price': '$$',
        'rating': 4,
        'url': 'https://www.yelp.com/biz/timberwood-grill-charlottesville?adjust_creative=k9RolU7Bt9LyKvMZ0hzjLw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=k9RolU7Bt9LyKvMZ0hzjLw'
      },
      {
        'name': 'Martin\'s Grill',
        'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/jqkM52dRUPzDmVMU8rGjzg/o.jpg',
        'price': '$',
        'rating': 4,
        'url': 'https://www.yelp.com/biz/martins-grill-charlottesville?adjust_creative=k9RolU7Bt9LyKvMZ0hzjLw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=k9RolU7Bt9LyKvMZ0hzjLw'
      }
    ];

  // If a GET request is made to /api/cats, does:
  // 1) the server respond with status of 200
  // 2) the body match the expected API data?
  it('Munge Yelp', async () => {
    // act - make the request
    const output = await formatYelp(yelpData);

    expect(output).toEqual(expectedYelp);
  });

}); 