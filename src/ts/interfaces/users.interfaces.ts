export interface ICreateUserData {
  first_name: string;
  last_name: string;
  birth_date: string | null;
  gender: string;
  job: string;
  biography: string;
  is_active: boolean;
}

export interface IUsersListItem extends ICreateUserData {
  id: number;
}
