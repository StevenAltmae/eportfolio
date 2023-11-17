import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#22092C]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#F05941]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Kristo-Steven Altmäe
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Software Developer.
        </h2>
        <p className='text-[#F05941] py-4 max-w-[700px]'>
          I’m a software developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m studying at Kuressaare Ametikool.
        </p>
        <div>
          <button className='group border-2 px-6 py-3 my-2 flex items-center text-[#F05941] border-[#F05941] hover:text-[#ccd6f6] hover:bg-[#872341] hover:border-[#872341]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
