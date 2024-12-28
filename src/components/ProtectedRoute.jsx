import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
const ProtectedRoute = ({ children }) => {
    const navigate=useNavigate();
    const user=useSelector(store=>store.user)
    useEffect(() => {
      if (!user) {
        navigate("/signin", { replace: true }); // Redirect if user is not authenticated
      }
    }, [user, navigate]);
  
    // Render children only if user is authenticated
    if (!user) {
      return null; // Return null or a loader while navigating
    }
  return children; 
}
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // children should be a React node
};

export default ProtectedRoute