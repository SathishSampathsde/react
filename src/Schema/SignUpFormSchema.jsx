import * as Yup from "yup";
import { isEmail, isPassword, isText } from "./commom";

export const SignUpFormSchema = Yup.object({
  firstName: isText("First Name"),
  lastName: isText("Last Name"),
  email: isEmail,
  password: isPassword,
  confirmPassword: Yup.string()
    .required("Confirm Password is required!")
    .oneOf(
      [Yup.ref("password"), null],
      "Confirm Password doesn't match with password!"
    ),
});
