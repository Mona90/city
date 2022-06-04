import React from 'react'
import BtnsControl from '../components/controls'
import SearchBar from '../components/SearchBar'

function Details() {
  return (
    <div>
        <img src='/images/hotel.jpg' style={styles.bgImage} alt='pin plan'/>
        <SearchBar/>
        <BtnsControl/>
    </div>
  )
}
const styles = {
    bgImage:{
     width:'auto',
     maxWidth:'100%',
     height:'auto',
     minHeight:'100vh',
    }
}

export default Details