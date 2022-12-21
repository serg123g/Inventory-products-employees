import React from 'react'
import {GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject
,Edit, Toolbar, Sort, Filter
} from '@syncfusion/ej2-react-grids'

import {customersData, customersGrid} from '../data/data/dummy'
import {Header} from '../components'

function Customers() {
  return (
  
    <div className='tw-m-2 md:tw-m-10 tw-p-2 md:tw-pd-10 tw-bg-gray tw-rounded-3xl'>
    <Header category='Page' title='Customers'/>
    <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting

      editSettings={{allowDeleting: true, allowEditing: true}}
      toolbar={['Delete']}
      width="auto"
    >
      <ColumnsDirective>
        {customersGrid.map((item, index)=>(
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[Page, Edit,Toolbar, Selection, Sort, Filter]}/>
    </GridComponent>
  </div>
 

)
}

export default Customers