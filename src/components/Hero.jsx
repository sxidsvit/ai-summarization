import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumup_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/sxidsvit/", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Sum up Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Facilitate your reading with Sumz, an open-source article summarizer
        that converts very long and time-consuming articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
