

const Chat = ({ today }: { today: string }) => {
  return (
    <>
      <div className="bg-[#ffffff11] backdrop-filter rounded-2xl px-[5%] py-4 md:py-8">
        <div className=" flex items-center justify-between">
          <h3 className="font-ubuntu text-3xl lg:text-4xl font-bold dark: text-slate-200 light:text-slate-800">Chats</h3>
          <span className="flex gap-1 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            {today}
          </span>
        </div>
        <hr className=" border-slate-700 mb-4" />
        <div>
          <h4 className="font-ubuntu text-2xl lg:text-3xl dark: text-slate-200 light:text-slate-800">Connect on collabrations</h4>
          <p className="my-4">Reach out and communication with other professionals all around the globe</p>

        </div>
      </div>
      <div className="bg-[#ffffff11] content backdrop-filter rounded-2xl px-[5%] py-4 md:py-8 my-1">
        <div className=" flex items-center justify-between gap-4 md:gap-8 m-4">
          <input
            className=" block w-3/4 p-2 border border-gray-600 rounded-xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 bg-transparent "
            placeholder="Enter project title"
            id=""
            name=""
            type="text"
            required
          />
          <div className="flex justify-between items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span className=" text-sm">Account Name</span>
          </div>

        </div>
        <textarea className=" w-full p-2  m-4 border border-gray-600 rounded-xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 bg-transparent " rows={8} />
        <hr className=" border-slate-700 mb-4" />
        <div>
          {[1, 2, 3].map((_, key) => {
            const evenOrOdd = key % 2 === 0
            return (
              <div key={key} className={`my-2 ${evenOrOdd && 'text-right'}`}>
                <p className="text-sm my-1">{evenOrOdd ? 'hey' : 'Hello'}</p>
                <div className={`flex items-center justify-start ${evenOrOdd && 'justify-end'}`}>
                  <p className="text-slate-400 dark:text-slate-500 text-xs mr-4">{evenOrOdd ? 'Hakeem' : 'Yusuf'}</p>
                  <p className="text-slate-400 dark:text-slate-500 text-xs">{today}</p>
                </div>
              </div>
            )
          })}

        </div>
        <div className=" flex items-center justify-between mx-[5%] my-4">
          <button type='button' className=' font-ubuntu bg-transparent border border-violet-400 hover:text-slate-200 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-sm text-violet-400'> Back </button>
          <button type='button' className=' font-ubuntu bg-violet-500 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-sm text-slate-200'> Submit </button>
        </div>
      </div>
    </>
  )
}

export default Chat;