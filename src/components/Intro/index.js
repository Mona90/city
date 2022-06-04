import React from 'react'
import { Link } from 'react-router-dom'
import { IntroContent, Panel, Pin, Wrapper } from './style'

function Intro() {
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
      left:'540px'
    }
  ]
  return (
      <>
        <IntroContent>
          <div className='overlay h-100'>
           {pinData.map((pin,id)=>(
                <Wrapper key={id} style={{top:`${pin.top}`,left:`${pin.left}`}}>
                    <Panel><Link to='/details'>{pin.name}</Link></Panel>
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