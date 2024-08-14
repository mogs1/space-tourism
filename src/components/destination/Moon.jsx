import { motion } from 'framer-motion'
import Moonimg from '../../assets/destination/image-moon.png'
function Moon() {
  return (
	<div className="flex flex-col absolute top-0 left-0 right-0 bottom-0 pt-36 sm:pt-44 lg:flex-row lg:pt-56 mx-auto lg:mx-0">

		<div className="
		h-1/2 lg:h-min lg:w-3/5 mx-auto lg:mx-0 lg:">
		<div>
			<motion.img
			animate={{rotate: 360}}
			transition={{duration: 20, repeat: Infinity, repeatDelay: 0, ease: "linear"}}
			className='flex justify-center w-56 lg:w-[420px] mx-auto lg:' src={Moonimg} alt="Moon" />
			</div>
		</div>

		<div className=" md:w-2/5 h-1/2 lg:h-1 mx-auto max-w-lg lg:max-w-md lg:pt-14  lg:mx-px">
		<div id="content-1" class="space-y-5 text-white text-center lg:space-y-11 lg:text-left">
            <h1 class="tracking-wider text-7xl lg:text-8xl font-sans">
				MOON
			</h1>
            <p class="text-gray-300 w-full max-w-sm sm:max-w-md lg:max-w-lg">
             See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
        	 regain perspective and come back refreshed. While you’re there, take in some history 
             by visiting the Luna 2 and Apollo 11 landing sites.
            </p>
            <div class="pt-5 border-t-2 border-white uppercase flex flex-col space-y-5 text-gray-300  justify-center lg:justify-start sm:space-y-0 sm:flex-row sm:space-x-14">
                <div class="space-y-2">
					<label for="">
						avg. distance
					</label>
					<p class="text-xl">
						384,400 KM
					</p>
				</div>
                <div class="space-y-2">
					<label for="">
						est. travel time
					</label>
					<p class="text-xl">
						3 days
					</p></div>
                </div>
            </div>
	 </div>

	</div>
  )
}

export default Moon