import { Avatar } from '@mui/material'
import React from 'react'
import MenuItems from './Atoms/MenuItems'
import LanguageIcon from '@mui/icons-material/Language';

const NavBar = () => {
  return (
    <div className='bg-[#262626] h-20 flex flex-row justify-center'>
        <div className='container grid grid-cols-12'>
        <div className="col-span-1 flex items-center">
            <h1 className='text-red-500 font-bold text-4xl'>
                Quora
            </h1>
        </div>
        <div className="col-span-4">
            <MenuItems />
        </div>
        <div className="col-span-7 flex items-center justify-around">
            <input className='border-[1px] bg-[#181818] py-2 px-2 rounded-sm w-6/12 border-gray-500' placeholder='Search Quora' />
            <button className='text-gray-300 rounded-full py-1 border-2 border-gray-500 px-4'>
                Try Quora +
            </button>
            <Avatar src="" alt="LFS" />
            <div className='text-gray-400'>
            <LanguageIcon fontSize='large'/>
            </div>
            <select className='px-7 rounded-full bg-red-500 py-2 text-white'>
                <option>
                    Add Question
                </option>
            </select>
        </div>
        </div>
    </div>
  )
}

export default NavBar