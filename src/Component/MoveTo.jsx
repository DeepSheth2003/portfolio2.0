import React from 'react'
// This Button is for navigate inside of site...

export default function MoveTo(props) {
  return (
    <div className='moveTo-button'>
        <button onClick={props.onClick} >{props.name} <div className="move-icon"><div className="move-img"></div></div></button>
    </div>
  )
}