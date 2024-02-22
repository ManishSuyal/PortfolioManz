import React from 'react'
const Contact = () => {
  return (
    <div name="Contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
     <form action="https://getform.io/f/Le3k4re6" method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4 '>Send me an Email at - manishsuyal13@gmail.com or enter message below</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
        <input className='my-2 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
        <textarea className='my-2 p-2 bg-[#ccd6f6]'  rows='10' placeholder='Message' name='message'/>
<button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-4 my-8 mx-auto flex items-center'>Let's work together</button>
     </form>
    </div>
  )
}

export default Contact