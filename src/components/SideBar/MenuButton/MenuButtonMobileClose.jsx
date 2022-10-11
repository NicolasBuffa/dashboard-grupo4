import React from 'react'
import './MenuButtonMobileClose.css'

const MenuButtonMobileClose = ({ reference , fn}) => {

    
    return (<div ref={reference} className='menuButtonCloseUp'  onClick={fn}></div>
  )
}

export default MenuButtonMobileClose