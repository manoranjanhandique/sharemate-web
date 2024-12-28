import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom"

const PublicRoute = () => {
    const navigate=useNavigate();
    const user=useSelector(store=>store.user)
    if(!user){
        return navigate('/dashboard')
    }
  return <Outlet/>; 
}

export default PublicRoute