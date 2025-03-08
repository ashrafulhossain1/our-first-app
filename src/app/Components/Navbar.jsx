import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const Links = (
    <div className=" flex items-center gap-7">
      <Link href="/">Home</Link>
      <Link href="/">Courses</Link>
      <Link href="/">About</Link>
    </div>
  );

  return (
    <nav>
      <div className="navbar bg-[#135276] shadow-sm text-white">
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
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>

          <a className="btn btn-ghost text-2xl md:text-3xl font-bold">
            Learnica
          </a>
        </div>

        <div className="navbar-end flex items-center gap-7">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{Links}</ul>
          </div>
          <div>
            <a className="btn text-[#135276] font-bold">Sign-In</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
