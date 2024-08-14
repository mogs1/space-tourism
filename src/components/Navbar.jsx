import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Navbar.css'

function Navbar() {
  return (
	<nav className='hidden sm:flex absolute z-20 right-0 lg:mt-8'>
		<ul className="bg-slate-100/10 backdrop-blur-lg flex px-2 md:px-3 ">
			
			<NavLink to='/'>
			<div className="relative group text-slate-300 space-y-3 py-5 cursor-pointer
			mx-3 md:mx-5">
				<li className='list-none flex text-lg'>
					<span className='mr-2 font-bold text-white'>00</span>
					<p className='uppercase'>Home</p>
				</li>
				<span className='absolute bottom-0 w-full h-1 bg-white/70 opacity-0
				group-hover:opacity-100 duration-150'></span>
			</div>
			</NavLink>

			<NavLink to='/Destination/moon'>
			<div className="relative group text-slate-300 space-y-3 py-5 cursor-pointer mx-3 md:mx-5">
				<li className='list-none flex text-lg'>
					<span className='mr-2 font-bold text-white'>01</span>
					<p className='uppercase'>Destination</p>
				</li>
				<span className='absolute bottom-0 w-full h-1 bg-white/70 opacity-0
				group-hover:opacity-100 duration-150'></span>
			</div>
			</NavLink>

			<NavLink to='/Crew/Douglas' >
			<div className="relative group text-slate-300 space-y-3 py-5 cursor-pointer mx-3 md:mx-5">
				<li className='list-none flex text-lg'>
					<span className='mr-2 font-bold text-white'>02</span>
					<p className='uppercase'>crew</p>
				</li>
				<span className=' absolute bottom-0 w-full h-1 bg-white/70 opacity-0
				group-hover:opacity-100 duration-150'></span>
			</div>
			</NavLink>

			<NavLink to='Technology/Vehicle'>
			<div className="relative group text-slate-300 space-y-3 py-5 cursor-pointer mx-3 md:mx-5">
				<li className='list-none flex text-lg'>
					<span className='mr-2 font-bold text-white'>03</span>
					<p className='uppercase'>technology</p>
				</li>
				<span className='absolute bottom-0 w-full h-1 bg-white/70 opacity-0
				group-hover:opacity-100 duration-150'></span>
			</div>
			</NavLink>
			
		</ul>
	</nav>
  )
}

export default Navbar