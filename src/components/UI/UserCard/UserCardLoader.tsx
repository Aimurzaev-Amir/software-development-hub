import React, { FC } from "react";
import { Skeleton } from "@material-ui/lab";
// styles
import { useUserCardStyles } from "./UserCardStyles";

interface IUserCardLoader {}

export const UserCardLoader: FC<IUserCardLoader> = (props) => {
  const classes = useUserCardStyles();

  return (
    <div className={classes.root}>
      <Skeleton variant="rect" width={280} height={240} />
    </div>
  );
};
