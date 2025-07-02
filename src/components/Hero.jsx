import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Hero() {
  const [showList, setShowList] = useState(false)
  return (
    <div >
      <div className="cursor-pointer " onClick={() => {
        setShowList(!showList)
      }}>

        <div className="select-none h-[81vh] w-full bg-[#f8f7f6] text-red-600 font-bold gap-5 pl-5 text-4xl lg:text-5xl text-left flex items-center lg:relative lg:top-[130px]">

          UP TO 50% OFF <br /> <br /> NEW STYLES ADDED

        </div>

        {
          (showList) ?

            <>
              <div className="w-full h-[81vh] bg-[#000000c5] absolute lg:top-32 top-41 z-500"></div>


              <div className="  flex  justify-end lg:-mt-[112.15px] -mt-[242.2px] relative">
                <div className="  flex flex-col items-end  relative  h-60 w-full sm:w-[360px] justify-evenly px-9  bg-white z-500 text-gray-600 ">
                  <p className="hover:text-black">LADIES</p>
                  <p className="hover:text-black">MEN</p>
                  <p className="hover:text-black">BABY</p>
                  <p className="hover:text-black">KIDS 2-8Y</p>
                  <p className="hover:text-black">KIDS 9-14Y</p>
                  <p className="hover:text-black">HOME</p>
                </div>
              </div>


              <div className=" flex items-center flex-row  relative justify-end h-15 z-501">

                <a>SHOP NOW </a>
                <button className="p-2">
                  <FiMinus className="w-5 h-5" />
                </button>
              </div>
            </>
            :
            <div className="flex items-center flex-row relative rounded justify-end lg:mt-33 h-15 ">
              <a
                className=" flex items-center flex-row text-[#808080]  "
              >
                SHOP NOW
              </a>
              <button className="p-2">
                <FiPlus className="w-5 h-5" />
              </button>
            </div>
        }

      </div>
      <div className="relative  flex items-center h-10 pl-4 pb-4 text-gray-500 text-xs text-600  ">
        <p>Offer valid on selected styles. Available online & in-stores. *T&C Apply</p>
      </div>
    </div>

  );
}