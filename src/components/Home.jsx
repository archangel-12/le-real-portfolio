import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='Home' className='w-full h-screen bg-[#080e18]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-700 text-lg'>hello world, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          archangel
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          you can call me "nothing" if you want :)
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I'm just a typical college student who wants to build something outside of my discipline field.
        </p>
        <div>
          <a href="https://www.youtube.com/watch?v=QDia3e12czc" target="_blank" rel="noopener noreferrer"></a>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            dont't click it
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;