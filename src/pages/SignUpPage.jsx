import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpFormSchema } from "../Schema/SignUpFormSchema";
import Input from "../modules/common/Input";

function SignUpPage() {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValue,
      validationSchema: SignUpFormSchema,
      onSubmit: (values, action) => {
        console.log(values);
      },
    });

  return (
    <div className="card col-6 mx-auto mt-5">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Sign Up</h1>
          <Input
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
          <Input
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
              Sign Up
            </button>
          </div>
          <div className="d-grid mt-3 mx-2 border-top border-2 border-secondary-subtle ">
            <Link className="btn btn-success mx-3 mt-3" to="/Login">
              Have a Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
