import React from 'react';
import sample from '../assets/samplevid.mp4';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div className='scrollbar-hidden'>
      <div className="w-full h-screen relative">
        <video
          src={sample}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative z-10 w-full h-full flex items-center justify-center text-white">
          <h1 className="text-5xl font-bold"><Typewriter words={["Explore the Universe from Your Pocket"]} typeSpeed={200}/></h1>
        </div>
      </div>

      <div className="p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-700">
          This is the rest of the landing page. Add your sections, content, and more here.
        </p>
      </div>
    </div>
  );
};

export default Home;
