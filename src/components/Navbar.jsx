import React, {useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChatLeft} from 'react-icons/bs'
import { RiNotificationLine } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import avatar from '../data/data/avatar.jpg'
import {Cart, Chat, Notification, UserProfile} from '.'
import {useStateContext} from '../contexts/ContextProvider'

// funcion que deveulev los botonoes para el menu
const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' 
    onClick={customFunc}
    style={{color}}
    className="tw-relative tw-text-xl tw-rounded-full tw-p-3 hover:tw-bg-light-gray"
    >
      <span style={{background: dotColor}}
        className='tw-absolute tw-inline-flex tw-rounded-full tw-h-2 tw-w-2 tw-right-2 tw-top-2'
      />
        {icon}
    </button>
  </TooltipComponent>
)

function Navbar() {
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick} = useStateContext()

  return (
    <div 
    className='tw-flex tw-justify-between tw-p-2 md:tw-mx-6 tw-relative'
    >
      {/* botón menú */}
     <NavButton title='Menú' meta='UTF-8' 
     customFunc={() => 
     setActiveMenu((prevActiveMenu) =>!prevActiveMenu)} 
     color="blue" 
     icon={<AiOutlineMenu/>}/>

     {/* Carrito */}
      {/* <div className='tw-flex'>
        <NavButton title='Carrito' meta='UTF-8' 
        customFunc={() => handleClick('cart')} 
        color="blue" 
        icon={<FiShoppingCart/>}/>
      </div> */}

      {/* Chat */}
       {/* <div className='tw-flex'>
        <NavButton title='Chat' meta='UTF-8' 
        dotColor="#03C9D7"
        customFunc={() => handleClick('chat')} 
        color="blue" 
        icon={<BsChatLeft/>}/>
      </div> */}

      {/* Notificaciones */}
         {/* <div className='tw-flex'>
        <NavButton title='Chat' meta='UTF-8' 
        dotColor="#03C9D7"
        customFunc={() => handleClick('notification')} 
        color="blue" 
        icon={<RiNotification3Line/>}/>
      </div> */}

      <TooltipComponent
      container="Perfil"
      position='BottomCenter'
      >
        <div className='tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-p-1 
        hover:tw-bg-light-gray tw-rounded-lg'
        onClick={()=> handleClick('userProfile')}
        >
          <img
          className='tw-rounded-full tw-w-8 tw-h-8'
          src={avatar}
          />
          <p>
            <span
              className='tw-text-gray-400 tw-text-14'
            >
              Hola, </span>{' '}
            <span>Usuario</span>
          </p>
          {/* flecha hacia aabjo */}
          <MdKeyboardArrowDown
          className='tw-text-gray-400 tw-text-14'
          />

        </div>

      </TooltipComponent>
      {isClicked.userProfile && <UserProfile/>}


    </div>

  )
}

export default Navbar