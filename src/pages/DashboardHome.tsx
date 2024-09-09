// import Images from "../assets/images/Image";

const DashboardHome = ({ today }: { today: string }) => {


  const data = [
    { title: "Project 1", author: ["Hakeem", "Yusuf"], dateCreated: today, status: "Completed" },
    { title: "Article 1", author: ["Yusuf"], dateCreated: today, status: "Completed" },
    { title: "Project 2", author: ["Hakeem"], dateCreated: today, status: "Pending" },
  ]
  return (
    <>
      <div className="bg-[#ffffff11] backdrop-filter rounded-2xl px-[5%] py-4 md:py-8">
        <div className=" flex items-center justify-between">
          <h3 className="font-ubuntu text-3xl lg:text-4xl font-bold dark: text-slate-200 light:text-slate-800">Dashboard</h3>
          <span className="flex gap-1 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            {today}
          </span>
        </div>
        <hr className=" border-slate-700 mb-4" />
        <div>
          <div className=" flex items-center justify-between">
            <h4 className="font-ubuntu text-2xl lg:text-3xl dark: text-slate-200 light:text-slate-800">Your workflow stats:</h4>
            <button type='button' className=' font-ubuntu my-4 bg-violet-500 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-1 inline">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
              </svg>
              Create project
            </button>
          </div>
          <div className=" flex items-center gap-4 md:gap-6 m- md:m-4 ">
            <div className="tag p-1">Total <span className="text-xs inline-flex align-middle items-center justify-center size-4 bg-slate-700 rounded-full">0</span></div>
            <div className="tag p-1">Article <span className="text-xs inline-flex align-middle items-center justify-center size-4 bg-slate-700 rounded-full">0</span></div>
            <div className="tag p-1">Code <span className="text-xs inline-flex align-middle items-center justify-center size-4 bg-slate-700 rounded-full">0</span></div>
            <div className="tag p-1">Text <span className="text-xs inline-flex align-middle items-center justify-center size-4 bg-slate-700 rounded-full">0</span></div>
            <div className="tag p-1">To-do <span className="text-xs inline-flex align-middle items-center justify-center size-4 bg-slate-700 rounded-full">0</span></div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff11] content backdrop-filter rounded-2xl px-[5%] py-4 md:py-8 mt-1">
        <form className="text-left flex items-center justify-between">
          <div className="relative w-3/4 md:w-4/5">
            <svg className="absolute w-5 h-5 top-2 left-2 text-violet-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              className=" block w-full p-2 pl-8 border border-gray-600 rounded-xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 bg-transparent "
              placeholder="Search projects"
              id="email"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <span className=" text-sm flex items-center gap-1 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="">Recent</span>
            </span>
            <span className=" p-1 md:p-2 bg-slate-700 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 inline">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
              </svg>

            </span>
          </div>
        </form>

        {/* <div className=" text-center mt-16">
          <img className=" size-[25%] mx-auto" src={Images.notfound} alt="not found svg" />
          <p className=" text-slate-500">No item matches your search.</p>
        </div> */}
        <div>
          <table className="w-full mt-16 text-center table-fixed ">
            <thead>
              <tr className="bg-slate-700">
                <th>Name</th>
                <th>Author</th>
                <th>Date Created</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, key) => {
                return (
                  <tr key={key} className={key % 2 === 0 ? "" : 'bg-slate-700'}>
                    <td>{val.title}</td>
                    <td>{val.author}</td>
                    <td>{val.dateCreated}</td>
                    <td>{val.status}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default DashboardHome;