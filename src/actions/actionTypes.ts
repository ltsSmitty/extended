import {
  landscapeActions,
  sceneryActions,
  scenarioEditingActions,
  parkChangeActions,
  rideActions,
  guestActions,
  staffActions,
  networkActions,
  otherActions,
  parkActions,
  hookActions,
} from "./actions";

export type LandscapeAction = (typeof landscapeActions)[number];
export type SceneryAction = (typeof sceneryActions)[number];
export type ScenarioEditingAction = (typeof scenarioEditingActions)[number];
export type ParkChangeAction = (typeof parkChangeActions)[number];
export type RideAction = (typeof rideActions)[number];
export type GuestAction = (typeof guestActions)[number];
export type StaffAction = (typeof staffActions)[number];
export type NetworkAction = (typeof networkActions)[number];
export type OtherAction = (typeof otherActions)[number];
export type ParkAction = (typeof parkActions)[number];
export type HookAction = (typeof hookActions)[number];

export type ExtendedActionType =
  | LandscapeAction
  | SceneryAction
  | ScenarioEditingAction
  | ParkChangeAction
  | RideAction
  | GuestAction
  | StaffAction
  | NetworkAction
  | OtherAction
  | ParkAction
  | HookAction;
