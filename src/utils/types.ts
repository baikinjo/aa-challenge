export type City = {
  name: string;
  lat: number;
  lon: number;
};

export type Weather = {
  city: {
    timezone: number;
  };
  dt: number;
  temp: { day: number; };
  weather: {
    id: number;
    main: string;
    icon: string;
    description: string;
  }[];
};
