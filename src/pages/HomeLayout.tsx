import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="dark: relative light:absolute light:top-0 light:-z-10 h-full w-full dark: bg-slate-950 light:bg-white">
      <div className="dark: absolute bottom-0 left-[-15%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.2),rgba(255,255,255,0))]"></div>
      <div className="dark: absolute bottom-0 right-[5%] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.2),rgba(255,255,255,0))]"></div>
      {/* <div className="light: hidden absolute bottom-auto left-[-5%] right-auto top-[-20%] h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      <div className="light: hidden absolute bottom-auto left-auto right-[-5%] top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div> */}
      <nav className='flex justify-between items-center py-4 px-[5vw] dark: text-slate-300 light:text-slate-700 '>
        <a href="/" className=" flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 md:size-8 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
          </svg>
          <p className='logo text-lg md:text-xl font-bold font-mono'>Track-space</p>
        </a>
        <div className="md:hidden">
          <svg className="cursor-pointer w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <div className='hidden md:flex items-center gap-8'>
          <a className="hover:text-violet-300" href='/home'> Home </a>
          <a className="hover:text-violet-300" href='/#product'>Product </a>
          <a className="hover:text-violet-300" href='/blog'> Blog </a>
          <a className="hover:text-violet-300" href='/contact'> Contact </a>
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
              <a href="/" className=" flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 md:size-8 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                </svg>
                <p className='logo text-lg md:text-xl font-bold font-mono'>Track-space</p>
              </a>
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
                <a className="hover:text-violet-300" href='/home'> Home </a>
                <a className="hover:text-violet-300" href='/#product'>Product </a>
                <a className="hover:text-violet-300" href='/blog'> Blog </a>
                <a className="hover:text-violet-300" href='#contact'> Contact </a>
              </div>
              <div className="flex flex-col gap-4">
                <a className="hover:text-violet-300" href='/#'> Clients </a>
                <a className="hover:text-violet-300" href='/#'>Team </a>
                <a className="hover:text-violet-300" href='/#'> Testimonials</a>
                <a className="hover:text-violet-300" href='/#'> Career </a>
                <a className="hover:text-violet-300" href='/#'> Partners </a>
              </div>
              <div className="flex flex-col gap-4">
                <a className="hover:text-violet-300" href='/#'> Privacy Policy </a>
                <a className="hover:text-violet-300" href='/#'>Terms and conditions</a>
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