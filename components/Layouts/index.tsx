import React from 'react'
import NavBar from '../Navbar'

type MainAppLayoutProps = {
    children: React.ReactNode | JSX.Element
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
    children
}: MainAppLayoutProps) => {
  return (
    <div className='bg-[#181818] flex flex-col h-screen'>
        <NavBar />
        <div className='flex-1 flex flex-row justify-center'>
        {children}
        </div>
    </div>
  )
}

export default MainAppLayout