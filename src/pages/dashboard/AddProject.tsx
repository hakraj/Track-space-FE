import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import { useNavigate, useSearchParams } from "react-router-dom";

const AddProject = ({ today }: { today: string }) => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate();
  const [param] = useSearchParams()
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    content: "",
    tools_use: "Google docs",
    type_format: "",
    status: "pending"
  })

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    });
  }

  const handleFormSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    if (formData.id === "") {
      try {
        await axios.post(`https://track-space.onrender.com/auth/${user.userID}/project/new`, JSON.stringify(formData), {
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
        await axios.post(`https://track-space.onrender.com/auth/${user.userID}/project/${formData.id}/update`, JSON.stringify(formData), {
          headers: {
            "Authorization": user.token
          }
        })
          .then(response => console.log(response));


      } catch (error) {
        console.error("An unepected error occured:", error)
      }
    }

    setFormData({
      id: "",
      name: "",
      content: "",
      tools_use: "Google docs",
      type_format: "",
      status: "pending"
    })

    navigate('/dashboard/home')
  }

  const getData = async () => {
    try {
      await axios.get(`https://track-space.onrender.com/auth/${user.userID}/project/list`, {
        headers: {
          'Authorization': user.token
        }
      }).then(response => {
        const data = response.data?.projects;
        const project = data.filter((project: { uuid: string | null; }) => project.uuid === param.get('id'))

        setFormData({
          id: project[0].uuid,
          name: project[0].name,
          content: project[0].content,
          tools_use: "Google docs",
          type_format: project[0].type_format,
          status: "pending"
        })
      });


    } catch (error) {
      console.error("An unepected error occured:", error)
    }

  }

  const deleteProject = async (id: string) => {
    try {
      await axios.delete(`https://track-space.onrender.com/auth/${user.userID}/project/${id}/delete`, {
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
    getData()
  }, [])

  return (
    <>
      <div className="bg-[#ffffff11] backdrop-filter rounded-2xl px-[5%] py-4 md:py-8">
        <div className=" flex items-center justify-between">
          <h3 className="font-ubuntu text-3xl lg:text-4xl font-bold dark: text-slate-200 light:text-slate-800">Workspace</h3>
          <span className="flex gap-1 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            {today}
          </span>
        </div>
        <hr className=" border-slate-700 mb-4" />
        <div>
          <h4 className="font-ubuntu text-2xl lg:text-3xl dark: text-slate-200 light:text-slate-800">Create a new project</h4>
          <p>Enter in the project title and the type of file use below : </p>
          <div className=" flex items-center justify-between gap-4 md:gap-8 m-4">
            <input
              className=" block w-full p-2 border border-gray-600 rounded-xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 bg-transparent "
              placeholder="Enter project title"
              id=""
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              required
            />
            <select
              className=" block w-full p-2 border border-gray-600 rounded-xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 bg-transparent "
              id=""
              name="type_format"
              value={formData.type_format}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select an option</option>
              <option value="article">Article</option>
              <option value="text">Text</option>
              <option value="code">Code</option>
              <option value="article">Article</option>
            </select>

          </div>
        </div>
      </div>
      <div className="bg-[#ffffff11] content backdrop-filter rounded-2xl px-[5%] py-4 md:py-8 my-1">
        <textarea
          className=" w-full p-2 pl-8 border border-gray-600 rounded-xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 bg-transparent "
          rows={12}
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          required
        />
        <div className=" flex items-center justify-between mx-[5%] my-4">
          <button onClick={() => {
            deleteProject(formData.id)
            navigate('/dashboard/home')
          }} type='button' className=' font-ubuntu bg-transparent border border-violet-400 hover:text-slate-200 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-sm text-violet-400'> Delete </button>
          <button onClick={handleFormSubmit} type='submit' className=' font-ubuntu bg-violet-500 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-sm text-slate-200'> Submit </button>
        </div>
      </div>
    </>
  )
}

export default AddProject;