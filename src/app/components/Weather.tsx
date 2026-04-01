'use client';

import { useEffect, useState } from 'react';

import { getWeather } from '../utils/getWeather';
import { useUserLocation } from '../hooks/useUserLocation';

export default function Weather() {
  //gets coordinates or  error message from useUserLocation
  const { coords, error } = useUserLocation();

  // stores weather
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    if (!coords) return;

    getWeather(coords.lat, coords.lon)
      .then(setWeather)
      .catch(() => console.error('Weather error'));
  }, [coords]);

  // location access denied
  if (error) {
    return (
      <div className="absolute top-5 left-0 p-2 z-100">
        <ul>{error}</ul>
      </div>
    );
  }

  // wating for location
  if (!coords) {
    return (
      <div className="absolute top-5 left-0 p-2 z-100 font-bold">
        <ul>Detecting your location...</ul>
      </div>
    );
  }

  // wating for weather
  if (!weather) {
    return (
      <div className="weather">
        <ul>Loading weather...</ul>
      </div>
    );
  }

  return (
    <div className="weather">
      <ul>🌍 Your weather</ul>
      <ul>🌡️ {weather.current_weather.temperature}°C</ul>
      <ul>💨 {weather.current_weather.windspeed} km/h</ul>
    </div>
  );
}
