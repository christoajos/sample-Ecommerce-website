import React from 'react';
import { Play, Info } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[85vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1920&h=1080&fit=crop"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-900/25 to-zinc-900"></div>
      </div>
      
      <div className="relative h-full flex items-center px-4 md:px-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Stranger Things</h1>
          <p className="text-lg md:text-xl mb-8">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded hover:bg-white/90 transition">
              <Play className="w-6 h-6" />
              Play
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-gray-500/70 text-white rounded hover:bg-gray-500/50 transition">
              <Info className="w-6 h-6" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;