import React from 'react'
import './ProfileButton.css'
import profilePic from '../../../assets/ProfilePic.png'
import { NavLink } from 'react-router-dom';

const ProfileButton = () => {


    return (
        <NavLink className='sideBar--button_user' to='/profile'><img className="profilePic" src={profilePic} />Olivia</NavLink>
    )
}

export default ProfileButton