import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  let navigation = useNavigate();

  return (
    <>
      <div className="flex justify-between bg-black text-white p-3 align-middle  ">
        <h1
          className="text-3xl ml-6 font-bold"
          onClick={() => navigation("/home")}
        >
          YourGuid
        </h1>

        <nav>
          <div className="flex items-center">
            <NavLink to="/home" className="mr-6 text-lg  p-1  ">
              Home
            </NavLink>
            <NavLink to="/about" className="mr-6 text-lg p-1">
              About
            </NavLink>
            <NavLink to="/contect" className="mr-6 text-lg p-1">
              Contect
            </NavLink>
            <NavLink to="/pakges" className="mr-6 text-lg p-1">
              Pakages
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
