import React from 'react'
import { Link } from 'react-router-dom'
import { IntroContent, Panel, Pin, Wrapper } from './style'

function Intro({data}) {

  return (
      <>
        <IntroContent>
          <div className='overlay h-100'>
           {data.map((pin,id)=>(
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