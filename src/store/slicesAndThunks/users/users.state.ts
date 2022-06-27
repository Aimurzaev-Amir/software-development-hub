import { IUsersListItem } from "../../../ts/interfaces/users.interfaces";

interface IUsersState {
  usersList: Array<IUsersListItem>;
  detailUser: IUsersListItem | null;
  usersLoading: boolean;
}

export const usersState: IUsersState = {
  usersList: [],
  detailUser: null,
  usersLoading: false,
};
