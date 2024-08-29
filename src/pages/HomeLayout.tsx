import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const Layout = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <div className="dark: relative light:absolute light:top-0 light:-z-10 h-full w-full dark: bg-slate-950 light:bg-white">
      <div className="dark: absolute bottom-0 left-[-15%] right-0 top-[-10%] h-[500px] w-[500px] max-md:size-[80vh] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.2),rgba(255,255,255,0))]"></div>
      <div className="dark: absolute bottom-0 right-[5%] top-[10%] h-[500px] w-[500px] max-md:size-[80vh] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.2),rgba(255,255,255,0))]"></div>
      {/* <div className="light: hidden absolute bottom-auto left-[-5%] right-auto top-[-20%] h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      <div className="light: hidden absolute bottom-auto left-auto right-[-5%] top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div> */}
      <nav className='flex justify-between items-center py-4 px-[5vw] dark: text-slate-300 light:text-slate-700 '>
        <Link to="/" className=" flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 md:size-8 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
          </svg>
          <p className='logo text-lg md:text-xl font-bold font-mono'>Track-space</p>
        </Link>
        <div className="md:hidden">
          {isDropdown &&
            <div className=" fixed flex justify-end top-0 right-0 z-[1000] h-screen w-screen" >
              <div className="relative w-3/5 h-full bg-[#000000ff] backdrop-filter">
                <div className=" flex justify-end py-4 px-[5vw]">
                  <svg onClick={() => setIsDropdown(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-6 md:size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className='py-[5vh] max-[320px]:py-0 px-[5vw] w-full'>
                  <Link onClick={() => setIsDropdown(false)} to='/'>
                    <div className="flex items-center gap-8 my-8 max-[320px]:my-4 hover:text-violet-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-[320px]:size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                      <p className='font-light max-[320px]:text-sm'>home</p>
                    </div>
                  </Link>
                  <a onClick={() => setIsDropdown(false)} href='/#product'>
                    <div className="flex items-center gap-8 my-8 max-[320px]:my-4 hover:text-violet-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-[320px]:size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                      </svg>
                      <p className='font-light max-[320px]:text-sm'>product</p>
                    </div>
                  </a>
                  <Link onClick={() => setIsDropdown(false)} to='/blog'>
                    <div className="flex items-center gap-8 my-8 max-[320px]:my-4 hover:text-violet-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-[320px]:size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                      </svg>
                      <p className='font-light max-[320px]:text-sm'>blog</p>
                    </div>
                  </Link>
                  <Link onClick={() => setIsDropdown(false)} to='/contact'>
                    <div className="flex items-center gap-8 my-8 max-[320px]:my-4 hover:text-violet-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-[320px]:size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                      <p className='font-light max-[320px]:text-sm'>contact</p>
                    </div>
                  </Link>
                </div>
                <div className=' absolute bottom-[5vh] w-full'>
                  <div className='flex flex-col justify-center items-center gap-4' >
                    <button type='button' className=' font-ubuntu bg-transparent border border-violet-400 hover:text-slate-200 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-sm text-violet-400'> Login </button>
                    <button type='button' className=' font-ubuntu bg-violet-500 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-sm text-slate-200'> Sign up </button>
                  </div>
                  <p className="font-ubuntu text-center text-xs text-slate-500 font-light my-4">© 2024 Track-space Inc.</p>
                </div>
              </div>
            </div>
          }
          <svg onClick={() => {
            console.log(isDropdown);
            setIsDropdown(!isDropdown);
          }} className="cursor-pointer size-6 md:size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <div className='hidden md:flex items-center gap-8'>
          <Link className="hover:text-violet-300" to='/'> Home </Link>
          <Link className="hover:text-violet-300" to='/#product'>Product </Link>
          <Link className="hover:text-violet-300" to='/blog'> Blog </Link>
          <Link className="hover:text-violet-300" to='/contact'> Contact </Link>
        </div>
        <div className='hidden md:flex items-center gap-4'>
          <button type='button' className=' font-ubuntu bg-transparent border border-violet-400 hover:text-slate-200 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-sm text-violet-400'> Login </button>
          <button type='button' className=' font-ubuntu bg-violet-500 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-sm text-slate-200'> Sign up </button>
        </div>
      </nav>
      <main className=' max-w-screen-2xl mx-auto '>
        <Outlet />
      </main>
      <footer className="border-t border-slate-800">
        <div className=" px-[5vw]">
          <nav className=" min-h-[40vh] flex max-md:flex-col max-md:gap-8 justify-between py-8 dark: text-slate-200 light:text-slate-800">
            <div>
              <Link to="/" className=" flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 md:size-8 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                </svg>
                <p className='logo text-lg md:text-xl font-bold font-mono'>Track-space</p>
              </Link>
              <div className="flex items-center gap-2 my-2 mx-1">
                <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 20 20" className="fill-current hover:text-violet-300" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1.667A8.333 8.333 0 0 0 1.667 10c0 3.683 2.391 6.808 5.7 7.917.416.066.55-.192.55-.417v-1.408c-2.309.5-2.8-1.117-2.8-1.117-.384-.967-.925-1.225-.925-1.225-.759-.517.058-.5.058-.5.833.058 1.275.858 1.275.858.725 1.267 1.95.892 2.425.692.075-.542.292-.908.525-1.117-1.85-.208-3.792-.925-3.792-4.1 0-.925.317-1.666.859-2.258-.084-.208-.375-1.075.083-2.2 0 0 .7-.225 2.292.85A7.851 7.851 0 0 1 10 5.7c.708 0 1.425.092 2.083.275 1.592-1.075 2.292-.85 2.292-.85.458 1.125.167 1.992.083 2.2.542.592.859 1.333.859 2.258 0 3.184-1.95 3.884-3.809 4.092.3.258.575.767.575 1.542V17.5c0 .225.134.492.559.417C15.95 16.8 18.333 13.683 18.333 10A8.333 8.333 0 0 0 10 1.667Z"></path>
                </svg>
                <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="fill-current  hover:text-violet-300">
                  <path d="M15.0902 2H17.8044L11.8746 8.77744L18.8506 18H13.3884L9.11027 12.4066L4.21509 18H1.4992L7.84176 10.7508L1.14966 2H6.75048L10.6176 7.11262L15.0902 2ZM14.1376 16.3754H15.6416L5.93325 3.53928H4.3193L14.1376 16.3754Z" fill="currentFill"></path>
                </svg>
                <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="fill-current hover:text-violet-300">
                  <path d="M15.8333 2.5C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333ZM15.4167 15.4167V11C15.4167 10.2795 15.1304 9.5885 14.621 9.07903C14.1115 8.56955 13.4205 8.28333 12.7 8.28333C11.9917 8.28333 11.1667 8.71667 10.7667 9.36667V8.44167H8.44167V15.4167H10.7667V11.3083C10.7667 10.6667 11.2833 10.1417 11.925 10.1417C12.2344 10.1417 12.5312 10.2646 12.75 10.4834C12.9688 10.7022 13.0917 10.9989 13.0917 11.3083V15.4167H15.4167ZM5.73333 7.13333C6.10464 7.13333 6.46073 6.98583 6.72328 6.72328C6.98583 6.46073 7.13333 6.10464 7.13333 5.73333C7.13333 4.95833 6.50833 4.325 5.73333 4.325C5.35982 4.325 5.0016 4.47338 4.73749 4.73749C4.47338 5.0016 4.325 5.35982 4.325 5.73333C4.325 6.50833 4.95833 7.13333 5.73333 7.13333V7.13333ZM6.89167 15.4167V8.44167H4.58333V15.4167H6.89167V15.4167Z"></path>
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-[5%]">
              <div className="flex flex-col gap-4">
                <Link className="hover:text-violet-300" to='/'> Home </Link>
                <Link className="hover:text-violet-300" to='/#product'>Product </Link>
                <Link className="hover:text-violet-300" to='/blog'> Blog </Link>
                <Link className="hover:text-violet-300" to='/contact'> Contact </Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link className="hover:text-violet-300" to='/#'> Clients </Link>
                <Link className="hover:text-violet-300" to='/#'>Team </Link>
                <Link className="hover:text-violet-300" to='/#'> Testimonials</Link>
                <Link className="hover:text-violet-300" to='/#'> Career </Link>
                <Link className="hover:text-violet-300" to='/#'> Partners </Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link className="hover:text-violet-300" to='/#'> Privacy Policy </Link>
                <Link className="hover:text-violet-300" to='/#'>Terms and conditions</Link>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end">
              <button type='button' className=' font-ubuntu bg-transparent border border-violet-400 hover:text-slate-200 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-sm text-violet-400'> Contact us </button>
              <p className="font-ubuntu text-xs text-slate-500 font-light my-2">© 2024 Track-space Inc.</p>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Layout;