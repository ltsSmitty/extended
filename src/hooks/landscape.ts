import { LandscapeAction } from "src/actions/actionTypes";
import { TCallback } from "src/utilities/TCallback";
const onSurfaceSetStyle = (callback: TCallback) => {
  return context.subscribe("action.execute", (data) => {
    if (data.action === "surfacesetstyle" && data.result.cost !== 0) {
      callback(data);
    }
  });
};

export const onChangeLandscape = <T extends LandscapeAction>(
  sceneryAction: T,
  callback: TCallback
) => {
  switch (sceneryAction) {
    case "surfacesetstyle":
      return onSurfaceSetStyle(callback);
    default:
      return context.subscribe("action.execute", (data) => {
        if (data.action === sceneryAction && data.args.flags < 0) {
          callback(data);
        }
      });
  }
};
