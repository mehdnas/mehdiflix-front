export interface UserSpaceSeries {
  title: string;
  description: string;
  creators: Person[];
  actors: Person[];
  seriesType: SeriesType;
  id: number;
  episodePrice: number;
}

export enum SeriesType {
  Standard = "STANDARD",
  Silver = "SILVER",
  Gold = "GOLD",
}

export interface Person {
  name: string;
  surname: string;
  secondSurname?: string;
  id: number;
}
