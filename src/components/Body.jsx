import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../store/slices/authSlice';
import Cookies from 'js-cookie';
import Spinner from './Spinner';
import { fetchUserData } from '../utils/authUserFetch';

function Body() {
  const [loading, setLoading] = useState(true);
  const location=useLocation();
  const isHomePage= location.pathname === '/';
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const userData=useSelector(store=>store.user);
  const token=Cookies.get("token");
  const getUser=async ()=>{
    if(userData) return;
    try {
      const response = await fetchUserData();
      dispatch(addUser(response));
    } catch (error) {
      // if(error.status===401){
      //     navigate('/signin');
      // }else{
        console.error("Error fetching user data", error.message);
        navigate('/signin')
      // }
    }finally {
      setLoading(false); // Set loading to false after API call completes
    }
  }
  useEffect(()=>{
    if(!userData && token){
      getUser();
    }else {
      setLoading(false); // If userData already exists, skip loading
    }
  }, [userData, token])

  if (loading) {
    // Show a loading spinner or placeholder until the API call completes
    return <Spinner/>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow overflow-auto pt-24">
        {isHomePage ? (
          <Home/>
        ) : (
            <Outlet />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Body