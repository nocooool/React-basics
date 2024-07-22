import React from 'react'

function Button({Btntext,
    type = 'button',
    bgcolor = 'bg-blue-500',
    textColor = 'text-white',
    className = '',
    ...props}
) {
  return (
    <button className={'px-4 py-2 rounded-lg ${bgcolor} ${textColor} ${className}'} {...props}>
        {Btntext}
    </button> 
  )
}

export default Button