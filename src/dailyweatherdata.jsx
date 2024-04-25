import React from "react";

const API_KEY = "8a095553c8bf3aeb4f9560137c188f16";

export async function fetchDailyWeather(zipCode) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${API_KEY}&units=metric`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}