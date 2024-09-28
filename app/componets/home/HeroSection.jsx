import React from 'react'
import Image from 'next/image'
import HeroImage from '../../../public/image/dog2.png'
import { Typewriter} from 'react-simple-typewriter'
import Button from '../../../app/utlis/Button'


const HeroSection = () => {
  return (
    <div className='relative bg-slate-100 text-black dark:bg-gray-800 dark:text-white'>
      
      <Image
        src={HeroImage}
        className='min-h-screen w-full object-cover object-center z-0' 
        priority
      />
      <div className='text-center absolute top-1/2 text-white w-full md:w-2/3 translate-y-[-50%]'>
        <div className='text-3xl text-orange-900 dark:text-white'> Hello, my soon-to-be coworkers! <span> I am Kaung Myat Kywal(Nolan)</span></div>
        <h1 style={{fontSize : '60px'}} className='font-bold mt-10 text-orange-900 dark:text-white'>I am 
          <span className='ms-3 text-violet-700'> 
            <Typewriter  
              words={['Full Stack', 'Laravel', 'NodeJs', 'React', 'TypeScript', 'Python', 'Ai']}
              loop={false}
              cursor
              cursorStyle='|'
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000} 
            />
          </span>
          <span> Developer </span> 
        </h1>
        <Button link="/contact" name="Hire Me" />
      </div>
    </div>
  )
}

export default HeroSection
