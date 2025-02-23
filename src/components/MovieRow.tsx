import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MovieRowProps {
  title: string;
}

const MovieRow: React.FC<MovieRowProps> = ({ title }) => {
  // In a real app, these would come from an API
  const movies = Array(8).fill(null).map((_, i) => ({
    id: i,
    image: `https://images.unsplash.com/photo-${[
      '1536440136628-849c177e76a1',
      '1535016120720-40c646be5580',
      '1574375927938-d5a98e8ffe85',
      '1626814026160-2237a95fc5a0',
      '1626128457548-ccabad7a2c47',
      '1536440136628-849c177e76a1',
      '1535016120720-40c646be5580',
      '1574375927938-d5a98e8ffe85'
    ][i]}?w=400&h=225&fit=crop`
  }));

  return (
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <div className="relative group">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-none w-[200px] md:w-[250px] hover:scale-105 transition duration-200 cursor-pointer"
            >
              <img
                src={movie.image}
                alt={`Movie ${movie.id}`}
                className="w-full rounded-md"
              />
            </div>
          ))}
        </div>
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-black/75">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-black/75">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;