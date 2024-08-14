import { Link, NavLink, Navigate, useNavigate } from "react-router-dom"

function DestinationNav() {
	const navigate = useNavigate()


  return (
	<div className="flex flex-col h-screen -mt-40 pt-20 lg:flex-row lg:pt-56 mx-auto">
		<div className="h-1/2 lg:h-1 lg:w-3/5 mx-auto">

		</div>

		<nav className="lg:w-2/5 h-1/2 lg:h-1 mx-auto">
		<ul className="flex justify-center lg:justify-start px-5 lg:px-0">
			
			<Link to='Moon'>
			<div className="relative group text-white space-y-3 py-2 cursor-pointer
			mx-3 md:mx-5" >
				<li className='list-none flex'>
					<p className='uppercase tracking-wider'>Moon</p>
				</li>
				<span className='absolute bottom-0 w-full h-1 bg-white/70 opacity-0
				group-hover:opacity-100 duration-150'></span>
			</div>
			</Link>
			
			<Link className="" to='Mars'>
			<div className="relative group text-white space-y-3 py-2 cursor-pointer
			mx-3 md:mx-5">
				<li className='list-none flex'>
					<p className='uppercase tracking-wider'>Mars</p>
				</li>
				<span className='absolute bottom-0 w-full h-1 bg-white/70 opacity-0
				group-hover:opacity-100 duration-150'></span>
			</div>
			</Link>
			
			<Link className="" to='Europa'>
			<div className="relative group text-white space-y-3 py-2 cursor-pointer
			mx-3 md:mx-5">
				<li className='list-none flex'>
					<p className='uppercase tracking-wider'>Europa</p>
				</li>
				<span className='absolute bottom-0 w-full h-1 bg-white/70 opacity-0
				group-hover:opacity-100 duration-150'></span>
			</div>
			</Link>
			
			<Link className="" to='Titan'>
			<div className="relative group text-white space-y-3 py-2 cursor-pointer
			mx-3 lg:mx-5">
				<li className='list-none flex'>
					<p className='uppercase tracking-wider'>Titan</p>
				</li>
				<span className='absolute bottom-0 w-full h-1 bg-white/70 opacity-0
				group-hover:opacity-100 duration-150'></span>
			</div>
			</Link>
	
		</ul>
	 </nav>

	</div>
  )
}

export default DestinationNav