import React,{useState} from 'react'
import Intro from '../components/Intro'
import SearchBar from '../components/SearchBar'


function Home() {
  const [show, setShow] = useState(true)
  const pinData=[
    {
      name:'Hotel',
      top:'28%',
      left:'50%'
    },{
      name:'Hospital',
      top:'10%',
      left:'62%'

    },{
      name:'Dentist',
      top:'55%',
      left:'64%'

    },{
      name:'Commercial Offices',
      top:'146px',
      left:'540px',
    },{
      name:'Poultry Farm',
     top:'185px',
     left:'190px',

    },{
      name:"Industrial Bakery",
      top:'193px',
      left:'398px',
    },{
      name: 'Meat Processor',
      top:'296px',
      left:'286px',
 
    },{
      name: 'Commercial Laundry',
      top:'337px',
      left:'369px',
 
    },{
      name:'Fast Food',
      top:'366px',
      left:'754px',
    },{
      name:'Supermarket',
      top:'284px',
      left:'953px'
    }
  ]
  return (
    <div >
      <img src='/images/source.jpg' style={styles.bgImage} alt='background'/>
      {show ? 
      <div style={styles.overlayImage} onClick={()=>setShow(false)}>
        <img src='/images/source.png' style={styles.introImg} alt="logo"/>
      </div>
      :
      <>
        <SearchBar/>
        <Intro data={pinData}/>
      </>
      }
    </div>
  )
}

const styles = {
  bgImage:{
   width:'auto',
   maxWidth:'100%',
   height:'auto',
   minHeight:'100vh',
  },
  overlayImage:{
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    zIndex:1,
  },
  introImg:{
    width:'25rem',
    height:'25rem',
    position: 'relative',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
  }
}

export default Home