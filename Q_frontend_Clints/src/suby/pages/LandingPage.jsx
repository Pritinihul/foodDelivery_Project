import React from 'react'
//import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import ItemsDisplay from '../components/ItemsDisplay'
import Chains from '../components/Chains'
import FirmCollections from '../components/FirmCollections'
import ProductMenu from '../components/ProductMenu'

const LandingPage = () => {
  return (
    <div>
        
        <div className="landingSection">
        <Navbar/>
        <ItemsDisplay />
        <Chains />
        <FirmCollections />
        </div>
    </div>
  )
}

export default LandingPage