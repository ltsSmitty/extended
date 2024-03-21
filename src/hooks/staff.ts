import { StaffAction } from "src/actions/actionTypes";
import { TCallback } from "src/utilities/TCallback";

export const onStaffAction = <T extends StaffAction>(staffAction: T, callback: TCallback) => {
  return context.subscribe("action.execute", (data) => {
    if (data.action === staffAction) {
      callback(data);
    }
  });
};
