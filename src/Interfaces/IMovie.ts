export enum Genre {
  Comedy,
  Horror,
  Action,
  Decetive,
  Fanastics
}

export interface IMovie {
  id: number;
  label: string;
  genre: Genre;
  director: string;
  price: number;
  image: string;
}
