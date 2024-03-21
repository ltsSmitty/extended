import { HookAction } from "src/actions/actionTypes";

export type TCallback = (args: GameActionEventArgs<object> | undefined) => void;

export type EventCast<
  TArgs extends object = object,
  TResult extends GameActionResult = GameActionResult
> = GameActionEventArgs<TArgs> & {
  action: HookAction;
  result: Required<TResult>;
};
