import React from 'react'

export default function BackTo(props) {
  return (
    <>
    <div className='backTo-button'>
        <button onClick={props.onClick} ><div className="back-icon"><div className="back-img"></div></div> {props.name}</button>
    </div>
    </>
  )
}
