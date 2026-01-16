import React from 'react';

// Icons replaced with inline SVGs to ensure single-file compilation

const GlobeIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v4m0-4a5 5 0 01-5-5h10a5 5 0 01-5 5zM12 2a10 10 0 100 20 10 10 0 000-20z"></path>
  </svg>
);

const LaptopIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-4-4m5-6h2m0 0a2 2 0 100-4 2 2 0 000 4zm0 0v-4"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9a1 1 0 001-1V5a1 1 0 00-1-1h-9m0 16h-3a1 1 0 01-1-1v-4"></path>
  </svg>
);

const BriefcaseIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13v-3a2 2 0 00-2-2H5a2 2 0 00-2 2v3m18 0v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m18 0h-1v-3a2 2 0 00-2-2H6a2 2 0 00-2 2v3H3m14 0h-4m-2 0h-4"></path>
  </svg>
);


const Experience = () => {
  // Hardcoded resume data
  const experiences = [
    {
      id: 1,
      company: 'Deloitte USI',
      role: 'Product Analyst',
      location: 'Hyderabad, Onsite',
      duration: 'May 2024 - Present',
      icon: <GlobeIcon className="text-teal-400 w-6 h-6" />,
      highlights: [
        '<strong>Spearheaded product delivery</strong> for global internal applications, collaborating with US stakeholders and dev teams to streamline Deloitte news and events.',
        '<strong>Drove a 250% increase in content visibility</strong> by leveraging data-driven insights and implementing UI/UX enhancements across 200+ web pages.',
        '<strong>Optimized operational efficiency</strong> by executing cross-platform UAT and identifying critical pain points, reducing content creation time by 30%.',
        '<strong>Leveraged Generative AI and prompt engineering</strong> to build web scraping python scripts, analyzing 10,000+ historical articles to inform product strategy.',
        '<strong>Designed and developed metrics dashboards,</strong> enabling stakeholders to make faster, informed decisions through quarterly performance insights.',
        '<strong>Led platform migration initiatives,</strong> providing strategic UX improvements and ensuring high-quality product functionality during end-to-end testing.',
      ],
    },
    {
      id: 2,
      company: 'EDUFIED Pte Ltd',
      role: 'Developer',
      location: 'Singapore, Remote',
      duration: 'Sept 2022 - Aug 2023',
      icon: <LaptopIcon className="text-teal-400 w-6 h-6" />,
      highlights: [
        'Led a cross-functional engineering-team in a <strong>fast-paced scrum/Agile environment</strong>, ensuring high-quality releases on schedule.',
        '<strong>Partnered with C-suite leadership (CEO/CTO)</strong> to shape product roadmaps, prioritize feature backlogs, and define user requirements.',
        '<strong>Scaled institutional branding</strong> by deploying 500+ digital certificate products, utilizing React-based tools and Figma designs to enhance customer satisfaction and MAU.',
        '<strong>Mentored and onboarded junior talent,</strong> establishing setup protocols that improved team delivery speed and overall product quality.',
      ],
    },
  ];

  return (
    // REMOVED min-h-screen to prevent this component from forcing scrollable behavior on the main body.
    // The component will now only be as tall as its content.
    <div name='Experience' className='w-full bg-gray-900 text-gray-300 py-16 px-8 flex justify-center'>
      
      <div className='max-w-[1000px] w-full'>
        {/* Section Title */}
        <div className='pb-8 text-center sm:text-left'>
          <p className='text-4xl font-bold inline border-b-4 border-teal-500 text-gray-50'>
            Professional Work Experience
          </p>
          <p className='py-6 text-xl'>
            <BriefcaseIcon className='inline-block mr-2 text-teal-400 w-6 h-6' />
            Where I've applied my product and data skills.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Vertical Line (Centered for aesthetic, only visible on larger screens) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700 hidden sm:block"></div>

          {experiences.map((item, index) => (
            <div 
              key={item.id} 
              // Removed center alignment for mobile and ensured horizontal spacing
              className="mb-12 flex flex-col items-start px-4 sm:items-center sm:px-0" 
            >
              {/* Content Card - FULL WIDTH (w-full sm:w-11/12) */}
              <div 
                className={`w-full sm:w-11/12 p-6 bg-gray-800 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-teal-500/20 hover:scale-[1.01] text-left relative`}
              >
                {/* Timeline Marker on Desktop - Shifted slightly left to indicate position on the line */}
                <div className="hidden sm:block absolute top-6 -left-12 transform -translate-x-1/2 z-10">
                    <div className="p-3 rounded-full bg-gray-900 border-4 border-teal-500 shadow-lg">
                        {item.icon}
                    </div>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold text-gray-50">{item.company}</h3>
                  <p className="text-sm font-medium text-teal-400">{item.duration}</p>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-400">{item.role}</h4>
                <p className="text-xs italic mb-4 text-gray-500">{item.location}</p>
                
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                  {item.highlights.map((highlight, hIndex) => (
                    <li 
                      key={hIndex} 
                      // Using dangerouslySetInnerHTML to allow bold tags within highlights array
                      dangerouslySetInnerHTML={{ __html: highlight }} 
                    />
                  ))}
                </ul>
              </div>

              {/* Mobile Marker (Always visible) */}
              {/* Added a vertical divider on mobile and aligned the marker to the left */}
              <div className="sm:hidden w-full h-4 relative">
                 <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 h-full bg-gray-700"></div>
                 <div className="absolute left-1/2 transform -translate-x-1/2 top-0 p-1 rounded-full bg-gray-900 border-2 border-teal-500 shadow-lg">
                    {item.icon}
                 </div>
              </div> 
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;