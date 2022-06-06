import React from 'react'
import {HiChevronUp} from 'react-icons/hi'
import {MdLocationCity} from 'react-icons/md'
import {IoMdBasket} from 'react-icons/io'
import { Controls } from './style'
import { Link } from 'react-router-dom'
function BtnsControl() {
  return (
    <Controls className=''>
        <div className='item-control'>
            <button>
                <HiChevronUp/>
            </button>
            <h5 className='label'><Link to="/">On level up</Link></h5>
        </div>
        <div className='item-control'>

            <button><MdLocationCity/></button>
            <h5 className='label'><Link to="/">Back to city</Link></h5>

        </div>
        <div className='item-control'>
            <button><IoMdBasket/></button>
            <h5 className='label'>Go to basket</h5>

        </div>
    </Controls>
  )
}

export default BtnsControl