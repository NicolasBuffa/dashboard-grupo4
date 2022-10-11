import SwitcherTheme from "../SwitcherTheme/SwitcherTheme"
import './SideBar.css';
import React, { useEffect, useState } from 'react'
import MenuButtonMobile from './MenuButton/MenuButtonMobile'
import MenuButtonMobileClose from './MenuButton/MenuButtonMobileClose'
import ProfileButton from './ProfileButton/ProfileButton'
import { useRef } from 'react'
import { Anchor } from './AnchorSideBar/Anchor'
import SlideBarHeader from './SideBarHeader/SideBarHeader.jsx'
import useSideBarController from './useSideBarController'



const SideBar = () => {
  const sideBarComponent = useRef();
  const menuButton = useRef()
  const menuButtonClose = useRef()  
  const [input, setInput] = useState('menuButton MenuButtonMobileDesactivate');

  const { ButtonControler, outMenu } = useSideBarController(input, sideBarComponent, menuButtonClose, setInput)

  useEffect(() => { }, [input])
  return (
    <>
      <div className="SideBar SideBarDesactive" ref={sideBarComponent}>
        <MenuButtonMobile refer={menuButton} classBtn={input} btnControler={ButtonControler} />
        <div>
          <SlideBarHeader />
          <Anchor /></div>
        <div>
          <SwitcherTheme />
          <ProfileButton className="profile--button" />
        </div>
      </div>
      <MenuButtonMobileClose reference={menuButtonClose} fn={outMenu} />
    </>
  )
}

export default SideBar