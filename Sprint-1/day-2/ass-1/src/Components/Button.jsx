import React from 'react'

const Button = (props) => {
    const {text,onClick} =props;
  return (
    <div>
      <button className="btn" onClick={onClick} >{text}</button>
    </div>
  )
}

export default Button
