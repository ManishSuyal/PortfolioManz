import React from 'react';

const Skills = () => {
  // Categorized skills from the user's resume
  const skillsData = [
    {
      category: 'Data & Technical',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
        </svg>
      ),
      list: ['SQL', 'Tableau', 'Data Visualization', 'Analytics', 'Prompt Engineering', 'HTML', 'CSS', 'JS'],
      hoverClass: 'hover:border-teal-500 hover:shadow-teal-900', // Unique hover for Data
    },
    {
      category: 'Product & Strategy',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.394 2.08a1 1 0 00-.788 0L3.25 5.89A2 2 0 002 7.62v7.76a2 2 0 001.25 1.73l6.394 3.71a1 1 0 00.788 0l6.394-3.71a2 2 0 001.25-1.73V7.62a2 2 0 00-1.25-1.73l-6.394-3.71zM18 7.62v7.76l-6.394 3.71a1 1 0 01-.788 0L4 15.38V7.62L10 4.29l6 3.33z" />
          <path d="M10 11a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z" />
        </svg>
      ),
      list: ['Product Strategy','Scrum', 'Product Roadmapping', 'Stakeholder Management', 'Research', 'UAT','Gen AI', 'Sales'],
      hoverClass: 'hover:border-purple-500 hover:shadow-purple-900', // Unique hover for Product
    },
    {
      category: 'Tools & Other',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
          <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      list: ['PowerPoint','VS Code', 'Excel', 'MS Office Suite', 'SharePoint', 'JIRA'],
      hoverClass: 'hover:border-blue-500 hover:shadow-blue-900', // Unique hover for Tools
    },
  ];

  return (
    <div name='Skills' className='w-full py-20 bg-[#0a192f] text-[#ccd6f6]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        {/* Heading with enhanced shadow/glow effect */}
        <div className='pb-8 text-center'>
          <p className='text-4xl font-extrabold inline border-b-4 border-teal-600 text-gray-50 transition-shadow duration-500 shadow-teal-500/50 hover:shadow-lg'>
            Skills 
          </p>
          <p className='py-6 text-lg text-[#8892b0]'>
            A comprehensive overview of my technical, product, and strategy expertise.
          </p>
        </div>

        {/* Skills Grid */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center py-8'>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`shadow-2xl rounded-xl group hover:scale-105 duration-500 bg-[#112240] p-6 transition-all border-t-4 border-transparent ${skill.hoverClass}`}
            >
              <div className='flex justify-center items-center mb-4'>
                {skill.icon}
                <h3 className='text-xl font-bold ml-3 text-teal-400'>
                  {skill.category}
                </h3>
              </div>
              <ul className='space-y-2 text-md text-[#ccd6f6]'>
                {skill.list.map((item, i) => (
                  <li
                    key={i}
                    className='py-1 px-2 rounded-md transition-colors duration-300 hover:bg-teal-700/50 cursor-default'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;