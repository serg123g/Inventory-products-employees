import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs'
import {GoPrimitive} from 'react-icons/go'
import {Stacked, Pie, Button, SparkLine} from '../components'
import {earningData, SparkLineAreaData, ecomPieChart} from '../data/data/dummy'
import {useStateContext} from '../contexts/ContextProvider'

function Ecommerce() {
  return (
    <div className='tw-mt-12'>
      <div className='tw-flex tw-flex-wrap lg:tw-flex-nowrap tw-justify-center'>
        <div className='tw-bg-white dark:tw-text-gray-200 
        dark:tw-bg-secondary-dark-bg tw-h-44 tw-rounded-xl tw-w-full
        lg:tw-w-80 tw-p-8 tw-pt-9 tw-m-3 tw-bg-hero-pattern tw-bg-no-repeat
        tw-bg-cover tw-bg-center
        '>

        </div>

      </div>
    </div>
  )
}

export default Ecommerce