import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";


const Todo = ({ today }: { today: string }) => {
  const { user } = useContext(AuthContext)
  const [newTask, setNewTask] = useState({
    id: "",
    task: "",
    schedule_date: "",
    start_time: "",
    end_time: "",
    status: "pending"
  });
  const [todos, setTodos] = useState(Array.of({
    id: "",
    task: "",
    schedule_date: "",
    start_time: "",
    end_time: "",
    status: "pending"
  }))
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [minTime, setMinTime] = useState('');

  const handleTaskChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewTask({
      ...newTask, [e.target.name]: e.target.value,
    });
  }

  const handleTaskSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    if (newTask.id === "") {
      try {
        await axios.post(`https://track-space.onrender.com/auth/${user.userID}/todo/new`, JSON.stringify(newTask), {
          headers: {
            "Authorization": user.token
          }
        })
          .then(response => console.log(response));

      } catch (error) {
        console.error("An unepected error occured:", error)
      }
    } else {
      try {
        await axios.post(`https://track-space.onrender.com/auth/${user.userID}/todo/${newTask.id}/update`, JSON.stringify(newTask), {
          headers: {
            "Authorization": user.token
          }
        })
          .then(response => console.log(response));

      } catch (error) {
        console.error("An unepected error occured:", error)
      }
    }


    setNewTask({
      id: "",
      task: "",
      schedule_date: "",
      start_time: "",
      end_time: "",
      status: "pending"
    })
    setIsModalOpen(false)
  }

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`https://track-space.onrender.com/auth/${user.userID}/todo/${id}/delete`, {
        headers: {
          "Authorization": user.token
        }
      })
        .then(response => console.log(response));

    } catch (error) {
      console.error("An unepected error occured:", error)
    }
  }
  useEffect(() => {
    const now = new Date();
    const fhours = String(now.getHours()).padStart(2, '0');
    const fminutes = String(now.getMinutes()).padStart(2, '0');
    setMinTime(`${fhours}:${fminutes}`);

    async function getData() {
      try {
        await axios.get(`https://track-space.onrender.com/auth/${user.userID}/todo/all`, {
          headers: {
            "Authorization": user.token
          }
        }).then(response => {
          const data = response.data?.todos;
          const todos = data.map((todo: { [x: string]: any; }) => {
            return {
              id: todo["uuid"],
              task: todo["task"],
              schedule_date: todo["schedule_date"],
              start_time: todo["start_time"],
              end_time: todo["end_time"],
              status: todo["status"]
            }
          })


          console.log(todos);
          setTodos(todos)
        });

      } catch (error) {
        console.error("An unepected error occured:", error)
      }

    }

    getData()
  }, [isModalOpen, deleteTask])


  return (
    <>
      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay fixed top-0 left-0 h-full w-full flex items-center justify-center z-[1000] bg-black/90 ">
          <div className="text-center  bg-[#ffffff11] backdrop-filter md:rounded-[2.5rem] shadow-md shadow-violet-300/50 rounded-2xl p-6 md:p-8 drop-shadow-lg">
            <h1 className="text-xl lg:text-2xl font-ubuntu font-bold my-6 text-slate-200 light:text-slate-800">
              Add New Task
            </h1>
            <form className="text-left text-slate-700" onSubmit={handleTaskSubmit}>
              <div>
                <label htmlFor="">
                  <span className=" font-normal text-sm text-violet-300">Task</span>
                  <input
                    className="mb-3 mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 bg-white"
                    required
                    type="text"
                    name="task"
                    value={newTask.task}
                    onChange={handleTaskChange}
                    placeholder="Add new item"
                    autoComplete="off"
                  />
                </label>
                <label htmlFor="">
                  <span className=" font-normal text-sm text-violet-300">Start</span>
                  <input
                    className="mb-3 mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 bg-white"
                    required
                    value={newTask.start_time && newTask.start_time?.split(':00Z')[0]}
                    onChange={(e) => {
                      const [date, time] = e.target.value.split('T');

                      if (time < minTime) {
                        alert("You cannot select a past time!");
                        return e.target.value = ''; // Reset invalid input
                      }

                      setNewTask({
                        ...newTask, schedule_date: date, start_time: `${e.target.value}:00Z`
                      });

                    }}
                    type="datetime-local" min={new Date().toISOString().slice(0, 16)} name="" id=""
                  />
                </label>
                <label htmlFor="">
                  <span className=" font-normal text-sm text-violet-300">End</span>
                  <input
                    className="mb-3 mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 bg-white"
                    required
                    value={newTask.end_time && newTask.end_time.split('T')[1].split(':00Z')[0]}
                    onChange={(e) => {
                      console.log(e.target.value);
                      if (e.target.value < minTime || e.target.value < newTask.start_time.split('T')[1].split(':00Z')[0]) {
                        alert("You cannot select a past time!");
                        return e.target.value = ''; // Reset invalid input
                      }

                      setNewTask({
                        ...newTask, end_time: `${newTask.schedule_date}T${e.target.value}:00Z`
                      });

                    }}
                    type="time" min={minTime} name="" id=""
                  />
                </label>

              </div>
              <div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  type='button' className=' m-4 font-ubuntu bg-transparent border border-violet-400 hover:text-slate-200 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-violet-400'>
                  Cancel
                </button>
                <button
                  type="submit"
                  className=" font-ubuntu m-4 bg-violet-500 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-lg text-white">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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
      <div className="bg-[#ffffff11] content backdrop-filter rounded-2xl px-[15%] py-8 my-1 grid gap-8">
        <div className="bg-slate-700 p-4 md:p-8 rounded-xl text-center flex flex-col justify-between ">
          <div>
            <h4 className="font-ubuntu text-2xl lg:text-3xl dark: text-slate-200 light:text-slate-800">Today</h4>
            <div className="mt-4 md:mt-8">
              <form>
                {todos.map((todo, i) => {
                  return (
                    <>
                      <div key={todo.id} className=" flex gap-x-8 my-4">
                        <input type="checkbox" name="" id="" />
                        <div className=" flex-1">
                          <p className="m-1 text-lg md:text-xl text-left font-ubuntu">{todo.task}</p>
                          <div className=" flex justify-between">
                            <span className=" text-sm">{todo.schedule_date}</span>
                            <span className=" text-sm">{todo.start_time.substring(11, 16)} - {todo.end_time.substring(11, 16)}</span>
                          </div>
                        </div>
                        <div className="">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              const refTodo = todos.filter((ref) => ref.id === todo.id)
                              setNewTask(refTodo[0])
                              setIsModalOpen(true)
                            }}
                            className="edit-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 cursor-pointer m-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              deleteTask(todo.id);
                            }}
                            className="delete-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svg text-red-500 size-5 cursor-pointer m-1">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      {i + 1 === todos.length ? "" : <hr key={i} className=" border-slate-300 " />}

                    </>
                  )
                })}
              </form>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            type="button"
            className=" font-ubuntu m-4 bg-violet-500 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-2xl py-2 px-4 text-lg text-white">
            Add New Task
          </button>

        </div>
      </div>
    </>
  )
}

export default Todo;