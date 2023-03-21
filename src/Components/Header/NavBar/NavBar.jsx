import logo from '../../../Assets/images/logo.svg';

import React from 'react'

function NavBar() {
  return (
    <nav className='pt-[4.8rem] px-[16.7rem] flex justify-between items-center'>
      <div className='flex gap-[4.345rem] items-center'>
          <img src={logo} alt="Shortly Logo" />
          <ul role="menubar" className='flex gap-[2.9rem] capitalize font-bold text-[1.5rem] text-neutralGrayishViolet'>
        
            <li role={'menuitem'}>Features</li>
            <li role={'menuitem'}>pricing</li>
            <li role={'menuitem'}>resources</li>
          </ul>
      </div>
        <ul className='flex gap-[3.7rem] items-center text-neutralGrayishViolet capitalize font-bold text-[1.5rem]'>
          <li
            role={'button'}
            tabIndex={"0"}
            aria-pressed = "false"

          >login</li>
          <li
            role={'button'}
            tabIndex={"0"}
            aria-pressed = "false"
            className='px-[2.3rem] py-[0.9rem] bg-primaryCyan text-white rounded-full'
          >sign up</li>
        </ul>
    </nav>
  )
}

export default NavBar