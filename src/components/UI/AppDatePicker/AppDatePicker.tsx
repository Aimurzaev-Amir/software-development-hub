import "date-fns";
import { enUS } from "date-fns/locale";
import React, { FC, memo, useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, KeyboardDatePickerProps, MuiPickersUtilsProvider } from "@material-ui/pickers";
// styles
import { useAppDatePickerStyles } from "./AppDatePickerStyles";

interface IAppDatePickerProps extends KeyboardDatePickerProps {
  istouched?: boolean;
  errormsg?: string;
}

export const AppDatePicker: FC<IAppDatePickerProps> = memo((props) => {
  const { istouched, errormsg, ...rest } = props;
  const classes = useAppDatePickerStyles();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enUS}>
        <KeyboardDatePicker
          onClick={() => (props.disabled ? {} : setOpen(true))}
          onClose={() => setOpen(false)}
          open={open}
          style={{ width: "100%" }}
          variant="inline"
          format="yyyy-MM-dd"
          autoOk={true}
          InputProps={{ readOnly: true, disableUnderline: true, className: classes.input }}
          invalidDateMessage={"Enter the correct date!"}
          minDateMessage={"Wrong choice!"}
          {...rest}
        />
      </MuiPickersUtilsProvider>
      {istouched && errormsg && <p className={classes.helperText}>{errormsg}</p>}
    </div>
  );
});
