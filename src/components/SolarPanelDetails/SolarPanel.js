import React from 'react'
import SolarPanelDetail from "./SolarPanelDetail"
import SolarHeader from './SolarHeader';


function SolarPanel() {
  return (
    <div className='carHome'>
        <SolarHeader/>
        <SolarPanelDetail/>
    </div>
  )
}

export default SolarPanel;