import React from 'react'

const Contact = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#22092C] text-[#F05941]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-6xl font-bold inline border-b-4 border-[#BE3144] text-[#ccd6f6]'>
              Get in contact
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-3xl'>
            <div className="py-12">
              <p>Gmail : stevenaltmae@gmail.com</p>
              <p>Phone : +372 5696 6361</p>

            </div>
          </div>
      </div>
    </div>
  );
};

export default Contact