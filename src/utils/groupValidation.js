const groupFormValidation=(values)=>{
    const errors={};
    if(!values.groupname){
        errors.groupname="Group Name required."
    }
    if(!values.groupdetail){
        errors.groupdetail="Group details required"
    }
    if (values.member_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.member_email)){
        errors.member_email="Please provide valid email."
    }
    return errors;

}
export default groupFormValidation