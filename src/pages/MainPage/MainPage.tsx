import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
// styles
import { useMainPageStyles } from "./MainPageStyles";
// components
import { EmpyList } from "./components/EmpyList";
import { UserCard } from "../../components/UI/UserCard/UserCard";
import { UserCardLoader } from "../../components/UI/UserCard/UserCardLoader";
// redux
import { useAppDispatch, useTypedSelector } from "../../utils/hooks/reduxHooks";
import { deleteUserThunk, getUsersListThunk } from "../../store/slicesAndThunks/users/users.thunk";

interface IMainPageProps {}

export const MainPage: FC<IMainPageProps> = () => {
  const classes = useMainPageStyles();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const users = useTypedSelector((state) => state.users.usersList);
  const loading = useTypedSelector((state) => state.users.usersLoading);

  const onCardClick = (id: number) => history.push(`/profile/${id}`);

  const onEditUserClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    event.stopPropagation();
    history.push(`/edit/${id}`);
  };

  const onDeleteClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    event.stopPropagation();
    dispatch(deleteUserThunk(id));
  };

  useEffect(() => {
    dispatch(getUsersListThunk());
  }, []);

  return (
    <React.Fragment>
      <div className={classes.root}>
        {loading
          ? Array.from({ length: 8 }).map((_, index) => {
              return <UserCardLoader key={index} />;
            })
          : users.map((user) => {
              return (
                <UserCard
                  key={user.id}
                  user={user}
                  onClick={() => onCardClick(user.id)}
                  onEditClick={(event) => onEditUserClick(event, user.id)}
                  onDeleteClick={(event) => onDeleteClick(event, user.id)}
                />
              );
            })}
      </div>

      {!users.length && !loading && <EmpyList />}
    </React.Fragment>
  );
};
