import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { LoginFormSchema } from "../Schema/LoginFormSchema";
import InputField from "../modules/common/Input";
import { AuthContext } from "../store/authContext";
import { useDispatch } from "react-redux";
import { authActions } from "../store/slices/authReducer";

function LoginPage() {
  // const { setIsLoggedIn } = useContext(AuthContext);
  const dispatch = useDispatch();

  const initialValue = {
    email: "",
    password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValue,
      validationSchema: LoginFormSchema,
      onSubmit: (value, action) => {
        console.log(value);
        dispatch(authActions.login());
        action.resetForm();
      },
    });

  return (
    <div className="card col-6 mx-auto mt-5">
      <div className="card-body">
        <h1 className="text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            label="Email"
            className="form-control"
            name="email"
            value={values.email}
            error={errors.email}
            touched={touched.email}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
          <InputField
            type="password"
            className="form-control"
            label="Password"
            value={values.password}
            error={errors.password}
            touched={touched.password}
            handleBlur={handleBlur}
            handleChange={handleChange}
            name="password"
          />
          <div className="d-grid mt-3 mx-2">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
          <div className="d-grid mt-3 mx-2 border-top border-2 border-secondary-subtle ">
            <Link className="btn btn-success mx-3 mt-3" to="/sign-up">
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
