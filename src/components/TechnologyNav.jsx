import { Link, NavLink } from "react-router-dom"

function TechnologyNav() {
  return (
	<div className="absolute z-10 top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center pt-[30%] lg:ml-0 lg:pt-24 lg:flex-row lg:justify-start lg:left-16">

		<nav className="">

		<ul className="flex justify-center items-center lg:flex-col lg:space-y-7 lg:justify-start">
			
			<Link to='Vehicle'>
				<li className="list-none px-3">
					<span className='flex justify-center items-center h-10 w-10 bg-transparent border-2 font-sans text-white text-xl rounded-full border-white hover:bg-white hover:text-inherit duration-150  sm:w-12 sm:h-12 lg:h-16 lg:w-16'> 1	
				</span>
				</li>
			</Link>
			
			<Link to='Spaceport'>
				<li className="list-none flex justify-center items-center px-3">
					<span className='flex justify-center items-center w-10 h-10 bg-transparent  border-2 font-sans text-white text-xl rounded-full border-white hover:bg-white hover:text-inherit duration-150 sm:w-12 sm:h-12 lg:h-16 lg:w-16'> 2	
				</span>
				</li>
			</Link>
			
			<Link to='Capsule'>
				<li className="list-none flex justify-center items-center px-3">
					<span className='flex justify-center items-center w-10 h-10 bg-transparent  border-2 font-sans text-white text-xl rounded-full border-white hover:bg-white hover:text-inherit sm:w-12 sm:h-12 duration-150 lg:h-16 lg:w-16'> 3	
				</span>
				</li>
			</Link>
	
		</ul>
	 </nav>

	</div>
  )
}

export default TechnologyNav