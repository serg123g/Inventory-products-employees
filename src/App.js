import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import {Navbar, Footer, Sidebar, ThemeSettings } from './components'
import {Ecommerce, Orders, Employees, Calendar, Stacked, Customers, Pyramid, Kanban, 
    Area, Bar, Pie, Financial, ColorPicker, colorMapping, Editor} from './pages'

import { useStateContext } from './contexts/ContextProvider'    

export const App = () => {
    const {activeMenu} = useStateContext()
  return (
   <div>
    <BrowserRouter>
    <div className='tw-flex tw-relative dark:tw-bg-main-dark-bg'>
        <div className='tw-fixed tw-right-4 tw-bottom-4' style={{zindex: '1000'}}>
            <TooltipComponent content='Settings' position='Top'>
                <button type='button' className='tw-text-3xl tw-p-3 hover:tw-drop-shadow-xl
                hover:tw-bg-light-gray tw-text-white' style={{background: 'skyblue', borderRadius:'50%'}}>
                    <FiSettings/>
                </button>

            </TooltipComponent>
        </div>
        {
        activeMenu ? 
        (
            <div className='tw-w-72 tw-fixed sidebar dark:tw-bg-secondary-dark-bg tw-bg-white'>
                <Sidebar/>
            </div>
        )
        :(
            <div className='tw-w-0 dark:tw-bg-secondary-dark-bg'>
               <Sidebar/>
            </div>
        ) }
        <div className={ 
            `dark:tw-bg-main-bg tw-bg-main-bg tw-min-h-screen tw-w-full 
            ${activeMenu ? 'md:tw-ml-72': ' tw-flex-2'} `
            }>
                <div className='tw-fixed md:tw-static tw-bg-main-bg dark:tw-bg-main-dark-bg
                navbar tw-w-full'>
                    <Navbar/>
                </div>
        
        <div>
            <Routes>
                {/* Dashboard */}
                <Route path='/' element={<Ecommerce/>}/>
                <Route path='/ecommerce' element={<Ecommerce/>}/>
                {/* pages */}
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/employees' element={<Employees/>}/>
                <Route path='/customers' element={<Customers/>}/>
                {/* Edit */}
                <Route path='/editor' element={<Editor/>}/>
            </Routes>
        </div>
    </div>
    </div>
    </BrowserRouter>
   </div>
  )
}

export default App
