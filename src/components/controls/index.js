import React from 'react'
import {HiChevronUp} from 'react-icons/hi'
import {MdLocationCity} from 'react-icons/md'
import {IoMdBasket} from 'react-icons/io'
import { Controls } from './style'
function BtnsControl() {
  return (
    <Controls className=''>
        <div className='item-control'>
            <button>
                <HiChevronUp/>
            </button>
            <h5 className='label'>On level up</h5>
        </div>
        <div className='item-control'>

            <button><MdLocationCity/></button>
            <h5 className='label'>Back to city</h5>

        </div>
        <div className='item-control'>
            <button><IoMdBasket/></button>
            <h5 className='label'>Go to basket</h5>

        </div>
    </Controls>
  )
}

export default BtnsControl