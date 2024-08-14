import { motion } from "framer-motion"



function Home() {
  return (
    <div className='cover home h-screen' >
      <div className="flex flex-col pt-20 text-center z-20 sm:pt-28 md:pt-80 md:flex-row md:text-left">

        <div className="md:w-1/2  mx-auto max-w-md ">
          <h1 className="text-slate-300 tracking-widest uppercase sm:text-lg mb-3 text-base">so, you want to travel to</h1>
          <h1 className="uppercase text-5xl text-white sm:text-9xl">space</h1>

          <p className="text-slate-300 max-w-sm text-base mt-7">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>

        <motion.div 
        whileHover={{scale: 1.2}}
        transition={{ease: "linear"}}
         className="mx-auto mt-20">
          <div className="flex justify-center items-center w-48 h-48 bg-white text-inherit rounded-full hover:shadow hover:shadow-white">
            <p className="uppercase tracking-wider text-xl">explore</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home