import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TechnologyNav from "../components/TechnologyNav"
import Vehicle from "../components/technology/Vehicle"
import Spaceport from "../components/technology/Spaceport"
import Capsule from "../components/technology/Capsule"

function Technology() {
  return (
	<div className='relative h-screen cover technology'>
    <h1 className="pl-10 pt-24 md:pl-20 text-slate-300 text-xl">
      03 <span className='text-white uppercase ml-2 tracking-wider'>space launch 101</span>
    </h1>
    
      <TechnologyNav />

      <Routes>
        <Route path='/Vehicle' element={<Vehicle />} />
        <Route path='/Spaceport' element={<Spaceport />} />
        <Route path='/Capsule' element={<Capsule />} />
      </Routes>
  </div>
  )
}

export default Technology