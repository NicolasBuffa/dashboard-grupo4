import React from 'react'
import './DivInfoComponent.css'

function DivInfoComponent(props) {
  return (
    <>
    <div className='articleHome__containterInformation'>
        <img className='icon' src={props.img} />
        <span className='articleHome__containterInformation__price'>{props.count}</span>
        <span>{props.type}</span>
    </div>
    </>
  )
}

export default DivInfoComponent