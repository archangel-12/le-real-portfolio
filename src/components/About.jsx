import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-[#080e18] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>about</p>

    </div>
        <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>yeah so this me, nice to meet you. um, i don't know what is this :/</p>
            </div>
            <div>
              <p>i'mma be real with you folks, i don't think this is qualified enough to be considered as a proper portfolio</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;