import {UserSpaceSeries} from "./Series";

export interface User {
  username: string;
  subscriptionType: SubscriptionType;
  id: number;
  startedSeries: UserSpaceSeries[];
  pendingSeries: UserSpaceSeries[];
  finishedSeries: UserSpaceSeries[];
}

export enum SubscriptionType {
  Standard = "STANDARD",
  Premium = "PREMIUM",
}
