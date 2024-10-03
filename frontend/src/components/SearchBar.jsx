import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className='relative flex justify-center mt-6'>
      <div className='flex items-center border border-gray-400 shadow-sm p-2 w-3/4 sm:w-1/2 bg-white'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='relative flex-1 outline-none text-sm bg-transparent px-3'
          type='text'
          placeholder='Search'
        />
        <img
          className='w-5 h-5 cursor-pointer mr-2'
          src={assets.search_icon}
          alt='Search Icon'
        />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className='ml-2 r-10 mt-3 right-2 w-4 h-4 cursor-pointer'
        src={assets.cross_icon}
        alt='Close Search'
      />
    </div>
  ) : null;
};

export default SearchBar;
