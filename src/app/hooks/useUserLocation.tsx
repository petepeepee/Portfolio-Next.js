import { useEffect, useState } from 'react';

export function useUserLocation() {
  // defining variables to store coordinations for the current location
  const [coords, setCoords] = useState<{
    lat: number;
    lon: number;
  } | null>(null);

  // defining variable to store errors
  const [error, setError] = useState<string | null>(null);

  //checking if geolocation is supported
  useEffect(() => {
    if (!navigator.geolocation) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setError('Geolocation not supported');
      return;
    }

    // function to get user location/coordinates for latitude and longitude to export
    const getCurrentPosition = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        () => {
          setError('Location denied');
        },
      );
    };

    getCurrentPosition();
  }, []);

  return { coords, error };
}
