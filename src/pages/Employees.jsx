import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu,
Filter, Page, Edit, Search, Inject, Toolbar} from '@syncfusion/ej2-react-grids'

import {employeesData, employeesGrid} from '../data/data/dummy'
import {Header} from '../components'

const Employees = () => {
  return (
  
      <div className='tw-m-2 md:tw-m-10 tw-p-2 md:tw-pd-10 tw-bg-gray tw-rounded-3xl'>
      <Header category='Page' title='Empleados'/>
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index)=>(
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, 
          Filter, Page, Edit,Toolbar, Search]}/>
      </GridComponent>
    </div>
   
  
  )
}

export default Employees