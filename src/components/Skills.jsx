import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Typescript from '../assets/Typescript.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import bootstrap from '../assets/Bootstrap.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name="Skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills </p>
            <p className='py-4'> These are the technologies i have worked with</p>
            </div>
<div className='w-full grid  grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
        <img src={HTML} className='w-20 mx-auto' alt="HTML icon" />
        <p className='my-4'>HTML</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
        <img src={CSS} className='w-20 mx-auto' alt="HTML icon" />
        <p className='my-4'>CSS</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
        <img src={JavaScript} className='w-20 mx-auto' alt="HTML icon" />
        <p className='my-4'>Javascript</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
        <img src={ReactImg} className='w-20 mx-auto' alt="HTML icon" />
        <p className='my-4'>React</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
        <img src={GitHub} className='w-20 mx-auto' alt="HTML icon" />
        <p className='my-4'>Github</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
        <img src={Tailwind} className='w-20 mx-auto' alt="HTML icon" />
        <p className='my-4'>Tailwind</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
        <img src={bootstrap} className='w-20 mx-auto' alt="HTML icon" />
        <p className='my-4'>HTML</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
        <img src={Typescript} className='w-20 mx-auto' alt="HTML icon" />
        <p className='my-4'>Typescript</p>
    </div>
</div>
</div>
        </div>

  )
}

export default Skills