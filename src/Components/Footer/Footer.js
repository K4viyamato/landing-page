import React from 'react'
import logo from '../../logo/WhiteLogo.png';

const Footer = () => {
  return (
    <footer className='bg-primary'>
    <div className=' sticky px-[8%] py-[40px]  w-full text-white grid grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-1'>

      {/* Logo and main text */}
      
      <div className='w-[90%] py-5'>
        <img src={logo} alt='logo' className='w-[238px] h-[36px] mb-2'/>
        <p className='font-sub'>
        Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
        </p>
      </div>

      {/* lists */}

      <div className='grid grid-cols-1 gap-2  sm:grid-cols-2'>
          <div className='py-5'>
          <h2 className='text-2xl font-secondary font-semibold'>Our Technologies</h2>
            <ul className='font-sub'>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
              <li>GraphQL</li>
              <li>Laravel</li>
            </ul>
          </div>
          <div className='py-5'>
          <h2 className='text-2xl font-secondary font-semibold'>Our Services</h2>
            <ul className='font-sub'>
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
              <li>Google Marketing solutions</li>
              <li>Google Marketing solutions</li>
            </ul>

          </div>
      </div>
    </div>

    {/* Additional info */}

    <div>
    <hr className="w-[90%] mx-auto h-[2px] rounded m1-4 bg-white"></hr>
    <p className="text-white mb-2 mx-auto flex justify-center">Privacy Policy | Terms & Conditions</p>
    </div>

    </footer>
  )
}

export default Footer