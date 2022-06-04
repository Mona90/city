import React,{useState} from 'react'
import Intro from '../components/Intro'
import SearchBar from '../components/SearchBar'


function Home() {
  const [show, setShow] = useState(true)

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
        <Intro/>
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