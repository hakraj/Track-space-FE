

const Reset = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen max-w-xs md:max-w-md mx-auto">
        <div className="w-full text-center mt-[10vh] mb-[20vh]  bg-[#ffffff11] backdrop-filter md:rounded-[2.5rem] shadow-md shadow-violet-300/50 rounded-2xl p-6 md:p-8 drop-shadow-lg">
          <div className=" flex items-center justify-center dark: text-slate-300 light:text-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-violet-500 size-6 md:size-8 mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>
            <p className='logo text-lg md:text-xl font-bold font-mono'>Track-space</p>
          </div>
          <h1 className="text-3xl lg:text-4xl font-ubuntu font-bold my-6 text-slate-200 light:text-slate-800">
            Reset Your Password
          </h1>
          <form className="text-left">
            <div>
              <label htmlFor="firstname">
                <span className=" font-normal text-sm text-violet-300">Email</span>
                <input
                  className="mb-3 mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-white"
                  placeholder="Enter your email"
                  id="email"
                />
              </label>
              <label htmlFor="firstname">
                <span className=" font-normal text-sm text-violet-300">New password</span>
                <input
                  className="mb-3 mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-white"
                  placeholder="Enter your password"
                  id="password"
                />
              </label>
              <label htmlFor="cpassword">
                <span className=" font-normal text-sm text-violet-300">Confirm password</span>
                <input
                  className="mb-3 mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-white"
                  placeholder="Enter your password"
                  id="cpassword"
                />
              </label>

            </div>
            <button
              type="submit"
              className=" font-ubuntu w-full my-4 bg-violet-500 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-lg text-white"
            >
              Reset password
            </button>
          </form>
        </div>
      </div>


    </>
  )
}

export default Reset;