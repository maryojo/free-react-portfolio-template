import React from 'react'

const Button = ({text, onClick, type="button"}) => {
  return (
      <button onClick={onClick} type={type} className='bg-[#00A177] text-black text-[14px] font-[600] p-2 w-fit'>
        {text}
      </button>
  )
}

export default Button