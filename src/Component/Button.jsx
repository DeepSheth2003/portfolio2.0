import React from 'react'

export default function Button(props) {
  return (
    <div className="btn-comp">
        <button>{props.name}</button>
    </div>
  )
}
