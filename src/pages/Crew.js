import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CrewNav from "../components/CrewNav"
import Douglas from "../components/crew/Douglas"
import Mark from "../components/crew/Mark"
import Victor from "../components/crew/Victor"
import Anousheh from "../components/crew/Anousheh"

function Crew() {
  return (
	<div className='h-screen cover crew'>
    <h1 className="pl-10 pt-32 md:pl-20 text-slate-300 text-xl">
      02 <span className='text-white uppercase ml-2 tracking-wider'>Meet your crew</span>
    </h1>
    
      <CrewNav />

      <Routes>
        <Route path='/Douglas' element={<Douglas />} />
        <Route path='/Mark' element={<Mark />} />
        <Route path='/Victor' element={<Victor />} />
        <Route path='/Anousheh' element={<Anousheh />} />
      </Routes>
  </div>
  )
}

export default Crew