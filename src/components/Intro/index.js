import React, { useState } from 'react'
import { IntroContent, Panel, Pin, Wrapper } from './style'

function Intro() {
  const [show, setShow] = useState(true)
  const pinData=[
    {
      name:'Hotel',
      top:'26%',
      left:'49%'
    },{
      name:'Hospital',
      top:'10%',
      left:'62%'

    },{
      name:'Dentist',
      top:'32%',
      left:'66%'

    }
  ]
  return (
      <>
        <IntroContent style={{height:'100vh'}} onClick={()=>setShow(false)}>
          <div className='overlay'>
           {show ? 
               <img src='/images/source.png' alt="logo"/>
            
            :
              pinData.map(pin=>(
                <Wrapper style={{top:`${pin.top}`,left:`${pin.left}`}}>
                    <Panel>{pin.name}</Panel>
                    <Pin></Pin>
                  </Wrapper>
              ))
              }
          </div>
        </IntroContent>
      </>
  )
}

export default Intro