import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='mb-6 overflow-hiddens fixed z-50 w-[1120px] px-24 border-l-[20px] border-white  mx-auto left-[4.5rem] rounded-3xl p-4 top-0 bg-white flex items-center justify-between'>
      <img className='' height={60} width={60} src={'/header.jpg'} />
      <div className='flex ml-28 justify-between w-[50%]'>
        <p>Emotions</p>
        <p>Manifesto</p>
        <p>Self-awareness test</p>
        <p>Work With Us</p>
      </div>
      <div className=' rounded-3xl text-white px-5 py-3 bg-black  '> Download App</div>
    </div>
  )
}

export default Header