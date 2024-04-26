const API_KEY = "1819e5659f324688bb3142417241204";

export async function fetchWeatherData(zipCode) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${zipCode}&days=7`
    );
    if (!response.ok) {
      throw new Error('Error fetching weather data');
    }
    const forecastData = await response.json();
    return forecastData.forecast.forecastday; 
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
