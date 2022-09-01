import { City } from './types';

export const IMAGE_URL = 'http://openweathermap.org/img/wn';
export const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast/daily';
export const CITIES: City[] = [
  { name: 'Seoul', lat: 37.5666791, lon: 126.9782914 },
  { name: 'Toronto', lat: 43.6534817, lon: -79.3839347 },
  { name: 'Paris', lat: 48.8588897, lon: 2.3200410217200766 }
];

/**
 * Dangerous approach, exposing secret key to public
 * For the sake of this challenge I'm leaving it as a constant
 * In real-life case it should be hidden as environment variable
 */
export const API_KEY = '9461adbcc99edc6bc9077526bd2dd247'
