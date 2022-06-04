import React from 'react'
import { Menu, Overlay } from './style'
import {IoMdBasket, IoMdHelpCircle} from 'react-icons/io'
import {AiOutlineFileSearch} from 'react-icons/ai'
function SideMenu(props) {
  
  return (
    <Overlay onClick={()=>props.hideMenu()}>
        <Menu>
            <div className='row justify-content-center'>
              <img className='col-5 img-fluid' src='/new-logo.svg' alt="logo"/>
            </div>
            <ul className='list-unstyled'>
              <li>
                <IoMdBasket className='me-2'/>
                <span>Basket</span>
              </li>
              <li>
                <AiOutlineFileSearch className='me-2'/>
                <span>Document Search</span>
              </li>
              <li>
                <IoMdHelpCircle className='me-2'/>
                <span>help</span>
              </li>
            </ul>
        </Menu>
    </Overlay>
  )
}

export default SideMenu