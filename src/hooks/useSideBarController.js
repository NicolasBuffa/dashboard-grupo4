import { useState } from "react"

const useSideBarController = ( sideBarComponent, menuButtonClose) => {
  const [input, setInput] = useState('menuButton MenuButtonMobileDesactivate');


  const ButtonControler = () => {
    if (input === 'menuButton MenuButtonMobileDesactivate') {
      sideBarComponent.current.className = 'SideBar SideBarActive'
      setInput('menuButton MenuButtonMobileActive')
      menuButtonClose.current.className = 'menuButtonClose'
    }
  }

  const outMenu = () => {

    if (input === 'menuButton MenuButtonMobileActive') {
      sideBarComponent.current.className = 'SideBar SideBarDesactivate'
      setInput('menuButton MenuButtonMobileDesactivate')
      menuButtonClose.current.className = 'menuButtonCloseUp'
    }
  }
  return (
    { input, ButtonControler, outMenu }
  )
}
export default useSideBarController