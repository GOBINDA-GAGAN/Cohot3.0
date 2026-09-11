import React from 'react'
import { useAuth } from '../../../context/AuthContext';

const Profile = () => {
  const { user, getUser, accessToken } = useAuth();


  

  console.log("profile accessToken:", accessToken); // null
  
  return (
    <div>Profile</div>
  )
}

export default Profile