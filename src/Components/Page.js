import React from 'react'
import heroImage from '../Images/Hero Image.png'
import image2 from '../vectors/image 2.png'
import image1 from '../vectors/image 1.png'

const Page = () => {
  return (
    <div>
      <section className='relative'>
    <img src={heroImage} alt="robot" className="w-full h-auto object-cover p-0" />
    <div className="absolute z-10 overflow-hidden bg-gradient-to-r from-bgdark-2 to-bgdark-1 w-[630px] h-[306px] left-[8%] bottom-[8%] max-[1199px]:w-full max-[1199px]:left-0 max-[1199px]:h-auto max-[1199px]:static ">

      <p className='text-5xl font-primary font-semibold p-7 text-white'>
        We crush your competitors, goals, and sales records - without the B.S.
      </p>

      <button className='bg-secondary rounded-[4px] text-[14px] text-white font-primary font-semibold w-[234px] h-[38px] ml-8 mt-[-40px] p-1 mb-7'>
        GET FREE CONSULTATION
      </button>

    </div>
  </section>
      
      <section className=' w-full text-white grid grid-cols-1 gap-4 md:grid-cols-2 '>
      <div className='w-[100%] m-auto flex justify-center'>
        <img src={image2} alt='pc'/>
        
      </div>
      <div className='grid grid-cols-1  gap-2  text-center   md:grid-cols-1   md:text-left px-[8%]'>

        <div className='w-[80%] my-auto py-10 m-auto'>
            <h1 className='text-primary font-secondary font-semibold text-2xl'>Web & Mobile App Development</h1>
            <p className='text-tdark font-primary pt-4'>
            Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
            </p>
            <button className='bg-secondary text-[14px] rounded-[4px] text-white font-primary font-semibold w-[129px] h-[38px] p-1 my-3'>
        LEARN MORE
      </button>
      </div>     
      </div>
    
      </section>
      <section className='w-full text-white grid grid-cols-1 gap-4 md:grid-cols-2 '>
      <div className='w-[100%] m-auto flex justify-center order-2'>
        <img src={image1} alt='pc'/>
        
      </div>
      <div className='grid grid-cols-1  gap-2  text-center  md:grid-cols-1   md:text-left order-2 md:order-1 px-[8%]'>

        <div className='w-[80%] my-auto py-10 m-auto '>

            <h1 className='text-primary font-secondary font-semibold text-2xl'>Digital Strategy Consulting</h1>

            <p className='text-tdark font-primary pt-4'>
            Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
            </p>

            <button className='bg-secondary text-[14px] rounded-[4px] text-white font-primary font-semibold w-[129px] h-[38px] p-1 my-3'>

        LEARN MORE
      </button>

        </div>
          
      </div>
    
      </section>




      
      
      
    </div>
  )
}

export default Page