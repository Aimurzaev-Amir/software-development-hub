import { useSnackbar } from "notistack";
import { FC, useEffect, memo } from "react";
import { useHistory } from "react-router-dom";
//  redux
import { useTypedSelector, useAppDispatch } from "../../utils/hooks/reduxHooks";
import { pushRedirect } from "../../store/slicesAndThunks/redirectAndNotification/redirectAndNotification.slice";
import { removeNotistack } from "../../store/slicesAndThunks/redirectAndNotification/redirectAndNotification.slice";

type PropsType = {};

const NotistackRedirect: FC<PropsType> = memo(() => {
  const { redirectTo, notistack } = useTypedSelector((state) => state.redirectNotistack);

  const history = useHistory();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (redirectTo.length) {
      history.push(redirectTo);
      dispatch(pushRedirect(""));
    }
  }, [redirectTo]);

  useEffect(() => {
    notistack.forEach(async (notifier, index) => {
      await enqueueSnackbar(`${notifier.statusText}`, {
        variant: notifier.variant,
      });
      await dispatch(removeNotistack(index));
    });
  }, [notistack]);

  return null;
});

export { NotistackRedirect };
