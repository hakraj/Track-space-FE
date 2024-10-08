import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    profession: ""
  })
  const [error, setError] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    profession: "",
    terms: false,
  })

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    });
  }

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!agreeTerms) {
      setError({
        ...error, ["terms"]: true
      })
      return console.error("user yet to agree to terms and condition:")
    }

    try {
      console.log(formData);

      await axios.post('https://track-space.onrender.com/sign-up', JSON.stringify(formData))
        .then(response => console.log(response))
      return navigate('/auth/login')
    } catch (error) {
      console.error("An unepected error occured:", error)
    }


  }

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
            Create your account
          </h1>
          <form className="text-left" onSubmit={handleFormSubmit}>
            <div>
              <div className=" flex items-center justify-between gap-4 md:gap-8">
                <label htmlFor="firstname">
                  <span className=" font-normal text-sm text-violet-300">Firstname</span>
                  <input
                    className="mb-3 mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-white"
                    placeholder="John"
                    id="firstname"
                    name="first_name"
                    type="text"
                    required
                    minLength={3}
                    value={formData.first_name}
                    onChange={handleInputChange}
                  />
                </label>
                <label htmlFor="lastname">
                  <span className=" font-normal text-sm text-violet-300">Lastname</span>
                  <input
                    className="mb-3 mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-white"
                    placeholder="Doe"
                    id="lastname"
                    name="last_name"
                    type="text"
                    required
                    minLength={3}
                    value={formData.last_name}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <label htmlFor="email">
                <span className=" font-normal text-sm text-violet-300">Email</span>
                <input
                  className="mb-3 mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-white"
                  placeholder="Enter your email"
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="password">
                <span className=" font-normal text-sm text-violet-300">Password</span>
                <input
                  className="mb-3 mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-white"
                  placeholder="Enter your password"
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={8}
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="profession">
                <span className=" font-normal text-sm text-violet-300">Profession</span>
                <input
                  className="mb-3 mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-white"
                  id="profession"
                  name="profession"
                  type="text"
                  required
                  minLength={3}
                  value={formData.profession}
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="phone">
                <span className=" font-normal text-sm text-violet-300">Phone</span>
                <input
                  className="mb-3 mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-white"
                  id="phone"
                  name="phone_number"
                  type="text"
                  required
                  minLength={3}
                  value={formData.phone_number}
                  onChange={handleInputChange}
                />
              </label>
              <label className=" flex justify-start items-start gap-4 my-4" htmlFor="terms">
                <input
                  type="checkbox"
                  className="mb-3 mt-1 block p-2 border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-white"
                  id="terms"
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                />
                <span className=" font-normal text-xs text-violet-300">By signing up, you confirm that you have read and accept our Terms of service and Conditions</span>
              </label>
            </div>

            <button
              // onClick={() => navigate("/auth/onboarding")}
              type="submit"
              className=" font-ubuntu w-full my-4 bg-violet-500 hover:bg-gradient-to-tr hover:from-violet-300 hover:to-violet-400 rounded-lg py-2 px-4 text-lg text-white"
            >
              Signup
            </button>
          </form>

          <p className="font-ubuntu font-light max-sm:text-sm mt-1 text-slate-400">
            Already have an account?
            <span className="text-sky-400 underline cursor-pointer">
              <a href="/auth/login"> Login</a>
            </span>
          </p>
        </div>
      </div>


    </>
  )
}

export default Signup;