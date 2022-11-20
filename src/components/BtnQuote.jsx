import React from 'react'

const BtnQuote = ({objStyleBtn, handleClick}) => {
  return (
    <div>
        <button style={objStyleBtn} className='card__btn' onClick = {handleClick} >&gt;</button>
    </div>
  )
}

export default BtnQuote
