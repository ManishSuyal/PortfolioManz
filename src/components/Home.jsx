import React, { useEffect, useRef } from 'react';

const Home = () => {
  const typedRef = useRef(null);

  const handleScroll = () => {
    const workSection = document.getElementsByName('Experience')[0];
    if (workSection) workSection.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const phrases = ['great products.', 'user experiences.', '0→1 solutions.', 'impactful roadmaps.'];
    let pi = 0, ci = 0, deleting = false;
    let timer;

    const type = () => {
      const phrase = phrases[pi];
      if (!deleting) {
        typedRef.current.textContent = phrase.slice(0, ci + 1);
        ci++;
        if (ci === phrase.length) { deleting = true; timer = setTimeout(type, 1800); return; }
      } else {
        typedRef.current.textContent = phrase.slice(0, ci - 1);
        ci--;
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
      }
      timer = setTimeout(type, deleting ? 50 : 90);
    };

    timer = setTimeout(type, 900);
    return () => clearTimeout(timer);
  }, []);

  const skills = ['Product Strategy', 'Agile / Scrum', 'B2C & B2B', 'Roadmapping', 'Stakeholder Mgmt'];

  return (
    <div
      name='Home'
      className='w-full h-screen bg-[#0a192f] flex items-center justify-center font-sans overflow-hidden'
    >
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative z-0'>

        {/* Subtle grid background */}
        <div
          className='absolute inset-0 pointer-events-none'
          style={{
            backgroundImage:
              'linear-gradient(rgba(100,255,218,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Available badge */}
        <div className='mb-6 animate-fadeInDown'>
          <span
            className='inline-flex items-center gap-2 text-[#2dd4bf] text-sm font-medium px-4 py-1.5 rounded-full border'
            style={{ background: 'rgba(20,184,166,0.1)', borderColor: 'rgba(20,184,166,0.3)' }}
          >
            <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
            Available for new opportunities
          </span>
        </div>

        {/* Greeting */}
        <p className='text-[#64ffda] text-sm font-medium tracking-[3px] uppercase mb-1 animate-fadeInDown'>
          Hi, my name is
        </p>

        {/* Name */}
        <h1 className='text-5xl sm:text-7xl font-extrabold text-[#ccd6f6] leading-tight animate-fadeInLeft'>
          Manish Suyal
        </h1>

        {/* Typewriter line */}
        <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0] mb-4 animate-fadeInRight'>
          I build{' '}
          <span className='text-[#64ffda]'>
            <span ref={typedRef} />
            <span className='inline-block w-[2px] h-[1em] bg-[#64ffda] align-middle ml-0.5 animate-blink' />
          </span>
        </h2>

        {/* Description */}
        <p className='text-[#8892b0] text-base py-3 max-w-[580px] leading-relaxed animate-fadeInUp'>
          Certified{' '}
          <span className='text-[#ccd6f6] font-semibold'>CSPO® Technical Product Owner/Manager</span> with 3 years
          of experience delivering B2C & B2B web/app products from 0→1. Currently at{' '}
          <span className='inline-flex items-center gap-1 text-[#ccd6f6] font-semibold'>
            <svg className='w-2 h-2 text-green-400' viewBox='0 0 10 10' fill='currentColor'>
              <circle cx='5' cy='5' r='5' />
            </svg>
            Deloitte
          </span>
          .
        </p>

        {/* Skill tags */}
        <div className='flex flex-wrap gap-2 mb-6 animate-fadeInUp'>
          {skills.map((s) => (
            <span
              key={s}
              className='text-xs text-[#64ffda] px-3 py-1 rounded-full border'
              style={{ background: 'rgba(100,255,218,0.07)', borderColor: 'rgba(100,255,218,0.2)' }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className='animate-fadeInUp'>
          <button
            onClick={handleScroll}
            className='group inline-flex items-center gap-2 border-2 border-[#64ffda] text-[#64ffda]
                       px-7 py-3 rounded-lg font-semibold text-sm tracking-wide
                       hover:bg-[rgba(100,255,218,0.1)] hover:-translate-y-1
                       transition-all duration-300 cursor-pointer'
          >
            My Experience
            <svg
              className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300'
              fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </button>
        </div>

        {/* Stats row */}
        <div className='flex items-center gap-8 mt-8 animate-fadeInUp'>
          {[['3+', 'Years experience'], ['10+', 'Products shipped'], ['CSPO®', 'Certified']].map(
            ([num, label], i) => (
              <React.Fragment key={label}>
                {i > 0 && <div className='w-px h-8 bg-[rgba(136,146,176,0.2)]' />}
                <div>
                  <div className='text-xl font-bold text-[#ccd6f6]'>{num}</div>
                  <div className='text-xs text-[#8892b0] tracking-wide mt-0.5'>{label}</div>
                </div>
              </React.Fragment>
            )
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown { from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeInLeft { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fadeInRight { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .animate-fadeInDown { animation: fadeInDown 0.6s ease 0.1s both; }
        .animate-fadeInLeft { animation: fadeInLeft 0.6s ease 0.25s both; }
        .animate-fadeInRight { animation: fadeInRight 0.6s ease 0.35s both; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease 0.45s both; }
        .animate-blink { animation: blink 0.8s step-end infinite; }
      `}</style>
    </div>
  );
};

export default Home;