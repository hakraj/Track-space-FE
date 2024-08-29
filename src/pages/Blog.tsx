import { useNavigate } from "react-router-dom";
import Images from "../assets/images/Image";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* INTRO */}
      <div className=" mt-[10vh] mb-[15vh] md:mt-[15vh] md:mb-[20vh]">
        <div className="mx-auto md:grid grid-cols-2 my-[10vh] gap-[2.5%] w-3/4 md:w-[85%] lg:w-2/3 bg-[#ffffff11] backdrop-filter rounded-[1.5rem] md:rounded-[2.5rem] shadow-md shadow-violet-300/50">
          <div className="px-4 py-8 md:p-8 ">
            <p className="border-l-2 border-violet-500 pl-2 text-xs md:text-sm font-medium text-violet-300">First</p>
            <h3 className="font-ubuntu text-3xl lg:text-4xl font-bold dark: text-slate-200 light:text-slate-800 my-4">Project management</h3>
            <div className="flex items-center gap-4 my-4 text-slate-500">
              <div className=" rounded-full h-8 w-8 bg-gradient-to-tr from-slate-200 to-slate-500"></div>
              <div>
                <p className=" text-xs  font-medium">John Doe</p>
                <p className=" text-xs">Executive</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm my-4 lg:pr-8">
              Trackspace offers dedicated storage space to maintain and easily access all project files, ensuring smooth continuity.
              It equips users with the knowledge, tools, and techniques needed to plan, execute, document, and track project progress effectively.
              This comprehensive approach ensures that every phase of your project is managed with precision, driving successful outcomes.
            </p>
            <button onClick={() => navigate('/blog/first')} className=' font-ubuntu mt-4 bg-violet-500 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 max-md:text-sm text-white' >
              <span className='mr-1'>Read more</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block relative bottom-[1px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>

          </div>
          <div>
            <img className="h-full w-auto max-md:rounded-[1.5rem] rounded-r-[2.5rem]" src={Images.firstblog} alt="" />
          </div>
        </div>
      </div>

      {/* Category */}
      <div className="px-[5vw]">
        <div className="flex items-center justify-center gap-4 md:gap-8 text-slate-500">
          <span className="font-ubuntu max-md:text-sm text-violet-500 active">All</span>
          <span className="font-ubuntu max-md:text-sm">First</span>
          <span className="font-ubuntu max-md:text-sm">Second</span>
        </div>

        <div className="px-[5vw] mb-[20vh] md:mb-[25vh]">
          {[1, 2, 3,].map((_, i) => {
            return (
              <div key={i} className="flex max-md:flex-col gap-x-[20%] my-[10vh] md:my-[5vh]">
                <div className="md:w-3/5">
                  <p className=" border-l-2 border-violet-500 pl-2 text-xs md:text-sm font-medium text-violet-300">First</p>
                  <h1 className="font-ubuntu text-2xl md:text-3xl font-bold my-4 dark: text-slate-200 light:text-slate-800">Lorem ipsum dolor sit amet</h1>
                  <p className=" text-slate-300 max-md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus non felis nec quam euismod rutrum vel at urna.
                    Fusce et enim vel felis efficitur interdum.
                    Cras vulputate metus imperdiet felis mollis,
                    sit amet mollis dolor eleifend.
                  </p>
                  <button onClick={() => navigate('/blog/first')} className=' font-ubuntu my-4 text-violet-500  hover:text-violet-400 py-2 px-2 max-md:text-sm ' >
                    <span className='mr-1'>Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block relative bottom-[1px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
                <div className="justify-self-end text-right text-slate-500">
                  <p className="border-r-2 md:border-r-0 md:border-l-2 border-sky-300 px-2 text-sm font-medium text-gray-500">December 1, 1960</p>
                  <div className="flex justify-end md:justify-start items-center gap-4 mt-8">
                    <div className=" rounded-full h-10 w-10 bg-gradient-to-tr from-slate-200 to-slate-500"></div>
                    <div>
                      <p className=" text-sm font-medium">John Doe</p>
                      <p className=" text-sm">Executive</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>

    </>
  )
}

export default Blog;