import React, { useState } from "react";
import "./Profile.css";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const DEFAULT_PROFIE_FORM={
  profileName: "",
  email: ""
}

const Profile = () => {

  const[profileForm, setProfileForm]= useState(DEFAULT_PROFIE_FORM)
  const [profile, setProfile]=useState([])

  const changeHandlerProfile=(e)=>{
    setProfileForm((prev)=>({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const id= Math.ceil(Math.random()*100000)
    const newProfile= {...profileForm, id}
    setProfile(newProfile)
    setProfileForm(DEFAULT_PROFIE_FORM)
  }
  
  return (
    <div className="profile_page">
      <h1>Profile</h1>
      <div className="profile">
        <CgProfile />
        <form className="profile_form">
          <input type="text"
           name="profileName"
            placeholder="yvonne"
            value={profileForm.profileName}
            onChange={changeHandlerProfile}
            />
          <input type="text"
           name="email"
            placeholder="yvonne@email"
            value={profileForm.email}
            onChange={changeHandlerProfile}
             />
          <div className="profileButton">
            <button onClick={handleSubmit} className="profile_button">
              <Link to="/">Submit</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
