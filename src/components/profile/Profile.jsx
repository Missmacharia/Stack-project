import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Profile.css";


const DEFAULT_PROFILE= {
    userProfile: "https://i.pinimg.com/564x/93/7f/29/937f29e9372f79fcde57f7f5c42f3307.jpg",
    count: 0
}

const Profile = () => {

    const [profileForm, setProfileForm]= useState(DEFAULT_PROFILE)

  return (
    <div className='profile'>
      <div className='profile_user'>
        <div className='profile_detail'>
            <img className='profile_img' src={profileForm.userProfile} alt="" />
            <div className='user_take'>
              <h4>SoftWare Developer</h4>
                <Link to="/">Questions 10</Link>
                <Link to="/answers">Answers 20</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
