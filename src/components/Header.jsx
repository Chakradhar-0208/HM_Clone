import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { RxPerson } from "react-icons/rx";
import { CiHeart, CiBag1, CiMenuBurger } from "react-icons/ci";
export default function Header() {
  const [showDiv, setShowDiv] = useState(true);

  return (
    <div className="relative z-501 ">
      <header className="py-1 pb-4 pl-3 pr-0 lg:px-5 bg-white fixed top-0 left-0 right-0 z-30 shadow">
        <div className="">
          <div className="flex justify-between items-center mb-2 text-sm h-10">
            <p className="text-red-600 w-60 sm:w-auto">
              SHOP UNDER ₹699 | SUMMER SALE IS LIVE
            </p>
            <div>
              <div
                className="flex items-center flex-row absolute right-0 top-2"
                onClick={() => setShowDiv(!showDiv)}
              >
                {showDiv ? (
                  <>
                    <a
                      href="#"
                      className="flex items-center flex-row text-black underline w-20"
                    >
                      SHOP NOW
                    </a>
                    <button className="p-2 rounded hover:bg-gray-200">
                      <FiPlus className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <div>
                    <div className=" flex items-center absolute right-0 w-fit">
                      <a
                        href="#"
                        className="flex items-center flex-row text-black underline w-22"
                      >
                        CLOSE THIS
                      </a>
                      <button className="p-2 rounded hover:bg-gray-200">
                        <FiMinus className="w-5 h-5" />
                      </button>
                    </div>
                    <div className=" flex flex-col justify-evenly px-6 bg-white w-[100vw] mt-8 lg:mt-0 lg:w-[360px] h-[260px]">
                      <Link to="/ladies">LADIES</Link>
                      <Link to="/men">MEN</Link>
                      <Link to="/kids">KIDS</Link>
                      <Link to="/home">HOME</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <img
              src="https://www2.hm.com/hm-logo.png"
              alt="H&M logo"
              className="w-12 lg:w-[60px]"
            />

            <ul className="flex items-center">
              <li>
                <button className="w-12 h-12 flex justify-center items-center  ">
                  <IoIosSearch className="w-5 h-5 cursor-pointer" />
                </button>
              </li>
              <li>
                <button className=" flex w-12 h-12">
                  <RxPerson className="m-auto w-5 h-5 cursor-pointer" />
                </button>
              </li>
              <li>
                <button className=" flex w-12 h-12">
                  <CiHeart className="m-auto w-5 h-5 cursor-pointer" />
                </button>
              </li>
              <li>
                <button className=" flex w-12 h-12">
                  <CiBag1 className="m-auto w-5 h-5 cursor-pointer" />
                </button>
              </li>
              <li className="lg:hidden">
                <button className=" flex w-12 h-12">
                  <CiMenuBurger className="m-auto w-5 h-5 cursor-pointer" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="h-[120px] lg:h-0"></div>

      <nav
        className="flex justify-center items-center lg:justify-start lg:fixed lg:top-[4.7rem] lg:left-[8.75rem] font-black pb-3 lg:mb-0 sticky top-0 lg:z-30 border-b border-gray-200 md:border-0
        "
      >
        <ul className="flex gap-x-9 font-medium text-sm mt-3.5 lg:mt-0">
          <li>
            <NavLink
              to="/ladies"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold"
                  : "text-gray-400 hover:text-black"
              }
            >
              LADIES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/men"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold"
                  : "text-gray-400 hover:text-black"
              }
            >
              MEN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kids"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold"
                  : "text-gray-400 hover:text-black"
              }
            >
              KIDS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold"
                  : "text-gray-400 hover:text-black"
              }
            >
              HOME
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
