import * as Yup from "yup"
import { isEmail,isPassword } from "./commom.jsx"

export const LoginFormSchema = Yup.object(
{
    email: isEmail,
    password:isPassword
}
)