//defining and exporting async function to get weather through coordinates from open-meteo

export async function getWeather(lat: number, lon: number) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
  );

  if (!res.ok) throw new Error('Failed to fetch weather');

  return res.json();
}
