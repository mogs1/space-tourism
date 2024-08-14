import Personimg from '../../Space-Tourism/assets/crew/image-anousheh-ansari.png'

function Anousheh() {
  return (
	<div className="flex flex-col absolute top-0 right-0 left-0 bottom-0 pt-44 lg:flex-row lg:pt-56 mx-auto lg:mx-0">

		<div className=" md:w-3/5 h-1/2 lg:h-1 mx-auto max-w-lg lg:max-w-full lg:pt-14">

			<div id="content-1" class=" space-y-5 text-white text-center lg:space-y-8 lg:text-left lg:pl-20 ">
				<span className='text-zinc-500 uppercase text-3xl font-sans'>
					Flight engineer
				</span>
            	<h1 class="tracking-wider text-4xl lg:text-5xl font-sans">
					ANOUSHEH ANSARI
				</h1>
           	 	<p class="text-neutral-300 w-full lg:max-w-lg">
					Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. 
            	</p>
            </div>
	    </div>

		<div className=" h-1/2 lg:h-1 lg:w-2/5 mx-auto -mt-6 lg:mx-0 lg:-mt-20">
		<div>
			<img className='flex justify-center items-baseline w-[300px] lg:w-[36.5rem] mx-auto lg:' src={Personimg} alt="Douglas Hurley" />
			</div>
		</div>

	</div>
  )
}

export default Anousheh