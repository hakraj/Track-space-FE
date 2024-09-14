

const Todo = ({ today }: { today: string }) => {
  return (
    <>
      <div className="bg-[#ffffff11] backdrop-filter rounded-2xl px-[5%] py-4 md:py-8">
        <div className=" flex items-center justify-between">
          <h3 className="font-ubuntu text-3xl lg:text-4xl font-bold dark: text-slate-200 light:text-slate-800">To-do lists</h3>
          <span className="flex gap-1 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            {today}
          </span>
        </div>
        <hr className=" border-slate-700 mb-4" />
        <div>
          <p>Set your future planned schedule for easy workflow</p>
        </div>
      </div>
      <div className="bg-[#ffffff11] content backdrop-filter rounded-2xl px-[5%] py-4 md:py-8 my-1 grid grid-cols-3 gap-8">
        {[1, 2, 3].map((_, key) => {
          return (
            <div key={key} className="bg-slate-700 p-4 md:p-8 rounded-xl text-center  relative">
              <div>
                <h4 className="font-ubuntu text-2xl lg:text-3xl dark: text-slate-200 light:text-slate-800">Work</h4>
              </div>
              <div className="mt-4 md:mt-8">
                <form>
                  {[1, 2, 3].map((_, key) => {
                    return (
                      <div key={key} className=" flex items-center justify-between my-4">
                        <input type="checkbox" name="" id="" />
                        <p className="m-1 md:text-lg text-left w-full ml-4 md:ml-8">Just do it!</p>
                        <input type="hidden" name="title" value="" />
                        <button
                          // onClick={(e) => {
                          //   e.preventDefault();
                          //   deleteTask(task?.id);
                          // }}
                          className="delete-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svg text-red-500 size-5 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </button>
                      </div>
                    )
                  })}
                  <div className=" absolute bottom-4 left-4 md:left-8">
                    <input
                      className=" text-center border-0 bg-transparent md:text-lg m-2 md:m-4 focus:outline-0 focus:border-b-2 focus:border-b-violet-400"
                      required
                      type="text"
                      // value={newTask}
                      // onChange={(e) => { setNewTask(e.target.value) }}
                      placeholder="add new item"
                      autoComplete="off" />
                    <button className="font-ubuntu size-8 inline-flex items-center justify-center rounded-full bg-violet-500 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 p-4 text-white max-md:text-sm" type="submit">+</button>
                  </div>

                </form>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Todo;