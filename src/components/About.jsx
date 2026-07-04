import React from 'react';

const About = () => {
  const stats = [
    { num: '3+', label: 'Years experience' },
    { num: '10+', label: 'Products shipped' },
    { num: '50+', label: 'Stakeholders managed' },
  ];

  const skills = [
    { icon: '🧭', title: 'Product Strategy', desc: 'Defining vision, roadmaps and OKRs aligned to business goals.' },
    { icon: '🔄', title: 'Agile Delivery', desc: 'Leading sprints, backlog grooming and cross-functional teams.' },
    { icon: '🎨', title: 'UI/UX Thinking', desc: 'Bridging design and engineering for user-centric experiences.' },
    { icon: '📊', title: 'Data & Analytics', desc: 'Using metrics and insights to drive product decisions.' },
  ];

  return (
    <div name='About' className='w-full bg-[#0a192f] text-gray-300 py-24 px-4'>
      <div className='max-w-[1000px] mx-auto'>

        {/* Section heading */}
        <div className='mb-12'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            About
          </p>
          <p className='text-[#8892b0] mt-4 text-sm tracking-widest uppercase'>Who I am & what I do</p>
        </div>

        {/* Top: intro split */}
        <div className='grid sm:grid-cols-2 gap-12 mb-16 items-center'>
          <div>
            <h2 className='text-3xl sm:text-4xl font-bold text-[#ccd6f6] leading-snug mb-4'>
              Hi, I'm Manish —<br />
              <span className='text-[#64ffda]'>Technical Product Manager</span>
            </h2>
            <p className='text-[#8892b0] text-base leading-relaxed'>
              Working in the tech industry for <span className='text-[#ccd6f6] font-semibold'>3+ years</span>, 
              I specialise in taking products from <span className='text-[#ccd6f6] font-semibold'>0→1</span> across 
              B2C and B2B web and app platforms. I love working at the intersection of users, business and engineering.
            </p>
            <p className='text-[#8892b0] text-base leading-relaxed mt-4'>
              Certified <span className='text-[#ccd6f6] font-semibold'>CSPO®</span> with a track record of 
              optimising workflows, driving measurable efficiency gains and building scalable, user-centric solutions 
              that strengthen business results.
            </p>

            {/* Stats */}
            <div className='flex gap-8 mt-8'>
              {stats.map(({ num, label }, i) => (
                <React.Fragment key={label}>
                  {i > 0 && <div className='w-px bg-[rgba(136,146,176,0.2)]' />}
                  <div>
                    <div className='text-2xl font-bold text-[#ccd6f6]'>{num}</div>
                    <div className='text-xs text-[#8892b0] mt-0.5 tracking-wide'>{label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right: avatar / highlight card */}
          <div className='flex justify-center sm:justify-end'>
            <div
              className='rounded-2xl p-8 w-full max-w-[320px] border'
              style={{ background: 'rgba(100,255,218,0.04)', borderColor: 'rgba(100,255,218,0.15)' }}
            >
              <div
                className='w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-5 border-2'
                style={{ background: 'rgba(100,255,218,0.1)', borderColor: '#64ffda', color: '#64ffda' }}
              >
                MS
              </div>
              <p className='text-[#ccd6f6] font-semibold text-lg'>Manish Suyal</p>
              <p className='text-[#64ffda] text-sm mb-4'>Technical Product Owner / Manager</p>
              <div className='border-t pt-4 flex flex-col gap-2' style={{ borderColor: 'rgba(136,146,176,0.15)' }}>
                <div className='flex items-center gap-2 text-sm text-[#8892b0]'>
                  <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
                  Currently at Deloitte
                </div>
                <div className='flex items-center gap-2 text-sm text-[#8892b0]'>
                  <span className='text-[#64ffda]'>✓</span> CSPO® Certified
                </div>
                <div className='flex items-center gap-2 text-sm text-[#8892b0]'>
                  <span className='text-[#64ffda]'>✓</span> B2C & B2B specialist
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {skills.map(({ icon, title, desc }) => (
            <div
              key={title}
              className='rounded-xl p-5 border transition-all duration-300 hover:-translate-y-1 cursor-default'
              style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(136,146,176,0.15)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(100,255,218,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(136,146,176,0.15)'}
            >
              <div className='text-2xl mb-3'>{icon}</div>
              <p className='text-[#ccd6f6] font-semibold text-sm mb-1'>{title}</p>
              <p className='text-[#8892b0] text-xs leading-relaxed'>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;