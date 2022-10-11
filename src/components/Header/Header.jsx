import MenuButtonMobile from '../SideBar/MenuButton/MenuButtonMobile'
import './Header.css'
import useSideBarController from '../SideBar/useSideBarController'
import { useEffect } from 'react'
const Header = ({children}) => {
  
  let menuButtonClose = document.querySelector('.menuButtonClose');
  let sideBarComponent=document.querySelector('.SideBar');
  
  const {input, ButtonControler} = useSideBarController(sideBarComponent, menuButtonClose)
  useEffect(()=>{

  }, [])
  
  
  return (
    <header className="Header">
        <MenuButtonMobile classBtn={input} btnControler={()=>{ButtonControler()}}/>
        {children}
    </header>
  )
}

export default Header