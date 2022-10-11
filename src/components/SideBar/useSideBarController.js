
const useSideBarController = (input, sideBarComponent,menuButtonClose,setInput) => {

    const ButtonControler = () => {
        if (input === 'menuButton MenuButtonMobileDesactivate') {
          sideBarComponent.current.className = 'SideBar SideBarActive'
          setInput('menuButton MenuButtonMobileActive')
          menuButtonClose.current.className='menuButtonClose'
        }
      }

    const outMenu = () => {
    
        if (input === 'menuButton MenuButtonMobileActive') {
          sideBarComponent.current.className = 'SideBar SideBarDesactivate'
          setInput('menuButton MenuButtonMobileDesactivate')
          menuButtonClose.current.className='menuButtonCloseUp'
        }
      }
  return (
   {ButtonControler,outMenu}
  )
}
export default useSideBarController