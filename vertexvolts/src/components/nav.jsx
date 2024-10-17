import React, { useState } from 'react';

const Nav = () => {
  return (
    
    <div className='flex h-16 justify-center sticky'>
      <div className='justify-between h-[150px] w-[970px] border-[4px] border-custom-white relative flex items-center top-2 rounded-[54px] '>
        <img src='\src\assets\vvoldwithoutbg.png' alt="" className='h-32 ml-5'/>
        <div className='flex list-none gap-12 text-xl font-bold'>
            <li>Home</li>
            <li>Products</li>
            <li>About us</li>
            <li>Features</li>
        </div>
        <button className=' bg-red-600 h-10 text-[17px] w-[155px] rounded-[999px] mr-12 flex justify-center items-center hover:w-[160px] hover:h-[45px] hover:bg-white hover:text-black hover:rounded-[10px] hover:font-bold transition-all'>Get started</button>
      </div>
    </div>
    

  );
  
  
}

export default Nav;
