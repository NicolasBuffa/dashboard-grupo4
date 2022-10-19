import React from 'react'
import menu from '../../../assets/menu.svg'
import './MenuButtonMobile.css'


const MenuButtonMobile = ({ classBtn, btnControler}) => {

    return (
        <button className={`${classBtn}`} onClick={btnControler} ><img src={menu} className="imgMenuButton icon" alt="burgerButton" /></button>
    )
}
export default MenuButtonMobile
