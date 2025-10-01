import {useEffect, useState} from 'react';
import {FaSearch} from 'react-icons/fa'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
       <Link to='/'>
      <h1 className='text-sm sm:text-xl font-bold flex flex-wrap'>
        <span className='text-slate-500'>Mishra</span>
        <span className='text-slate-700'>Estate</span>
      </h1>
      </Link>
      <form className='bg-slate-100 p-3 rounded-lg  flex items-center '>
        <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
       <FaSearch className='text-slate-500'></FaSearch>
      </form>
      <ul className='flex gap-4 text-sm sm:text-lg '>
        <Link to= '/'>
        <li className='
        hidden sm:inline texe-slate-700 hover:underline cursor-pointer'>Home</li> </Link>
        <Link to= '/about'>
        <li className='
        hidden sm:inline texe-slate-700 hover:underline cursor-pointer'>About</li> </Link>
        <Link to= '/sign-in'>
        <li className='
        sm:inline texe-slate-700 hover:underline cursor-pointer'>Sign in</li>
        </Link>
      </ul>
      </div>
   </header>   
  )
}
