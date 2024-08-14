import { useState } from 'react'
import { Link } from 'react-router-dom';
import Hamburger from '../assets/shared/icon-hamburger.svg'
import Closebar from '../assets/shared/icon-close.svg'

function MobileNav() {
	const [menu, setMenu] = useState(true);
	const [open, setOpen] = useState(false)

	const menubar = () => {
		setMenu(!menu);
		setOpen(!open);
	}
  return (
	<div className='sm:hidden absolute top-0 right-0 left-0 bottom-0'>
		<span className='absolute top-7 right-7 z-50 cursor-pointer' 
		onClick={menubar}>
			<img className='' src={menu ? Hamburger : Closebar} alt="Menu-bar" />
		</span>
		<nav className={`z-40 absolute top-0 right-0 bottom-0 left-[40%] backdrop-blur-lg bg-gray-400/50 duration-300 ${open ? "flex" : "hidden"}`}>

			<ul className="flex flex-col w-full absolute top-[17%]">

				<Link to='/' className='flex w-full'>
					<li className='flex
					w-full list-none text-slate-300 text-xl pl-10 py-5 uppercase hover:bg-gray-400 hover:text-slate-200'>
						<span className='text-white font-semibold pr-3'>00</span> Home
				</li>
				</Link>

				<Link to='Destination/Moon' className='flex w-full'>
					<li className='flex
					w-full list-none text-slate-300 text-xl pl-10 py-5 uppercase hover:bg-gray-400 hover:text-slate-200'>
						<span className='text-white font-semibold pr-3'>01</span> Destination
				</li>
				</Link>

				<Link to='Crew/Douglas' className='flex w-full'>
					<li className='flex
					w-full list-none text-slate-300 text-xl pl-10 py-5 uppercase hover:bg-gray-400 hover:text-slate-200'>
						<span className='text-white font-semibold pr-3'>02</span>Crew
				</li>
				</Link>

				<Link to='Technology/Vehicle' className='flex w-full'>
					<li className='flex
					w-full list-none text-slate-300 text-xl pl-10 py-5 uppercase hover:bg-gray-400 hover:text-slate-200'>
						<span className='text-white font-semibold pr-3'>03</span> Technology
				</li>
				</Link>
			</ul>
		</nav>

	</div>
  )
}

export default MobileNav