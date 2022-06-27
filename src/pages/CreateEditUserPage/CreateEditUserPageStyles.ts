import { makeStyles } from "@material-ui/core/styles";

export const useCreateEditUserPageStyles = makeStyles((theme) => {
  return {
    root: {},
    form: {
      display: "grid",
      marginTop: "20px",
      gap: "10px",
    }, 
    gap: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px",
    },
  };
});
