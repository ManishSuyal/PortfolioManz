import React from 'react';
import { data } from "../data/data.js";

const Work = () => {
  const project = data;

  return (
    <div name='Work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-6'>Check out the solutions I've built to bridge the gap between user needs and technical execution.</p>
        </div>

        {/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-8">
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
                        flex flex-col justify-end text-center mx-auto content-div"
            >
              {/* Name — always visible at the bottom */}
              <div className="bg-black/60 rounded-b-md px-4 py-3">
                <span className="text-lg font-bold text-white tracking-wider">
                  {item.name}
                </span>

                {/* Buttons row — only shown on hover, and only if the URL exists */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center gap-2 pt-2">
                  {item.github && (
                    <a href={item.github} target="_blank" rel="noreferrer">
                      <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-sm">
                        Code
                      </button>
                    </a>
                  )}
                  {item.live && (
                    <a href={item.live} target="_blank" rel="noreferrer">
                      <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-sm">
                        Live
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;