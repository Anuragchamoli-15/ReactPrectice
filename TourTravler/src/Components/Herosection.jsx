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
              <p className=" text-white text-lg">
                Dont wait for the right time. Start exploring your dream place
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center  text-white w-2xl">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Destiny"
                className="   bg-opacity-10 focus:border-black w-3/4 h-9 px-1 border-2 border-gray-400 focus:outline-none rounded-lg"
              />
              <p className="text-lg  text-black font-bold">Explore with me</p>
              <p className="text-lg text-black font-bold">Book your guid</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Herosection;
