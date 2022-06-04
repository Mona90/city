import React, { useState } from 'react'
import { SearchContent } from './style'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiSearch} from 'react-icons/fi'
import SideMenu from '../SideMenu'
function SearchBar() {
  const [show, setShow] = useState(false)

  const hideMenu = ()=>{
    setShow(false)
  }

  return (
    <>
    {show ? 
       <SideMenu hideMenu={hideMenu}/>
    :
      <SearchContent>
          <div className='search_path'>
            <div>Riza City</div>
            <div></div>
          </div>
          <div className='search_box'>
            <GiHamburgerMenu className='menu_icon' onClick={()=>setShow(true)}/>
            <div className='search_area'>
              <input type="text" placeholder='Search here...'/>
              <FiSearch className='search_icon'/>
            </div>
          </div>
      </SearchContent>
     }
    
   
    </>
  )
}

export default SearchBar