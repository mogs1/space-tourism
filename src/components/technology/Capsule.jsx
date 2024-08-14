import CapsuleLandscapeimg from '../../assets/technology/image-space-capsule-landscape.jpg'
import CapsulePortraitimg from '../../assets/technology/image-space-capsule-portrait.jpg'

function Capsule() {

  return (
	<div className='absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center  space-y-24 pt-24 lg:flex-row-reverse lg:space-y-0 lg:justify-start'>
		<div className="lg:w-1/2 flex justify-end">
			<img className='w-full items-stretch lg:hidden' src={CapsuleLandscapeimg} alt="Launch-vehicle" />
			<img className='hidden lg:flex' src={CapsulePortraitimg} alt="launch-portrait" />
		</div>

		<div className="flex flex-col justify-center items-center text-center lg:text-left max-w-md lg:w-1/2 lg:space-y-3 lg:pl-10 lg:max-w-xl lg:justify-start">
			<h2 className='text-xs tracking-widest text-slate-300 uppercase lg:text-base w-full'>
			the terminology...
			</h2>
			<h1 className="text-3xl text-white font-sans uppercase lg:text-5xl w-full">
			Space Capsule
			</h1>
			<p className="text-slate-300 pt-5 lg:text-base">
			A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
			</p>
		</div>
	</div>
  )
}

export default Capsule