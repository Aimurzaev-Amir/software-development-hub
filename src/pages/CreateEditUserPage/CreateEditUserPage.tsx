import * as yup from "yup";
import moment from "moment";
import { Form, Formik } from "formik";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
// styles
import { useCreateEditUserPageStyles } from "./CreateEditUserPageStyles";
// components
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppSelect } from "../../components/UI/AppSelect/AppSelect";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppBackdrop } from "../../components/UI/AppBackdrop/AppBackdrop";
import { AppCheckbox } from "../../components/UI/AppCheckbox/AppCheckbox";
import { AppDatePicker } from "../../components/UI/AppDatePicker/AppDatePicker";
import { AppMultilineInput } from "../../components/UI/AppInput/AppMultilineInput";
// ts
import { ICreateUserData } from "../../ts/interfaces/users.interfaces";
// redux
import { useAppDispatch, useTypedSelector } from "../../utils/hooks/reduxHooks";
import { resetUsersState } from "../../store/slicesAndThunks/users/users.slice";
import { createUserThunk, editUserThunk, getUserInfoByIdThunk } from "../../store/slicesAndThunks/users/users.thunk";

interface ICreateEditUserPageProps {}

export const CreateEditUserPage: FC<ICreateEditUserPageProps> = () => {
  const dispatch = useAppDispatch();
  const classes = useCreateEditUserPageStyles();

  const { id }: { id: string } = useParams();
  const { detailUser, usersLoading } = useTypedSelector((state) => state.users);

  const [formLoading, setFormLoading] = useState<boolean>(false);

  const values: ICreateUserData = {
    first_name: detailUser?.first_name || "",
    last_name: detailUser?.last_name || "",
    birth_date: detailUser?.birth_date || null,
    gender: detailUser?.gender || "male",
    job: detailUser?.job || "",
    biography: detailUser?.biography || "",
    is_active: detailUser?.is_active || false,
  };

  const validationSchema = yup.object({
    first_name: yup.string().required("Required field").max(256, "Length should not exceed 256 characters"),
    last_name: yup.string().max(256, "Length should not exceed 256 characters"),
    birth_date: yup.date().required("Required field").nullable(),
    job: yup.string().required("Required field").max(256, "Length should not exceed 256 characters"),
    biography: yup.string().required("Required field").max(1024, "Length should not exceed 1024 characters"),
  });

  const onSubmit = async (values: ICreateUserData) => {
    const body = { ...values, birth_date: moment(values.birth_date).format("YYYY-MM-DD") };
    setFormLoading(true);
    await dispatch(id ? editUserThunk({ ...body, id: +id }) : createUserThunk(body));
    setFormLoading(false);
  };

  useEffect(() => {
    id && dispatch(getUserInfoByIdThunk(+id));

    return () => {
      dispatch(resetUsersState());
    };
  }, [id]);

  return (
    <React.Fragment>
      <AppBackdrop open={usersLoading} />
      <div className={classes.root}>
        <h1>{id ? "Edit User" : "New User"}</h1>
        <Formik
          enableReinitialize
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            !id && resetForm();
          }}
        >
          {(formik) => (
            <Form className={classes.form}>
              <div className={classes.gap}>
                <AppInput
                  placeholder={"e.g. Amir"}
                  name="first_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                  istouched={formik.touched.first_name}
                  errormsg={formik.errors.first_name}
                />
                <AppInput
                  placeholder={"e.g. Aimurzayev"}
                  name="last_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                  istouched={formik.touched.last_name}
                  errormsg={formik.errors.last_name}
                />
              </div>
              <div className={classes.gap}>
                <AppDatePicker
                  placeholder="e.g. 1997-08-15"
                  name="birth_date"
                  onChange={(value) => formik.setFieldValue("birth_date", value)}
                  onBlur={formik.handleBlur}
                  value={formik.values.birth_date}
                  istouched={formik.touched.birth_date}
                  errormsg={formik.errors.birth_date}
                />
                <AppInput
                  placeholder={"e.g. Frontend developer"}
                  name="job"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.job}
                  istouched={formik.touched.job}
                  errormsg={formik.errors.job}
                />
              </div>
              <AppSelect
                label="e.g. Male"
                name="gender"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </AppSelect>
              <AppMultilineInput
                placeholder={"e.g. Amir Aimurzayev was born in 1997 in Kazakhstan. His career began in..."}
                name="biography"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.biography}
                istouched={formik.touched.biography}
                errormsg={formik.errors.biography}
              />
              <AppCheckbox
                label="Is active"
                name="is_active"
                onChange={formik.handleChange}
                checked={formik.values.is_active}
              />

              <AppButton type="submit" title={id ? "Edit" : "Create"} loading={formLoading} disabled={formLoading} />
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};
