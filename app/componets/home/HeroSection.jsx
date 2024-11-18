import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Button from '../../../app/utlis/Button';
import ThemeToggle from "../../../components/ThemeToggle";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-slate-100 text-black dark:bg-gray-800 dark:text-white flex items-center justify-center">
      <div className="flex flex-col items-center text-center w-full px-4 md:w-2/3">
        {/* Central Emoji */}
        <div className="text-6xl mb-4 animate-bounce">
          👋
        </div>

        {/* Introduction Text */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-medium text-yellow-600 dark:text-white">
          Hello, my soon-to-be coworkers.&nbsp;&nbsp;&nbsp;
          <span>
             I am 
            <span className="font-bold"> Kaung Myat Kywal</span>
            <br />
            But you can call me <span className="font-bold">Anytime!!</span>
          </span>
        </div>

        {/* Typewriter Animation */}
        <h1 className="mt-10 text-xl sm:text-2xl md:text-5xl font-bold text-orange-900 dark:text-white">
          I am 
          <span className="ms-3 text-violet-700">
            <Typewriter
              words={['Full Stack', 'Laravel', 'Node', 'React', 'Python', 'C#']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <span> Developer </span>
        </h1>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <Button link="/contact" name="Hire Me" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
