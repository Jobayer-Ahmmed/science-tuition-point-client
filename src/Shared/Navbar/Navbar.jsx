// import { Link, NavLink } from "react-router-dom";
// const navlinks =
//   <div className="md:flex md:gap-10">
//     <li>
//       <NavLink to="/">Home</NavLink>
//     </li>
//     <li>
//       <NavLink>About</NavLink>
//     </li>
//     <li>
//       <NavLink>Contact</NavLink>
//     </li>
//     <li>
//       <NavLink>Our Goal</NavLink>
//     </li>
//   </div>

import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="px-xPadding2 md:px-xPadding">
//       <div className="navbar">
//         <div className="navbar-start">
//           <p className="text-xl font-bold">Logo</p>
//         </div>
//         <ul className="navbar-center text-xl font-semibold hidden md:block">{navlinks}</ul>
//         <ul className="navbar-end">
//           <li>
//             <Link>Join Us</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li>
      <li>
        <NavLink>Contact</NavLink>
      </li>
      <li>
        <NavLink>Our Goal</NavLink>
      </li>
    </>
  );
  return (
    <div className="px-xPadding2 md:px-xPadding bg-base-300">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1">Logo</div>
            <div className=" flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navlinks}
              </ul>
            </div>
            <ul>
              <li>
                <Link>Join Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">{navlinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
