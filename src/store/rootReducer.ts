import { combineReducers } from "@reduxjs/toolkit";
import { redirectAndNotificationReducers } from "./slicesAndThunks/redirectAndNotification/redirectAndNotification.slice";
import { usersReducers } from "./slicesAndThunks/users/users.slice";

export const rootReducer = combineReducers({
  redirectNotistack: redirectAndNotificationReducers,
  users: usersReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
