import Wallpaper from "../assets/wallpaper.jpg";
function Herosection() {
  return (
    <>
      <section>
        <div className="relative">
          <img
            className="w-full object-cover object-bottom h-[91.7vh] opacity-96"
            src={Wallpaper}
            alt="heroImage"
          />

          <div className="absolute  left-1/2 top-1/4  -translate-x-1/2 ">
            <div className="flex flex-col  items-center ">
              <h1 className="text-8xl font-bold text-black">YOUR GUID</h1>
              <p className=" text-white text-lg font-bold">
                Dont wait for the right time. Start exploring your dream place
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center  text-white w-2xl">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Destiny"
                className="   bg-opacity-10 focus:border-black w-3/3 h-10 px-2 border-gray-400 focus:outline-none rounded-lg   border-3"
              />
              {/* <p className="text-lg  text-black font-bold">Explore with me</p>
              <p className="text-lg text-black font-bold">Book your guid</p> */}
              <button className="mt-4 px-6 py-3 bg-sky-500 text-white font-semibold rounded-full hover:bg-sky-600 transition duration-300 shadow-lg"> Book Your Guide → </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Herosection;
