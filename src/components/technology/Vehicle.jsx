import VehicleLandscapeimg from '../../Space-Tourism/assets/technology/image-launch-vehicle-landscape.jpg'
import VehiclePortraitimg from '../../Space-Tourism/assets/technology/image-launch-vehicle-portrait.jpg'

function Vehicle() {

  return (
	<div className='absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center space-y-24 pt-24 lg:flex-row-reverse lg:space-y-0 lg:justify-start'>
		<div className="lg:w-1/2 flex justify-end">
			<img className='w-full items-stretch lg:hidden' src={VehicleLandscapeimg} alt="Launch-vehicle" />
			<img className='hidden lg:flex' src={VehiclePortraitimg} alt="launch-portrait" />
		</div>

		<div className="flex flex-col justify-center items-center text-center lg:text-left max-w-md lg:w-1/2 lg:space-y-3 lg:pl-10 lg:max-w-xl lg:justify-start">
			<h2 className='text-xs tracking-widest text-slate-300 uppercase lg:text-base w-full'>
			the terminology...
			</h2>
			<h1 className="text-3xl text-white font-sans uppercase lg:text-5xl w-full">
			Launch Vehicle
			</h1>
			<p className="text-slate-300 pt-5 lg:text-base">
			A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
			</p>
		</div>
	</div>
  )
}

export default Vehicle