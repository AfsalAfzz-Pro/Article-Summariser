import React from 'react'

import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">;
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <img src={logo} alt="sumz_logo" className='w-28 object-contain'/>

     <button
     type='button'
     onClick={() => window.open('https://www.buymeacoffee.com/AfsalLabs')}
      className="black_btn">
      Support
     </button>

    </nav>

    <h1 className='head_text'>
      Summarize Notes with <br />
      <span className='orange_gradient'>ANNE AI</span>
    </h1>
    <h2 className='desc'>
      Your Personal Chatbot ready to help you through your MBBS journey
    </h2>

    </header>
  )
}

export default Hero