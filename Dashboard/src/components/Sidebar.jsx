import { FaSuitcase } from 'react-icons/fa'
import { LuBox, LuCalendar, LuMessageSquare, LuUser } from 'react-icons/lu'
import { TbUser } from 'react-icons/tb'
import { Logo } from '../moleculas/Logo.jsx'   
import { Link } from 'react-router-dom'
import { useState } from 'react'
export const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0); //creamos un estado para almacenar el índice del enlace activo
  const handleLinkClick = (index) => {
    setActiveLink(index);
  }

  const SIDEBAR_LINKS = [
    {id: 1, path: "/", name: "Dashboard", icon:LuBox},
    {id: 2, path: "/menbers", name: "Mienbros", icon:TbUser},
    {id: 3, path: "/messages", name: "Mensajes", icon:LuMessageSquare},
    {id: 4, path: "/proyects", name: "Proyectos", icon:FaSuitcase},
    {id: 5, path: "/clients", name: "Clientes", icon:LuUser},
    {id: 6, path: "/work", name: "Plan de Trabajo", icon:LuCalendar},
  ]
  return (
    //Logo 
    <div className='w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white'>
      <div className='mb-8 '>
          <Logo/>
      </div>
      {/* Navigation Links */}
      <ul className='mt-6 space-y-6'>
        {
          SIDEBAR_LINKS.map((link, index) => (
              <li 
                key={index} 
                className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 
                hover:text-indigo-600 ${activeLink === index ? "bg-indigo-100 text-indigo-500" : "" }`}
              >
              <Link 
                to={link.path} 
                className='flex justify-center md:justify-start items-start md:space-x-5'
                onClick={() =>handleLinkClick(index)}
              >
                <span>{link.icon()}</span>
                <span className='text-sm text-gray-500 hidden md:flex'>{link.name}</span>  
              </Link>
            </li>
          ))
        }
      </ul>

      {/* Navigation Links */}
      <div className='w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center'>
        <p className='flex items-center space-x-2 text-sm text-white py-2 px-5
        justify-center bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full'>
          {""}
          <span>?</span>
          <span className='hidden md:flex'>Ayuda</span>
        </p>
      </div>

    </div>
  )
}
