import * as yup from 'yup'

export const SignupSchema = yup.object({
    name: yup.string().min(2).max(25).required('Name is required !'),
    email: yup.string().email().required("Email is requierd !"),
    role: yup.string().required("Select role !"),
    password: yup.string().min(8).max(10).required("password is requierd"),
    confirm_password: yup.string().min(8).max(10).required("Confirm_password is requierd").oneOf([yup.ref('password'), null, "password must be matched"])
})


export const LoginSchema = yup.object({
    email: yup.string().email().required("Email is requierd !"),
    password: yup.string().min(8).max(10).required("password is requierd"),
})