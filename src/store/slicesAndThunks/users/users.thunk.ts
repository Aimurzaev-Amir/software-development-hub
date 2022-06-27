import { createAsyncThunk } from "@reduxjs/toolkit";
// apis
import { usersAPI } from "../../../api/usersAPI";
import { ICreateUserData, IUsersListItem } from "../../../ts/interfaces/users.interfaces";
// slices
import { addNotistack, pushRedirect } from "../redirectAndNotification/redirectAndNotification.slice";

export const getUsersListThunk = createAsyncThunk("getUsersListThunk", async (_, thunkAPI) => {
  try {
    const response = await usersAPI.getUsersList();
    return response.data;
  } catch (error: any) {
    thunkAPI.dispatch(addNotistack({ statusText: error.message, variant: "error" }));
    return thunkAPI.rejectWithValue(error.data.status);
  }
});

export const getUserInfoByIdThunk = createAsyncThunk("getUserInfoByIdThunk", async (id: number, thunkAPI) => {
  try {
    const response = await usersAPI.getUserInfoById(id);
    return response.data;
  } catch (error: any) {
    thunkAPI.dispatch(pushRedirect("/"));
    thunkAPI.dispatch(addNotistack({ statusText: error.message, variant: "error" }));
    return thunkAPI.rejectWithValue(error.data.status);
  }
});

export const createUserThunk = createAsyncThunk("createUserThunk", async (userData: ICreateUserData, thunkAPI) => {
  try {
    const response = await usersAPI.createUser(userData);
    thunkAPI.dispatch(addNotistack({ statusText: "User created", variant: "success" }));
    return response.data;
  } catch (error: any) {
    thunkAPI.dispatch(addNotistack({ statusText: error.message, variant: "error" }));
    return thunkAPI.rejectWithValue(error.data.status);
  }
});

export const editUserThunk = createAsyncThunk("editUserThunk", async (userData: IUsersListItem, thunkAPI) => {
  try {
    const response = await usersAPI.editUser(userData);
    thunkAPI.dispatch(addNotistack({ statusText: "User edited", variant: "success" }));
    return response.data;
  } catch (error: any) {
    thunkAPI.dispatch(addNotistack({ statusText: error.message, variant: "error" }));
    return thunkAPI.rejectWithValue(error.data.status);
  }
});

export const deleteUserThunk = createAsyncThunk("deleteUserThunk", async (id: number, thunkAPI) => {
  try {
    await usersAPI.deleteUser(id);
    thunkAPI.dispatch(addNotistack({ statusText: "User deleted", variant: "success" }));
    return id;
  } catch (error: any) {
    thunkAPI.dispatch(addNotistack({ statusText: error.message, variant: "error" }));
    return thunkAPI.rejectWithValue(error.data.status);
  }
});
