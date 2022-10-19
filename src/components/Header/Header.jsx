import MenuButtonMobile from '../SideBar/MenuButton/MenuButtonMobile'
import './Header.css'
import useSideBarController from '../../hooks/useSideBarController'
import { useEffect } from 'react'
const Header = ({children}) => {
  
  let menuButtonClose = document.querySelector('.menuButtonClose');
  let sideBarComponent=document.querySelector('.SideBar');
  
  const {input, ButtonControler} = useSideBarController(sideBarComponent, menuButtonClose)
  useEffect(()=>{

  }, [])
  
  
  return (
    <header className="Header">
        {children}
    </header>
  )
}

export default Header