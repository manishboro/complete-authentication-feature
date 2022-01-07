import * as Yup from "yup";

export const loginValidations = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Minimum password length should be 8")
    .required("Password is required"),
});

export const signUpValidations = Yup.object().shape({
  ...loginValidations.fields,
  name: Yup.string().required("Name is required"),
  password: Yup.string()
    .min(8, "Minimum password length should be 8")
    .required("Password is required"),
  passwordConfirm: Yup.string()
    .min(8, "Minimum password length should be 8")
    .required("Password confirm is required")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});
