import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usersState } from "./users.state";
// ts
import { IUsersListItem } from "../../../ts/interfaces/users.interfaces";
// thunks
import { getUsersListThunk, getUserInfoByIdThunk, editUserThunk, deleteUserThunk } from "./users.thunk";

const usersSlice = createSlice({
  name: "users",
  initialState: usersState,
  reducers: {
    resetUsersState: () => {
      return usersState;
    },
  },

  extraReducers: (builder) => {
    // get users list
    builder.addCase(getUsersListThunk.pending, (state) => {
      state.usersLoading = true;
    });
    builder.addCase(getUsersListThunk.fulfilled, (state, action: PayloadAction<Array<IUsersListItem>>) => {
      state.usersList = action.payload.reverse();
      state.usersLoading = false;
    });
    builder.addCase(getUsersListThunk.rejected, (state) => {
      state.usersLoading = false;
      state.usersList = [];
    });

    // get user by id
    builder.addCase(getUserInfoByIdThunk.pending, (state) => {
      state.usersLoading = true;
    });
    builder.addCase(getUserInfoByIdThunk.fulfilled, (state, action: PayloadAction<IUsersListItem>) => {
      state.usersLoading = false;
      state.detailUser = action.payload;
    });
    builder.addCase(getUserInfoByIdThunk.rejected, (state) => {
      state.usersLoading = false;
      state.detailUser = null;
    });

    // edit
    builder.addCase(editUserThunk.fulfilled, (state, action: PayloadAction<IUsersListItem>) => {
      state.detailUser = action.payload;
    });

    // delete
    builder.addCase(deleteUserThunk.fulfilled, (state, action: PayloadAction<number>) => {
      state.usersList = state.usersList.filter((user) => user.id !== action.payload);
    });
  },
});

export const usersReducers = usersSlice.reducer;

export const { resetUsersState } = usersSlice.actions;
