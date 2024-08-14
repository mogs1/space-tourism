import Personimg from '../../Space-Tourism/assets/crew/image-mark-shuttleworth.png'

function Mark() {
  return (
	<div className="flex flex-col absolute top-0 left-0 bottom-0 right-0 pt-44 lg:flex-row lg:pt-56 mx-auto lg:mx-0">

		<div className=" md:w-3/5 h-1/2 lg:h-1 mx-auto max-w-lg lg:max-w-full lg:pt-14">

			<div id="content-1" class=" space-y-5 text-white text-center lg:space-y-8 lg:text-left lg:pl-20 ">
				<span className='text-zinc-500 uppercase text-3xl font-sans'>
					Mission Specialist
				</span>
            	<h1 class="tracking-wider text-4xl lg:text-5xl font-sans">
					MARK SHUTTLEWORTH
				</h1>
           	 	<p class="text-neutral-300 w-full lg:max-w-lg">
					Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
            	</p>
            </div>
	    </div>

		<div className=" h-1/2 lg:h-1 lg:w-2/5 mx-auto -mt-5 lg:mx-0 lg:-mt-20">
		<div>
			<img className='flex justify-center items-baseline w-52 lg:w-[414px] mx-auto lg:' src={Personimg} alt="Mark Shuttkeworth" />
			</div>
		</div>

	</div>
  )
}

export default Mark