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