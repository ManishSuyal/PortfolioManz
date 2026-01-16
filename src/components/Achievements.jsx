import React from 'react';

// Icons replaced with inline SVGs to ensure single-file compilation

const AwardIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z" clipRule="evenodd"></path>
    <path d="M10 2a8 8 0 00-8 8c0 2.072.772 4.02 2.146 5.485l-1.414 1.414A10 10 0 1110 0a10 10 0 010 2zm0 14a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 110-8 4 4 0 010 8z"></path>
  </svg>
);

const StarIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.62-.921 1.92 0l2.553 7.842a1 1 0 00.95.69h8.225c.969 0 1.371 1.24.588 1.81l-6.66 4.87a1 1 0 00-.363 1.118l2.552 7.841c.3.921-.755 1.688-1.538 1.118l-6.66-4.87a1 1 0 00-1.176 0l-6.66 4.87c-.783.57-1.838-.197-1.538-1.118l2.552-7.841a1 1 0 00-.363-1.118l-6.66-4.87c-.783-.57-.381-1.81.588-1.81h8.225a1 1 0 00.95-.69l2.553-7.842z"></path>
  </svg>
);

const LightBulbIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4.356 2.636a1 1 0 01.07 1.353l-.707.707a1 1 0 01-1.353-.07l-.707-.707a1 1 0 01.07-1.353l.707-.707a1 1 0 011.353.07l.707.707zM17 10a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1zm-4.356 4.364a1 1 0 01-1.353.07l-.707-.707a1 1 0 01.07-1.353l.707-.707a1 1 0 011.353.07l.707.707zm-7.929 1.414a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l.707-.707zM3 10a1 1 0 011 1H3a1 1 0 010-2h1a1 1 0 01-1 1zM7 16a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zM5.644 4.364a1 1 0 011.353-.07l.707.707a1 1 0 01-.07 1.353l-.707.707a1 1 0 01-1.353-.07l-.707-.707z"></path>
    <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v1a1 1 0 002 0V4a1 1 0 00-1-1zm0 13a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm4.356-11.364a1 1 0 00-1.353-.07l-.707-.707a1 1 0 00-.07 1.353l.707.707a1 1 0 001.353.07l.707-.707zm-7.929 1.414a1 1 0 000 1.414l.707.707a1 1 0 001.414 0l.707-.707a1 1 0 000-1.414l-.707-.707z" clipRule="evenodd"></path>
  </svg>
);


const Achievements = () => {
    const achievementsList = [
        {
            title: 'Spot Award (Deloitte)',
            description: 'High-Impact Platform Migration: Lead the end-to-end migration of enterprise content to a new global platform. Collaborated with US stakeholders to implement UX improvements that significantly enhanced platform functionality.',
            icon: <StarIcon className="w-8 h-8 text-yellow-400" />,
            color: 'bg-yellow-900/30 border-yellow-700',
        },
        {
            title: 'Spot Award (Deloitte) - UAT/Quality',
            description: 'Quality Assurance & UX Optimization: Recognized for leading comprehensive UAT cycles in partnership with US tech teams. Identified and resolved critical bugs, driving substantial improvements in product design and user flow.',
            icon: <StarIcon className="w-8 h-8 text-yellow-400" />,
            color: 'bg-yellow-900/30 border-yellow-700',
        },
        {
            title: 'Festive Retail Venture | Entrepreneurial Leadership',
            description: 'Generated ₹1.25 Lakh+ net profit in just 5 days by launching a high-traffic retail pop-up during peak festive season. Managed end-to-end operations, including market demand analysis, dynamic pricing optimization, and inventory management.',
            icon: <LightBulbIcon className="w-8 h-8 text-teal-400" />,
            color: 'bg-teal-900/30 border-teal-700',
        },
    ];

  return (
    <div name='Achievements' className='w-full min-h-screen bg-gray-900 text-gray-300 py-16 px-8 flex justify-center'>
      
      <div className='max-w-[1000px] w-full'>
        {/* Section Title */}
        <div className='pb-8 text-center sm:text-left'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-50'>
            Achievements & Recognition
          </p>
          <p className='py-6 text-xl'>
            <AwardIcon className='inline-block mr-2 text-yellow-400 w-6 h-6' />
            Highlights of my performance and successful ventures.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {achievementsList.map((item, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border-t-4 ${item.color} shadow-lg flex flex-col items-center transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-yellow-500/10`}
            >
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-50">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;