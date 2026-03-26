import { Link, NavLink } from "react-router";
import logoIcon from "/logo.png";
import "./Navbar.css";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const menuItem = (
    <>
      <li>
        <NavLink className="font-semibold text-[16px]" to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className="font-semibold text-[16px]" to="/apps">
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold text-[16px]" to="/installation">
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/"className="hidden md:block">
          <span className="flex gap-1 items-center">
            <img className="w-10" src={logoIcon} alt="logo" />
            <h2 className="text-lg font-bold bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </h2>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white ">
          <span className="flex items-center">
            <FaGithub className="text-[20px]" />
            <h2 className=" ml-1.25 font-semibold text-[16px]">Contribute</h2>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
