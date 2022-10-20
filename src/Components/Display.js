import React from 'react'
import './display.css'
import {FiSun} from 'react-icons/fi';
function Display() {
  return (
    <div className='mid'>
        <div className='left'>
          <h3>thus.10/9/2021</h3>
          <h1>12:00</h1>
        </div>
          <div className='center'>
                  <div className='inner'>
                   <p className='temp'>28<sup>o</sup><span>c</span></p>
                  </div>
                  <div className='inner2'>
                    <h2>Max:23<sup>o</sup></h2>
                    <h2>Min:23<sup>o</sup></h2>
                  </div>

                   <div className='inner3'>
                    <h2>Wind:Southeast</h2>
                    <h2>6M/h</h2>
                  </div>
        </div>
          <div className='right'>
         <FiSun></FiSun>
        </div>
    </div>
  )
}

export default Display