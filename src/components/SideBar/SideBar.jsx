//IMPORT .CSS Component
import './SideBar.css';
//IMPORT REACT HOOKS
import React, { useEffect, useRef } from 'react'
//IMPORT COMPONENTS
import SwitcherTheme from "../SwitcherTheme/SwitcherTheme"
import MenuButtonMobile from './MenuButton/MenuButtonMobile'
import SlideBarHeader from './SideBarHeader/SideBarHeader.jsx'
import { Anchor } from './AnchorSideBar/Anchor'
import ProfileButton from './ProfileButton/ProfileButton'
import MenuButtonMobileClose from './MenuButton/MenuButtonMobileClose'
//HOOKS
import useSideBarController from '../../hooks/useSideBarController'


const SideBar = () => {
  const sideBarComponent = useRef();
  const menuButton = useRef()
  const menuButtonClose = useRef()

  const { input, ButtonControler, outMenu } = useSideBarController(sideBarComponent, menuButtonClose)

  return (
    <nav>
      <MenuButtonMobile refer={menuButton} classBtn={input} btnControler={ButtonControler} />
      <div className="SideBar SideBarDesactivate" ref={sideBarComponent}>
        <div>
          <SlideBarHeader />
          <Anchor />
        </div>
        <div>
          <SwitcherTheme />
          <ProfileButton className="profile--button" />
        </div>
      </div>
      <MenuButtonMobileClose reference={menuButtonClose} fn={outMenu} />
    </nav>
  )
}

export default SideBar