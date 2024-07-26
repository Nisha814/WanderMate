import * as yup  from "yup";

export const signUpSchema = yup.object().shape({
    username: yup.string().required("Username shall not be empty"),
    email: yup
    .string()
    .email("Enter a valid email")
    .required("Email shall not be empty"),
    password: yup
    .string()

})