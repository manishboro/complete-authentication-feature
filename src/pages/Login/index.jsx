import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import { Box, Grid, IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import CustomButton from "../../components/Reusable/Button";
import CustomTextField from "../../components/Reusable/CustomTextField";

const Login = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
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
          Login
        </Grid>

        <Grid item xs={12}>
          <CustomTextField
            label="Email"
            id="email"
            value={formik.values.email}
            handleChange={formik.handleChange}
            handleblur={formik.handleBlur}
            disabled={formik.isSubmitting}
          />
        </Grid>

        <Grid item xs={12}>
          <CustomTextField
            label="Password"
            id="password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            handleChange={formik.handleChange}
            handleblur={formik.handleBlur}
            disabled={formik.isSubmitting}
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
          <Link to="/register">Don't have an account? Signup</Link>
        </Grid>

        <Grid item xs={12}>
          <CustomButton
            text="Login"
            loading={formik.isSubmitting}
            disabled={formik.isSubmitting}
            style={{ minWidth: "100%", height: "5rem", fontSize: "2rem" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
