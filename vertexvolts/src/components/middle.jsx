import React from 'react';

const Middle = ({ func, offsetX, offsetY }) => {
  return (
    <div className='px-16 animate-slideIn flex justify-between' onMouseMove={func}>
      <div className='w-8/12'>
        <h4 className='text-red-600 text-2xl'>An Ai brand</h4>
        <h2 className='text-[45px] font-bold'>
          Vertexvolts is a startup aiming to make life easy for all with the help of <span className='text-red-600'>Ai.</span>
        </h2>
        <p className='text-2xl mt-4'>
          At Vertexvolts, our mission is to develop software solutions that simplify complex tasks by seamlessly integrating
          Artificial Intelligence (AI) technology. We believe that AI has the potential to revolutionize the way we work and
          live, and we're committed to harnessing its power to make a positive impact. By combining human expertise with AI's
          analytical capabilities, we aim to create intuitive and user-friendly software that can tackle even the most daunting
          challenges.
        </p>
        <button className='h-16 rounded-full text-4xl flex justify-center py-10 items-center w-[600px] bg-red-600 mt-10 hover:bg-transparent hover:border-[4px] hover:border-white hover:rounded-[10px] hover:font-bold transition-all'>
          Get Started
        </button>
      </div>
      <img
        src="/src/assets/4153726-removebg-preview.png"
        alt=""
        className='parallax'
        style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      />
    </div>
  );
};

export default Middle;
