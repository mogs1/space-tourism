import { Link, NavLink } from "react-router-dom"

function CrewNav() {
  return (
	<div className="z-20 flex flex-col h-screen absolute top-0 left-0 bottom-0 right-0 pt-20 lg:flex-row lg:pt-56 mx-auto">

		<nav className="relative flex lg:w-3/5 h-1/2 lg:h-[420px] mx-auto">

		<ul className="absolute flex justify-center items-center -left-20 bottom-0  lg:left-20 lg:justify-start px-5 lg:px-0">
			
			<Link to='Douglas'>
				<li className="list-none flex justify-center items-center px-2">
					<span className='bg-slate-500 w-3 h-3 border-2 rounded-full border-white hover:bg-white duration-150'>	
				</span>
				</li>
			</Link>
			
			<Link to='Mark'>
				<li className="list-none flex justify-center items-center px-2">
					<span className='bg-slate-500 w-3 h-3 border-2 rounded-full border-white hover:bg-white duration-150'>	
				</span>
				</li>
			</Link>
			
			<Link to='Victor'>
				<li className="list-none flex justify-center items-center px-2">
					<span className='bg-slate-500 w-3 h-3 border-2 rounded-full border-white hover:bg-white duration-150'>	
				</span>
				</li>
			</Link>
			
			<Link to='Anousheh'>
				<li className="list-none flex justify-center items-center px-2">
					<span className='bg-slate-500 w-3 h-3 border-2 rounded-full border-white hover:bg-white duration-150'>	
				</span>
				</li>
			</Link>
	
		</ul>
	 </nav>

		<div className="h-1/2 lg:h-1 lg:w-2/5 mx-auto">

		</div>

	</div>
  )
}

export default CrewNav