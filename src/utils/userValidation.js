export const signUpFormValidation=(values)=>{
    const errors={};
    if(!values.username){
        errors.username="Username is required!"
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.gender) {
      errors.gender = "Gender is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = "confirmPassword is required!";
    }else if(values.confirmPassword !== values.password){
        errors.confirmPassword = "Confirm password must match the password!";
    }
    return errors;
}

export const signInFormValidation=(values)=>{
  const errors={};
    if(!values.email){
        errors.email="Email is required!"
    }
    if (!values.email) {
      errors.password = "Password is required!";
    }
    return errors;
}