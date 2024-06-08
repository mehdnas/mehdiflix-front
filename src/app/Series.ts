
export class SeriesEntry{
  constructor(
    public series: UserSpaceSeries,
    public selected: boolean = false
  ) {}
}

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
  firstName: string;
  lastName: string;
  secondLastName?: string;
  id: number;
}
