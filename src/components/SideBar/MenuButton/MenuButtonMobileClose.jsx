import React from 'react'
import './MenuButtonMobileClose.css'

const MenuButtonMobileClose = ({ reference, fn}) => {



  return (<button ref={reference} className='menuButtonCloseUp' onClick={fn}></button>
  )
}

export default MenuButtonMobileClose