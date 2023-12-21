import React, { useState, useEffect } from 'react';
import logo from '../../logo/WhiteLogo.png';
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

  }, []); 

  return (
    <div>
      <nav className='flex bg-primary w-full h-[77px] px-[8%] justify-between'>
        <div className='p-0 mb-2 self-center'>
          <NavLink to='/'><img src={logo} alt='logo' /></NavLink>
        </div>

        <div className='self-center flex flex-row gap-5 text-white'>
          {windowWidth < 768 ? (
            <IoMdMenu className='text-4xl'/>
          ) : (
            <>
              <NavLink to='/service'>SERVICES</NavLink>
              <NavLink to='/about'>ABOUT US</NavLink>
              <NavLink to='/contact'>CONTACT US</NavLink>
              <NavLink to='/careers'>CAREERS</NavLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;