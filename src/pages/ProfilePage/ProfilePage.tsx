import React, { FC, useEffect } from "react";
import { Skeleton } from "@material-ui/lab";
import { useHistory, useParams } from "react-router-dom";
// images
import userImg from "../../assets/images/userImage.jpg";
import userBackground from "../../assets/images/userBackground.jpg";
// styles
import { useProfilePageStyles } from "./ProfilePageStyles";
// components
import { UserCard } from "../../components/UI/UserCard/UserCard";
import { AppButton } from "../../components/UI/AppButton/AppButton";
// redux
import { useAppDispatch, useTypedSelector } from "../../utils/hooks/reduxHooks";
import { resetUsersState } from "../../store/slicesAndThunks/users/users.slice";
import { getUserInfoByIdThunk, getUsersListThunk } from "../../store/slicesAndThunks/users/users.thunk";

interface IProfilePageProps {}

export const ProfilePage: FC<IProfilePageProps> = () => {
  const classes = useProfilePageStyles();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const { id }: { id: string } = useParams();
  const { usersList, detailUser, usersLoading } = useTypedSelector((state) => state.users);

  const onUserClick = (userId: number) => history.push(`/profile/${userId}`);
  const onEditProfileClick = () => history.push(`/edit/${id}`);

  useEffect(() => {
    dispatch(getUserInfoByIdThunk(+id));
  }, [id]);

  useEffect(() => {
    dispatch(getUsersListThunk());

    return () => {
      dispatch(resetUsersState());
    };
  }, []);

  return (
    <div className={classes.root}>
      <img className={classes.background} src={userBackground} alt="user background" />

      {usersLoading ? (
        <div className={classes.windowLoader}>
          <Skeleton variant="rect" width={280} height={328} />
        </div>
      ) : (
        <div className={classes.window}>
          <img className={classes.window__avatar} src={userImg} alt="user avatar" />
          <h1 className={classes.window__title}>{`${detailUser?.first_name} ${detailUser?.last_name}`}</h1>
          <p className={classes.window__text}>
            <span className={classes.window__text_subtitle}>Gender: </span>
            {detailUser?.gender.toUpperCase()}
          </p>
          <p className={classes.window__text}>
            <span className={classes.window__text_subtitle}>Date of birth: </span>
            {detailUser?.birth_date}
          </p>
          <p className={classes.window__text}>
            <span className={classes.window__text_subtitle}>Position: </span>
            {detailUser?.job}
          </p>
          <p className={classes.window__text}>
            <span className={classes.window__text_subtitle}>Status: </span>
            {detailUser?.is_active ? "Active" : " not active"}
          </p>
          <div className={classes.window__btn}>
            <AppButton title="Edit" fullWidth onClick={onEditProfileClick} />
          </div>
        </div>
      )}

      {detailUser?.biography && (
        <div className={classes.biography}>
          <h3 className={classes.body__title}>Biography</h3>
          <p className={classes.body__text}>{detailUser?.biography}</p>
        </div>
      )}

      {usersList.length > 1 && (
        <div className={classes.users}>
          <h3 className={classes.body__title}>Users you might know:</h3>
          <div className={classes.users__list}>
            {usersList.map((user) => {
              return user.id === +id ? null : (
                <UserCard key={user.id} user={user} onClick={() => onUserClick(user.id)} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
