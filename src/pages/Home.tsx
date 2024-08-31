import { useNavigate } from "react-router-dom";
import Images from "../assets/images/Image";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* INTRO */}
      <div className=' text-center pt-[10vh] pb-[15vh] md:pt-[15vh] md:pb-[20vh] px-[5vw]'>
        <h1 className=' font-ubuntu text-5xl md:text-6xl font-bold dark: text-slate-200 light:text-slate-800'>Home for all techies</h1>
        <p className=' md:text-xl md:px-[30%] font-normal my-4 text-slate-500'>Revolutionizing workspace for developer, team, project manager and other professionals and clients </p>
        <button onClick={() => navigate('/auth/signup')} type='button' className=' font-ubuntu my-4 bg-violet-500 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-white'> Get started </button>
        <p className='font-ubuntu text-sm dark: text-slate-300 light:text-slate-700 font-light'>Already have an account? <span className='dark: text-sky-200 light:text-sky-500 hover:underline cursor-pointer'><a href='/login'>Login</a></span></p>

        <div className='w-4/5 lg:w-3/5 mt-[7.5vw] mx-auto p-2 bg-[#ffffff11] backdrop-filter rounded-2xl shadow-md shadow-violet-300/50'>
          <img className='w-full h-auto rounded-2xl' src={Images.project} alt='Track user dashboard on desktop view' />
        </div>
      </div>

      {/* Partners */}
      <div className="flex gap-4 md:gap-8 px-[5vw] justify-center">
        <div>
          <img alt="" className="size-8 grayscale" src={Images.github} srcSet="" />
        </div>
        <div>
          <img alt="" className="size-8 grayscale" src={Images.google} srcSet="" />
        </div>
        <div>
          <img alt="" className="size-8 grayscale" src={Images.amazon} srcSet="" />
        </div>
        <div>
          <img alt="" className="size-8 grayscale" src={Images.spotify} srcSet="" />
        </div>
        <div>
          <img alt="" className="size-8 grayscale" src={Images.dropbox} srcSet="" />
        </div>
      </div>

      {/* ABOUT */}
      <div className="md:flex items-center justify-between px-[5vw] my-[10vh] md:my-[15vh]">
        <div className="md:w-3/5 lg:w-1/2 max-md:text-center md:p-4">
          <h3 className="font-ubuntu text-3xl lg:text-4xl font-bold dark: text-slate-200 light:text-slate-800">Streamlined collaboration, <br />secure management</h3>
          <p className="text-slate-300 my-4 lg:pr-8">
            Get your team a well-developed ecosystem for executing different projects and proper management.
            Keep track of changes in previous projects, have a secured interactive space to share ideas among your team and
            contribute swiftly and efficiently to the growth of your team.
          </p>
        </div>
        <div className=" mx-auto md:ml-auto max-md:my-4 w-fit rounded-full p-2 bg-[#ffffff11] backdrop-filter shadow-md shadow-violet-300/50">
          <img className="rounded-full size-[256px] lg:size-[400px]" src={Images.product} alt="" />
        </div>
      </div>

      {/* Features */}
      <div id="product" className="my-[10vh] max-md:text-center md:my-[15vh]">
        <h1 className=' font-ubuntu text-center text-4xl md:text-5xl font-bold dark: text-slate-200 light:text-slate-800 mb-[8vh]'>Our services</h1>
        <div className="md:flex gap-[10%] my-[5vh] items-center justify-between bg-[#ffffff11] backdrop-filter rounded-[2.5rem]">
          <img className="w-full md:w-2/4 max-md:rounded-[2.5rem] rounded-l-[2.5rem]" src={Images.feature1} alt="" />
          <div className="md:mr-[5%] max-md:px-[5vw] max-md:py-8">
            <h3 className="font-ubuntu text-3xl lg:text-4xl font-bold dark: text-slate-200 light:text-slate-800">Project management</h3>
            <p className="text-slate-300 my-4 lg:pr-8">
              Trackspace offers dedicated storage space to maintain and easily access all project files, ensuring smooth continuity.
              It equips users with the knowledge, tools, and techniques needed to plan, execute, document, and track project progress effectively.
              This comprehensive approach ensures that every phase of your project is managed with precision, driving successful outcomes.
            </p>
          </div>
        </div>
        <div className="md:flex gap-[10%] my-[5vh] items-center justify-between bg-[#ffffff11] backdrop-filter rounded-[2.5rem]">
          <div className="md:ml-[5%] max-md:px-[5vw] max-md:py-8">
            <h3 className="font-ubuntu text-3xl lg:text-4xl font-bold dark: text-slate-200 light:text-slate-800">Team collaboration</h3>
            <p className="text-slate-300 my-4 lg:pr-8">
              Trackspace fosters interactive collaboration among team members, developers, and professionals.
              By emphasizing teamwork and collective innovation, it empowers individuals to contribute, share ideas, and achieve common goals efficiently.
              This collaborative environment enhances problem-solving and ensures every team member feels accomplished and engaged.
            </p>
          </div>
          <img className="w-full md:w-2/4 max-md:rounded-[2.5rem] rounded-r-[2.5rem]" src={Images.feature2} alt="" />
        </div>
        <div className="md:flex gap-[10%] my-[5vh] items-center justify-between bg-[#ffffff11] backdrop-filter rounded-[2.5rem]">
          <img className="w-full md:w-2/4 max-md:rounded-[2.5rem] rounded-l-[2.5rem]" src={Images.feature3} alt="" />
          <div className="md:mr-[5%] max-md:px-[5vw] max-md:py-8">
            <h3 className="font-ubuntu text-3xl lg:text-4xl font-bold dark: text-slate-200 light:text-slate-800">Work integration</h3>
            <p className="text-slate-300 my-4 lg:pr-8">
              Trackspace helps you achieve a better work-life balance by allowing you to schedule future plans, choose your most productive hours, and establish a routine.
              In today’s demanding world, this feature empowers you to manage your time effectively, enhancing both productivity and quality of life.
            </p>
          </div>
        </div>
        <div className="md:flex gap-[10%] my-[5vh] items-center justify-between bg-[#ffffff11] backdrop-filter rounded-[2.5rem]">
          <div className="md:ml-[5%] max-md:px-[5vw] max-md:py-8">
            <h3 className="font-ubuntu text-3xl lg:text-4xl font-bold dark: text-slate-200 light:text-slate-800">Client services</h3>
            <p className="text-slate-300 my-4 lg:pr-8">
              Trackspace ensures top-tier service for clients by providing seamless access to a dedicated team of professionals.
              By understanding key requirements and responsibilities, our platform delivers a superior client experience, tackling tasks with a technical and structured approach.
            </p>
          </div>
          <img className="w-full md:w-2/4 max-md:rounded-[2.5rem] rounded-r-[2.5rem]" src={Images.feature4} alt="" />
        </div>
      </div>

      {/* BLOG */}
      <div className="md:flex items-center justify-between px-[5vw] my-[20vh]">
        <div className="md:w-3/5 lg:w-1/2 max-md:text-center md:p-4">
          <h3 className="font-ubuntu text-3xl lg:text-4xl font-bold dark: text-slate-200 light:text-slate-800">Stay Informed with <br />Track-space's Insights</h3>
          <p className="text-slate-300 my-4 lg:pr-8">
            Stay ahead with Trackspace’s comprehensive insights, designed to keep you informed at every stage of your projects.
            Our platform offers real-time updates, detailed analytics, and actionable data, helping you make informed decisions and anticipate challenges.
          </p>
          <button onClick={() => navigate('/blog')} type='button' className=' font-ubuntu my-4 bg-violet-500 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-white'> Check our blog </button>

        </div>
        <div className="mx-auto ml-auto max-md:my-4 w-fit rounded-full p-2 bg-[#ffffff11] backdrop-filter shadow-md shadow-violet-300/50">
          <img className="rounded-full size-[256px] lg:size-[400px]" src={Images.blog} alt="" />
        </div>

      </div>

      {/* CTA */}
      <div className="relative mt-[20vh] md:mt-[25vh] py-[10vh] md:py-[15vh] flex flex-col items-center overflow-hidden text-center">
        <span className="pointer-events-none absolute top-0 block aspect-square w-[400%] rounded-full shadow-[0px_0px_16px_0px_rgba(196,181,253,0.40)_inset,0px_0px_80px_0px_rgba(196,181,253,0.60)_inset,0px_0px_160px_0px_rgba(196,181,253,0.20)_inset]"></span>
        <div className="py-8 px-[5vw]">
          <h1 className=' font-ubuntu text-4xl md:text-5xl font-bold dark: text-slate-200 light:text-slate-800'>Enhance your workflow <br />with trackspace today</h1>
          <button onClick={() => navigate('/auth/signup')} type='button' className=' font-ubuntu my-8 bg-violet-500 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-white'> Get started for free </button>
        </div>
      </div>
    </>
  )
}

export default Home;