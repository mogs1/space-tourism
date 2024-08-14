import { motion } from 'framer-motion'
import Europaimg from '../../assets/destination/image-moon.png'

function Europa() {
  return (
	<div className="flex flex-col h-screen absolute top-0 left-0 bottom-0 right-0 pt-32 sm:pt-44 lg:flex-row lg:pt-56 mx-auto lg:mx-0">
		<div className=" h-1/2 lg:h-1 lg:w-3/5 mx-auto lg:mx-0 lg:">
		<div>
			<motion.img
			animate={{rotate: 360}}
			transition={{duration: 20, repeat: Infinity, repeatDelay: 0, ease: "linear"}}
			className='flex justify-center w-56 lg:w-[420px] mx-auto lg:' src={Europaimg} alt="Moon" />
			</div>
		</div>

		<div className="-mt-6 sm:-mt-3 md:w-2/5 h-1/2 lg:h-1 mx-auto max-w-lg lg:max-w-md lg:pt-14  lg:mx-px">
		<div id="content-1" class="space-y-5 text-white text-center lg:space-y-11 lg:text-left">
            <h1 class="tracking-wider text-7xl lg:text-8xl font-sans">
				EUROPA
			</h1>
            <p class="text-gray-300 w-full max-w-sm sm:max-w-md lg:max-w-lg">
			The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
            </p>
            <div class="pt-5 border-t-2 border-white uppercase flex flex-col space-y-5 text-gray-300 justify-center sm:flex-row sm:space-y-0 sm:space-x-14 lg:justify-start">
                <div class="space-y-2">
					<label for="">
						avg. distance
					</label>
					<p class="text-xl">
						628 mil. km
					</p>
				</div>
                <div class="space-y-2">
					<label for="">
						est. travel time
					</label>
					<p class="text-xl">
						3 years
					</p></div>
                </div>
            </div>
	 </div>

	</div>
  )
}

export default Europa