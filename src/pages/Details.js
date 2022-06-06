import React from 'react'
import BtnsControl from '../components/controls'
import Intro from '../components/Intro'
import SearchBar from '../components/SearchBar'

function Details() {
  const pinData=[
    {
      name:'Patient Room',
      top:'34%',
      left:'25%'
    },{
      name:'Warewashing',
      top:'35%',
      left:'35%'

    },{
      name:'Operating Room',
      top:'44%',
      left:'29%'

    },{
      name:'QSR Dining Area',
      top:'31%',
      left:'41%',
    },{
      name:'Hospital Reception',
     top:'48%',
     left:'55%',

    },{
      name:"Public toilet",
      top:'35%',
      left:'64%',
    },{
      name: 'Staff toilet',
      top:'25%',
      left:'69%',
 
    },{
      name: 'Office',
      top:'156px',
      left:'862px',
 
    },{
      name:'Laundry',
      top:'15%',
      left:'57%',
    },{
      name:'Plant Room',
      top:'23%',
      left:'50%'
    },{
      name:'Kitchen',
      top:'36%',
      left:'46%'
    },{
      name:'Nursing Station',
      top:'57%',
      left:'35%'
    }
  ]
  return (
    <div>
        <img src='/images/hotel.jpg' style={styles.bgImage} alt='pin plan'/>
        <Intro data={pinData}/>
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