import React, { useEffect, useState } from 'react'
import './ProfileButton.css'
import profilePic from '../../../assets/ProfilePic.png'
import { NavLink } from 'react-router-dom';

const ProfileButton = () => {
    let [user, setUser] = useState('');

    const getUser = () => {
        fetch('http://localhost:4000/api/user/')
        .then(res => res.json())
        .then(data => setUser(data[0].firstname))
    }
    
    useEffect(() => {
        getUser()
    }, []
    )


    return (
        <NavLink className='sideBar--button_user' to='/profile'><img className="profilePic" src={profilePic} />{user}</NavLink>
    )
}

export default ProfileButton