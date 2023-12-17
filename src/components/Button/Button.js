import React from 'react'
import './Button.css';

const Button = ({ classes, children, toggleListItems }) => {
  return (
    <button className={`default ${classes}`} onClick={toggleListItems}>{children}</button>
  )
}

export default Button