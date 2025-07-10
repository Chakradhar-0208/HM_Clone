import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Hero() {
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <div
        className="cursor-pointer overflow-x"
        onClick={() => setShowList(!showList)}
      >
        <div className="select-none md:h-[75vh] lg:h-[80vh] h-[61vh] w-full bg-[#f8f7f6] text-red-600 font-bold gap-5 pl-5 text-5xl text-left flex items-center lg:relative lg:top-[130px]">
          UP TO 50% OFF <br /> <br /> NEW STYLES ADDED
        </div>

        {
          <>
            <div
              className={`w-full md:h-[75vh] lg:h-[80vh] h-[60vh] absolute lg:top-32 md:top-40.5 top-41.5 z-00 bg-[#000000c5] 
                transition-opacity duration-700 ease-in-out 
                ${showList ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            ></div>

            <div className="flex justify-end lg:-mt-[112.15px] -mt-[242.2px] relative overflow-hidden">
              <div
                className={`transition-all duration-700 ease-in-out transform 
                  ${
                    showList
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  } 
                  flex flex-col items-end relative h-60 w-full sm:w-[360px] justify-evenly px-9 bg-white z-500 text-gray-600`}
              >
                <Link to="/ladies">
                  <p className="hover:text-black">LADIES</p>
                </Link>
                <Link to="/men">
                  <p className="hover:text-black">MEN</p>
                </Link>
                <Link to="/kids">
                  <p className="hover:text-black">KIDS</p>
                </Link>
                <Link to="/home">
                  <p className="hover:text-black">HOME</p>
                </Link>
              </div>
            </div>
            <div className="flex items-center flex-row relative justify-end h-15 z-50">
              <a>SHOP NOW </a>
              <button
                onClick={() => setShowList(!showList)}
                className="p-2 transition-all group relative w-8 h-8"
              >
                <FiPlus
                  className={` top-[5px]
      w-5 h-5 absolute transition-transform duration-300
      ${showList ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}
    `}
                />

                <FiMinus
                  className={`top-[5px]
      w-5 h-5 absolute transition-all duration-300 
      ${showList ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}
    `}
                />
              </button>
            </div>
          </>
        }
      </div>

      <div className="relative flex items-center  pl-4 pb-4 text-gray-500 text-xs font-semibold ">
        <p>
          Offer valid on selected styles. Available online & in-stores. *T&C
          Apply
        </p>
      </div>
    </div>
  );
}
