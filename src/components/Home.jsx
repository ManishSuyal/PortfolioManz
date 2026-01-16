import React from 'react';

const Home = () => {
  // Replaced react-scroll Link with native JavaScript for smooth scrolling.
  const handleScroll = () => {
    // Finds the target element named 'work' and scrolls to it smoothly.
    const workSection = document.getElementsByName('Experience')[0];
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div name='Home' className='w-full h-screen bg-gray-900 flex items-center justify-center font-sans'>
      {/* Container - Centered and full-height */}
      <div 
        className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'
      >
        
        {/* Subtitle - Adding custom animation for staggered fade-in */}
        <p className='text-teal-400 text-lg font-medium tracking-wider mb-2 animate-fadeInDown'>
          Hi, my name is
        </p>
        
        {/* Primary Heading - High contrast, impactful */}
        <h1 className='text-5xl sm:text-7xl font-extrabold text-gray-50 transition-colors duration-500 ease-out animate-fadeInLeft'>
          Manish Suyal
        </h1>
        
        {/* Secondary Heading - Slightly subdued, defining role */}
        <h2 className='text-4xl sm:text-6xl font-bold text-gray-400 mb-4 animate-fadeInRight'>
          I'm a Product Analyst.
        </h2>
        
        {/* Description - Max width set for better readability, subtle color */}
        <p className='text-gray-300 text-lg py-4 max-w-[600px] leading-relaxed animate-fadeInUp'>
          I specialize in driving data-informed strategies and B2C, B2B web/apps solutions . 
          Currently a Product Analyst at @
          <span className="inline-flex items-center space-x-1 ml-1 font-bold">
            <svg className="w-2 h-2 text-green-500" viewBox="0 0 10 10" fill="currentColor">
              <circle cx="5" cy="5" r="5" />
            </svg>
            <span className="text-gray-300">Deloitte</span>
          </span>
          .
        </p>
        
        {/* Action Button - Enhanced UX with smooth transitions and hover effects */}
        <div>
          <button 
            onClick={handleScroll} // Triggers native smooth scroll
            className='text-white group border-2 border-teal-500 px-7 py-3 my-4 flex items-center 
                       rounded-lg font-semibold tracking-wider shadow-md
                       hover:bg-teal-600 hover:border-teal-600 hover:shadow-xl 
                       transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'
          >
            My Experience
            {/* Arrow icon changed to rotate 90 degrees on hover */}
            <span className='group-hover:rotate-90 duration-300'> 
              <svg className='ml-3 text-xl w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </button>
        </div>

        {/* Custom CSS for Staggered Animations (Injected for single-file compliance) */}
        <style>
          {`
            @keyframes fadeInDown {
              0% { opacity: 0; transform: translateY(-20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInLeft {
              0% { opacity: 0; transform: translateX(-20px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            @keyframes fadeInRight {
              0% { opacity: 0; transform: translateX(20px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            @keyframes fadeInUp {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }

            /* Staggered application of animations */
            .animate-fadeInDown { animation: fadeInDown 0.6s ease-out 0.1s both; }
            .animate-fadeInLeft { animation: fadeInLeft 0.6s ease-out 0.2s both; }
            .animate-fadeInRight { animation: fadeInRight 0.6s ease-out 0.3s both; }
            .animate-fadeInUp { animation: fadeInUp 0.6s ease-out 0.4s both; }
          `}
        </style>
      </div>
    </div>
  );
};

export default Home;