import * as Yup from 'yup';


export const LoginSchema = Yup.object().shape({
  userName: Yup.string()
    .required('UserName is required')
    .max(32, 'a')
    .min(8, 'b'),

  password: Yup.string()
    .required('Password is required')
    .max(32, 'a')
    .min(8, 'b'),

})

export const RegisterSchema = Yup.object().shape({
  userName: Yup.string()
    .required('UserName is required')
    .max(32, 'a')
    .min(8, 'b'),

  email: Yup.string()
    .required('Email is required')
    .max(32, 'a')
    .min(8, 'b'),

  phoneNumber: Yup.string()
    .required('Phone is required')
    .max(32, 'a')
    .min(8, 'b'),

  password: Yup.string()
    .required('Password is required')
    .max(32, 'a')
    .min(8, 'b'),

  passwordComfirm: Yup.string()
    .required('Password Comfirm is required')
    .max(32, 'a')
    .min(8, 'b'),

})

export const FogotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .max(32, 'a')
    .min(8, 'b'),

})

export const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Current Password is required')
    .max(32, 'a')
    .min(8, 'b'),
  
  password_New: Yup.string()
    .required('New Password is required')
    .max(32, 'a')
    .min(8, 'b'),

  password_NewComfirm: Yup.string()
    .required('Password Comfirm is required')
    .max(32, 'a')
    .min(8, 'b'),
    
})