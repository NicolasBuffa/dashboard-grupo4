import { useContext, useEffect, useState } from 'react';
import {ThemeContext } from '../../context/ThemeContext'
import sun from '../../assets/sun-fill.svg'
import moon from '../../assets/moon-fill.svg'
import './Switcher.css';

const SwitcherTheme = () => {

  //document.documentElement.setAttribute("data-theme","dark")
  const { theme, toggle: switcherFunc }= useContext(ThemeContext)
  // eslint-disable-next-line
    const [localTheme, setLocalTheme]= useState("") 

    const storageChange=()=>{
      const currentTheme= (window.localStorage.getItem("theme")==="clearTheme" )? "darkTheme" : "clearTheme" 
      window.localStorage.setItem("theme",currentTheme)
      console.log("anda")
    }

  useEffect(()=>{
    const localTheme = window.localStorage.getItem("theme")
    if (localTheme){setLocalTheme(localTheme)}else{ window.localStorage.setItem("theme","clearTheme")
  }
    
  },[])

  return (
  <div className='switcherContainer'>    
    <span className={`iconTheme ${theme}`}><img src={sun} alt="sun logo"/></span>
    <label className="switcher">
        <input type="checkbox" defaultChecked={window.localStorage.getItem("theme")==="darkTheme"} onChange={()=>{switcherFunc(); storageChange()} }/>
        <span className="slider round"></span>
    </label>
    <span className={`iconTheme ${theme}`}><img src={moon} alt="moon logo"/></span> 
  </div>
  )
}

export default SwitcherTheme