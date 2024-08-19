import { isString } from "./guard";
export { isString };
export interface TMovie {
  id: number;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  director: string;
  actors: string[];
  plot: string;
  poster: string;
  trailer: string;
  runtime: number;
  awards: string;
  country: Country;
  language: Language;
  boxOffice: string;
  production: string;
  website: string;
}

export enum Country {
  Usa = "USA",
}

export enum Language {
  English = "English",
}
