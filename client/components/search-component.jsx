import React from "react";

const Search = () => {
  return (
    <div className='relative'>
      <form className='mt-6'>
        <div className='relative max-w-lg'>
          <label className='sr-only' for='food'>
            search
          </label>

          <input
            className='w-full outline-none rounded-full border-gray-200 bg-white p-4 pe-32 text-sm font-medium'
            id='food'
            type='text'
            placeholder='e.g jollof rice'
          />

          <button className='absolute end-1 top-1/2 -translate-y-1/2 rounded-full outline-none bg-primary hover:bg-secondary px-5 py-3 text-sm font-medium text-white hover:text-primary hover:border-2 hover:border-gray-800 transition-all  '>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
