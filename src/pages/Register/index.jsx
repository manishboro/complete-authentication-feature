import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import { Box, Grid, IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import CustomButton from "../../components/Reusable/Button";
import CustomTextField from "../../components/Reusable/CustomTextField";
import { signUpValidations } from "../../utils/validations";

const Register = () => {
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", passwordConfirm: "" },
    validationSchema: signUpValidations,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Box
      sx={{
        width: "45rem",
        boxShadow: 6,
        padding: "2rem 2rem 4rem 2rem",
        margin: "4rem auto 0 auto",
        borderRadius: "1rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{ typography: "h2", textAlign: "center", color: "custom.medium" }}
        >
          Register
        </Grid>

        <Grid item xs={12}>
          <CustomTextField
            label="Name"
            id="name"
            values={formik.values.name}
            handleChange={formik.handleChange}
            handleblur={formik.handleBlur}
            disabled={formik.isSubmitting}
            errors={formik.errors.name}
            touched={formik.touched.name}
          />
        </Grid>

        <Grid item xs={12}>
          <CustomTextField
            label="Email"
            id="email"
            values={formik.values.email}
            handleChange={formik.handleChange}
            handleblur={formik.handleBlur}
            disabled={formik.isSubmitting}
            errors={formik.errors.email}
            touched={formik.touched.email}
          />
        </Grid>

        <Grid item xs={12}>
          <CustomTextField
            label="Password"
            id="password"
            type={showPassword ? "text" : "password"}
            values={formik.values.password}
            handleChange={formik.handleChange}
            handleblur={formik.handleBlur}
            disabled={formik.isSubmitting}
            errors={formik.errors.password}
            touched={formik.touched.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>

        <Grid item xs={12}>
          <CustomTextField
            label="Confirm Password"
            id="passwordConfirm"
            type={showPassword ? "text" : "password"}
            values={formik.values.passwordConfirm}
            handleChange={formik.handleChange}
            handleblur={formik.handleBlur}
            disabled={formik.isSubmitting}
            errors={formik.errors.passwordConfirm}
            touched={formik.touched.passwordConfirm}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ typography: "h3", textAlign: "center", paddingBottom: "1rem" }}
        >
          <Link to="/login">Already have an account? Login</Link>
        </Grid>

        <Grid item xs={12}>
          <CustomButton
            text="Register"
            type="submit"
            onClick={formik.handleSubmit}
            loading={formik.isSubmitting}
            disabled={formik.isSubmitting}
            style={{ minWidth: "100%", height: "5rem", fontSize: "2rem" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
