import React from 'react';

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi👋. I'm Manish &#128515;, working as a Product Onwer/Manager in Tech industry for 3 years. Please take a look around.  </p>
            </div>
            <div>
              <p>Product owner with over 3 years of experience in managing cross-functional product delivery around B2C and B2B web/apps
solutions. Skilled in UI/UX, customer analysis, optimizing workflows and driving measurable efficiency gains. Passionate about developing scalable, user-centric product solutions that enhance user engagement and strengthen business results.

</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;