import React from 'react'
import { MENU_ITEMS } from '../../../constants'

const MenuItems = () => {

    const [isActive, setActive] = React.useState<string>('/')

    const handleActivePage = (link:string) => setActive(link)

  return (
    <div className='h-full flex flex-row text-white items-center px-4'>
        {
            MENU_ITEMS.map((item: any, key: number) => (
                <div key={key} onClick={() => handleActivePage(item.link)} 
                className={`${isActive === item.link ? 'text-red-500 border-b-4 border-red-500' : 'text-gray-300'} cursor-pointer flex-1 flex items-center justify-center h-full`}>
                    {item.icon}
                </div>
            ))
        }
    </div>
  )
}

export default MenuItems