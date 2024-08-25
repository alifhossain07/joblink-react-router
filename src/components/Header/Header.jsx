import { NavLink } from "react-router-dom";


const Header = () => {

    const links = 
    <>
    <li className="text-xl mr-4"><NavLink  to="/" >Home</NavLink></li>
    <li className="text-xl mr-4"><NavLink to="/jobs" >Jobs</NavLink></li> 
    <li className="text-xl mr-4"><NavLink to="/applied">Applied Jobs</NavLink></li>
    <li className="text-xl mr-4"><NavLink to="/statistics">Statistics</NavLink></li>
    <li className="text-xl mr-4"><NavLink to="/blogs">Blogs</NavLink></li>

    </>


    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="font-bold text-3xl text-sky-600">JobLink</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  <a ><button className=" px-6 py-4 rounded-full hover:bg-sky-300 duration-200 bg-sky-500 text-white">Start Applying</button></a>
  </div>
</div>
        </div>
    );
};

export default Header;