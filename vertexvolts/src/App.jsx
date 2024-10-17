import React, { useState } from 'react';
import Nav from './components/nav.jsx';
import Middle from './components/middle.jsx';

const App = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / 500; // Adjust divisor to control intensity
    const y = (e.clientY - innerHeight / 2) / 500;
    setOffsetX(x);
    setOffsetY(y);
  };

  return (
    <div className='w-full h-screen bg-black text-white flex flex-col gap-52'>
      <Nav func={handleMouseMove} offsetX={offsetX} offsetY={offsetY} />
      <Middle func={handleMouseMove} offsetX={offsetX} offsetY={offsetY} />
    </div>
  );
};

export default App;
