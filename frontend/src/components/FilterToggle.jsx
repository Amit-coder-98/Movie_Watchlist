import React from 'react';

const FilterToggle = ({ filter, setFilter }) => {
  return (
    <div className="mb-4 space-x-4">
      <button
        className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text' : 'bg-gray-200'}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`px-4 py-2 rounded ${filter === 'watched' ? 'bg-blue-500 text-success' : 'bg-gray-200'}`}
        onClick={() => setFilter('watched')}
      >
        Watched
      </button>
      <button
        className={`px-4 py-2 rounded ${filter === 'toWatch' ? 'bg-blue-500 text-warning' : 'bg-gray-200'}`}
        onClick={() => setFilter('toWatch')}
      >
        To Watch
      </button>
    </div>
  );
};

export default FilterToggle;
