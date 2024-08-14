import Personimg from '../../assets/crew/image-douglas-hurley.png'

function Douglas() {
  return (
	<div className="flex flex-col absolute top-0 left-0 bottom-0 right-0 pt-44 lg:flex-row lg:pt-56 mx-auto lg:mx-0">

		<div className=" md:w-3/5 h-1/2 lg:h-1 mx-auto max-w-lg lg:max-w-full lg:pt-14">

			<div id="content-1" class=" space-y-5 text-white text-center lg:space-y-8 lg:text-left lg:pl-20 ">
				<span className='text-zinc-500 uppercase text-3xl font-sans'>
					commander
				</span>
            	<h1 class="tracking-wider text-4xl lg:text-5xl font-sans">
					DOUGLAS HURLEY
				</h1>
           	 	<p class="text-neutral-300 w-full lg:max-w-lg">
					Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
            	</p>
            </div>
	    </div>

		<div className=" h-1/2 lg:h-1 lg:w-2/5 mx-auto -mt-4 lg:mx-0 lg:-mt-20">
		<div>
			<img className='flex justify-center items-baseline w-56 lg:w-[439px] mx-auto' src={Personimg} alt="Douglas Hurley" />
			</div>
		</div>

	</div>
  )
}

export default Douglas