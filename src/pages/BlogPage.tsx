import Images from "../assets/images/Image";

const BlogPage = () => {
  return (
    <div className="px-[10vw] mt-[15vh] mb-[25vh]">
      <div className="md:flex gap-[2.5%]">
        <div className='md:hidden w-4/5 mx-auto p-1 mb-[5vh] bg-[#ffffff11] backdrop-filter rounded-2xl shadow-md shadow-violet-300/50'>
          <img className='w-full h-auto rounded-2xl' src={Images.firstblog} alt='' />
        </div>
        <div className="max-md:hidden self-center">
          <div>
            <img className="w-60 h-auto max-md:rounded-[1.5rem] rounded-[2.5rem]" src={Images.firstblog} alt="" />
          </div>
          <div className="flex justify-center gap-4 mt-[5vh] text-slate-500">
            <div className=" rounded-full h-10 w-10 bg-gradient-to-tr from-slate-200 to-slate-500"></div>
            <div>
              <p className=" text-sm font-medium">John Doe</p>
              <p className=" text-sm">Executive</p>
            </div>
          </div>
        </div>
        <div className="md:w-3/4 lg:w-4/5">
          <p className=" border-l-2 border-violet-500 pl-2 text-xs md:text-sm font-medium text-violet-300">First</p>
          <h1 className="font-ubuntu text-3xl md:text-4xl font-bold my-4 md:my-8 dark: text-slate-200 light:text-slate-800">Lorem ipsum dolor sit amet</h1>
          <p className="border-l-2 border-sky-300 px-2 text-sm font-medium text-gray-500">December 1, 1960</p>
          <div className="md:hidden flex gap-4 my-8 text-slate-500">
            <div className=" rounded-full h-10 w-10 bg-gradient-to-tr from-slate-200 to-slate-500"></div>
            <div>
              <p className=" text-sm font-medium">John Doe</p>
              <p className=" text-sm">Executive</p>
            </div>
          </div>

          {[1, 2].map((_, i) => {
            return (
              <p key={i} className=" text-slate-300 md:text-lg my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus non felis nec quam euismod rutrum vel at urna.
                Fusce et enim vel felis efficitur interdum.
                Cras vulputate metus imperdiet felis mollis,
                sit amet mollis dolor eleifend.
                Ut ante magna, suscipit vitae porttitor fringilla,
                porttitor quis lectus.
                Praesent lacinia,
                tellus congue vehicula faucibus, enim enim placerat elit,
                id aliquam dolor lectus nec purus. Aliquam et dignissim orci.
                Pellentesque finibus ligula et gravida venenatis.
                Pellentesque sed lectus tempus nibh condimentum aliquet.
                Aliquam volutpat facilisis augue, eu tempus nibh consequat ut.
              </p>
            )
          })}
        </div>
      </div>
    </div>

  )
}

export default BlogPage;