import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Button from '../../../app/utlis/Button';
import ThemeToggle from "../../../components/ThemeToggle";


const HeroSection = () => {
  return (
    <div className='relative min-h-screen bg-slate-100 text-black dark:bg-gray-800 dark:text-white flex items-center justify-center'>
      <div className='flex flex-col items-center text-center w-full md:w-2/3'>
        <div className='text-4xl text-yellow dark:text-white'>
        Hello, my soon-to-be coworkers. <span> I am <br /><span className='font-bold'>Kaung Myat Kywal</span><br />But you can call me <span className='font-bold'>Nolan!</span></span>
        </div>
        <h1 style={{ fontSize: '60px' }} className='font-bold mt-10 text-orange-900 dark:text-white'>
          I am 
          <span className='ms-3 text-violet-700'> 
            <Typewriter  
              words={['Full Stack', 'Laravel', 'Node', 'React', 'TypeScript', 'Python', 'C#']}
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
  );
}

export default HeroSection;