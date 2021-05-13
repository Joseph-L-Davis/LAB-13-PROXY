export function formatLocation(data) {
  return data.map(location => {
    return {
      city: location.display_name,
      latitude: location.lat,
      longitude: location.lon,
      icon: location.icon      
    };
  });
}

export function formatWeather(data) {
  return data.map(weather => {
    return {
      forecast: weather.description,
      time: weather.valid_date
    };
  });
}