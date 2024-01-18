import type { StackScreenProps } from "@react-navigation/stack";

export enum Route {
  Collectibles = "Collectibles",
  Activity = "Activity",
  Settings = "Settings"
}

export type RootStackParamList = {
  Collectibles: undefined;
  Activity: undefined;
  Settings: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type CollectiblesScreenProps = RootStackScreenProps<
  keyof RootStackParamList
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
