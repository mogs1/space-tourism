import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Moon from '../components/destination/Moon';
import Mars from '../components/destination/Mars';
import Europa from '../components/destination/Europa';
import Titan from '../components/destination/Titan';
import DestinationNav from '../components/DestinationNav';

function Destination() {
  return (
	<div className='h-screen cover destination'>
    <h1 className="pl-10 pt-20 md:pl-20 sm:pt-32 text-slate-300 text-xl">
      01 <span className='text-white uppercase ml-2 tracking-wider'>pick your destination</span>
    </h1>
    
      <DestinationNav />

      <Routes>
        <Route path='/Moon' element={<Moon />} />
        <Route path='/Mars' element={<Mars />} />
        <Route path='/Europa' element={<Europa />} />
        <Route path='/Titan' element={<Titan />} />
      </Routes>
  </div>
  )
}

export default Destination