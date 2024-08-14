import SpaceportLandscapeimg from '../../Space-Tourism/assets/technology/image-spaceport-landscape.jpg'
import SpaceportPortraitimg from '../../Space-Tourism/assets/technology/image-spaceport-portrait.jpg'

function Spaceport() {

  return (
	<div className='absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center  space-y-24 pt-24 lg:flex-row-reverse lg:space-y-0 lg:justify-start'>
		<div className="lg:w-1/2 flex justify-end">
			<img className='w-full items-stretch lg:hidden' src={SpaceportLandscapeimg} alt="Launch-vehicle" />
			<img className='hidden lg:flex' src={SpaceportPortraitimg} alt="launch-portrait" />
		</div>

		<div className="flex flex-col justify-center items-center text-center lg:text-left max-w-md lg:w-1/2 lg:space-y-3 lg:pl-10 lg:max-w-xl lg:justify-start">
			<h2 className='text-xs tracking-widest text-slate-300 uppercase lg:text-base w-full'>
			the terminology...
			</h2>
			<h1 className="text-3xl text-white font-sans uppercase lg:text-5xl w-full">
			Spaceport
			</h1>
			<p className="text-slate-300 pt-5 lg:text-base">
			A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
			</p>
		</div>
	</div>
  )
}

export default Spaceport