import { instance } from "./axios.instance";
// ts
import { ICreateUserData, IUsersListItem } from "../ts/interfaces/users.interfaces";

export const usersAPI = {
  getUsersList: async () => {
    try {
      return await instance.get("/contact/");
    } catch (error: any) {
      throw error;
    }
  },

  getUserInfoById: async (id: number) => {
    try {
      return await instance.get(`/contact/${id}/`);
    } catch (error: any) {
      throw error;
    }
  },

  createUser: async (userData: ICreateUserData) => {
    try {
      return await instance.post("/contact/", userData);
    } catch (error: any) {
      throw error;
    }
  },

  editUser: async (userData: IUsersListItem) => {
    const { id, ...rest } = userData;
    try {
      return await instance.put(`/contact/${id}/`, rest);
    } catch (error: any) {
      throw error;
    }
  },

  deleteUser: async (id: number) => {
    try {
      return await instance.delete(`/contact/${id}/`);
    } catch (error: any) {
      throw error;
    }
  },
};
