import React, { FC } from "react";
import { IconButton } from "@material-ui/core";
// ts
import { IUsersListItem } from "../../../ts/interfaces/users.interfaces";
// styles
import { useUserCardStyles } from "./UserCardStyles";
// images
import userImage from "../../../assets/images/userImage.jpg";
import removeIcon from "../../../assets/icons/removeIcon.svg";
import userBackground from "../../../assets/images/userBackground.jpg";
// components
import { AppButton } from "../AppButton/AppButton";

interface IUserCard {
  user: IUsersListItem;
  onClick: () => void;
  onEditClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDeleteClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const UserCard: FC<IUserCard> = (props) => {
  const { first_name, last_name, birth_date, gender } = props.user;
  const { onClick, onEditClick, onDeleteClick } = props;
  const classes = useUserCardStyles();

  return (
    <div className={classes.root} onClick={onClick}>
      {onDeleteClick && (
        <div className={classes.removeBtn}>
          <IconButton onClick={(event) => onDeleteClick(event)}>
            <img src={removeIcon} alt="remove user" />
          </IconButton>
        </div>
      )}

      <img src={userBackground} alt="user default background" className={classes.background} />
      <img src={userImage} alt="user default avatar" className={classes.avatar} />
      <div className={classes.body}>
        <p className={classes.body__title}>{`${first_name} ${last_name}`}</p>
        <p className={classes.body__text}>
          <span className={classes.body__text_label}>Birthday date:</span> {birth_date}
        </p>
        <p className={classes.body__text}>
          <span className={classes.body__text_label}>Gender:</span> {gender}
        </p>
      </div>

      {onEditClick && (
        <div className={classes.footer}>
          <AppButton title="Edit user" fullWidth onClick={(event) => onEditClick(event)} />
        </div>
      )}
    </div>
  );
};
