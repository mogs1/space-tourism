import Personimg from '../../Space-Tourism/assets/crew/image-victor-glover.png'

function Victor() {
  return (
	<div className="flex flex-col absolute top-0 left-0 bottom-0 right-0 pt-44 lg:flex-row lg:pt-56 mx-auto lg:mx-0">

		<div className=" md:w-3/5 h-1/2 lg:h-1 mx-auto max-w-lg lg:max-w-full lg:pt-14">

			<div id="content-1" class=" space-y-5 text-white text-center lg:space-y-8 lg:text-left lg:pl-20 ">
				<span className='text-zinc-500 uppercase text-3xl font-sans'>
					Pilot
				</span>
            	<h1 class="tracking-wider text-4xl lg:text-5xl font-sans">
					VICTOR GLOVER
				</h1>
           	 	<p class="text-neutral-300 w-full lg:max-w-lg">
					Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. 
            	</p>
            </div>
	    </div>

		<div className=" h-1/2 lg:h-1 lg:w-2/5 mx-auto -mt-6 lg:mx-0 lg:-mt-20">
		<div>
			<img className='flex justify-center items-baseline w-[267px] lg:w-[32.5rem] mx-auto lg:' src={Personimg} alt="Victor Glover" />
			</div>
		</div>

	</div>
  )
}

export default Victor