export function formatLocation(data) {
  console.log(data);
  return data.map(location => {
    return {
      formatted_query: location.display_name,
      latitude: location.lat,
      longitude: location.long      
    };
  });
}