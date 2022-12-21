import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import {links} from '../data/data/dummy'
import {useStateContext} from '../contexts/ContextProvider'

function Sidebar() {
  const {activeMenu, setActiveMenu} = useStateContext()
// propiedades de acuerdo al tipo de link si se usa o no
  const activeLink = 'tw-flex tw-items-center tw-gap-5 tw-pl-4 tw-pt-3 tw-pb-2.5 tw-rounded-lg tw-text-white tw-text-md tw-m2'
  const normalLink = 'tw-flex tw-items-center tw-gap-5 tw-pl-4 tw-pt-3 tw-pb-2.5 tw-rounded-lg tw-text-md tw-text-gray-700 dark:tw-text-gray-200 dark:hover:tw-text-black hover:tw-bg-light-gray tw-m2'

  return (
    <div className='tw-ml-3 tw-h-screen md:tw-overflow-hidden 
    tw-overflow-auto md:hover:tw-overflow-auto tw-pb-10'>
      {activeMenu && (<>
        {/* configuración de Inventario */}
        <div className='tw-flex tw-justify-between tw-items-center '>
          {/* Para desplegar o no el menú */}
          <Link to='/' onClick={ () => {setActiveMenu(false)} } 
          className="tw-items-center tw-gap-3 tw-ml-3 tw-mt-4 tw-flex tw-text-xl
          tw-font-extrabold tw-tracking-tight dark:tw-text-white tw-text-slate-900
          " >
            <SiShopware/>
            <span>Inventario</span> 
          </Link>
          
          {/*Configuración de botón cerrar */}
          <TooltipComponent content='Menu' position='BottomCenter'>
            <button type='button' onClick={() => { setActiveMenu((prevActiveMenu) => !prevActiveMenu)}} 
            className='tw-text-xl tw-rounded-full tw-p-3 hover:tw-bg-light-gray tw-mt-4
             tw-block'
            // md:tw-hidden  
            >
              <MdOutlineCancel/>
            </button>
          </TooltipComponent>
        </div>

        {/* traemos los títulos de las secciones y sus respectivos links*/}
         <div className='mt-10 '>
            {links.map((item) => (
              <div key={item.title}>
                <p className='tw-text-gray-400 tw-m-3 tw-mt-4 tw-uppercase'>
                  {item.title}
                </p>
                {item.links.map((link)=>(
                  <NavLink to={`/${link.name}`} 
                  key={link.name} 
                  onClick={()=> {}}
                  className={({isActive}) => 
                  isActive ? activeLink : normalLink
                }
                >
                  {link.icon}
                  <span className='tw-capitalize'>
                    {link.name}
                  </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>)}
      </div>
  )
}

export default Sidebar