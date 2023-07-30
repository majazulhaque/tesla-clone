import React from 'react'
import PowerWallDetail from "./PowerWallDetail"
import PowerHeader from './PowerHeader';


function PowerWall() {
  return (
    <div className='carHome'>
        <PowerHeader/>
        <PowerWallDetail/>
    </div>
  )
}

export default PowerWall;