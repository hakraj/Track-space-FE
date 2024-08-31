import { Outlet } from "react-router-dom"


const Auth = () => {
  return (
    <div className="dark: relative light:absolute light:top-0 light:-z-10 h-full w-full dark: bg-slate-950 light:bg-white">
      <div className="dark: absolute bottom-0 left-[-15%] max-md:left-[10%] max-md:top-[5%] right-auto top-[-10%] h-[500px] w-[500px] max-md:size-[80vw] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.2),rgba(255,255,255,0))]"></div>
      <div className="dark: absolute bottom-0 left-auto right-[5%] top-[10%] h-[500px] w-[500px] max-md:size-[80vw] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.2),rgba(255,255,255,0))]"></div>
      {/* <div className="light: hidden absolute bottom-auto left-[-5%] right-auto top-[-20%] h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      <div className="light: hidden absolute bottom-auto left-auto right-[-5%] top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div> */}
      <main className=' max-w-screen-2xl mx-auto relative z-10'>
        <Outlet />
      </main>
    </div>
  )
}

export default Auth;