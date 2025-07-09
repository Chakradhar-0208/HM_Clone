import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="relative  h-[83.5vh] overflow-hidden md:h-[60dvh] lg:h-screen">
        <img
          src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-27/7002E-V27-16x9.jpg?imwidth=4800"
          alt=""
          loading="lazy"
          className=" hidden md:block absolute inset-0 w-full h-full object-cover object-top "
        />
        <img
          src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-27/7002E-V27-9x16.jpg?imwidth=4800"
          alt=""
          loading="lazy"
          className=" md:hidden block absolute inset-0 w-full h-full object-cover object-top "
        />

        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_10%,rgba(125,125,125,0.10)_75%,rgba(255,255,255,0)_100%)] z-10"></div>

        <div className="absolute inset-0 flex flex-col lg:flex-row lg:justify-between lg:px-6 items-center justify-end pb-10 z-20 text-center lg:items-end ">
          <p className="text-white text-4xl md:text-5xl font-extrabold tracking-wide overflow-hidden ">
            NATURAL NOTES
          </p>
          <p className="underline cursor-pointer bg-white text-black w-fit px-1 py-1 mt-4 text-sm md:text-base">
            SHOP NOW
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full md:flex-row ">
        {/* lg:mt-32 */}
        <Link to="/home/summerBedding">
          <div>
            <img
              loading="lazy"
              className="lg:w-[50vw] "
              src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-27/7002E-V27-4x5.jpg?imwidth=4800"
              alt="  "
            />
            <div className="flex justify-between px-6 py-3">
              <p>SUMMER BEDDING</p>
              <p className="underline cursor-pointer">SHOP NOW</p>
            </div>
          </div>
        </Link>
        <Link to="/home/cushionCovers">
          {" "}
          <div>
            <img
              loading="lazy"
              src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-27/7002A-V27-4x5.jpg?imwidth=4800"
              alt=" "
              className="lg:w-[50vw]"
            />
            <div className="flex justify-between px-6 py-3">
              <p>CUSHION COVERS</p>
              <p className="underline cursor-pointer">SHOP NOW</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="xl:w-[50vw] mx-auto mt-[5rem] xl:mb-[18rem] ">
        <div className="flex  w-full ">
          <Link to="/home/bedding">
            <div className="group">
              <img
                loading="lazy"
                className="w-[50vw] "
                src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Bedding_CE_wk23-28-2x3_1.jpg?imwidth=1536"
                alt="  "
              />
              <div className="flex flex-col px-1 py-3">
                <p className="group-hover:underline">BEDDING</p>
                <p className=" cursor-pointer text-xs ">EXPLORE</p>
              </div>
            </div>
          </Link>
          <Link to="/home/tableware">
            {" "}
            <div className="group">
              <img
                loading="lazy"
                src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Tableware_CE_wk23-28-2x3_3.jpg?imwidth=1536"
                alt=" "
                className="w-[50vw]"
              />
              <div className="flex flex-col px-1 py-3 ">
                <p className="group-hover:underline">TABLEWARE</p>
                <p className=" cursor-pointer text-xs none">EXPLORE</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex w-full  mt-12 mb-5 ">
          <Link to="/home/towels">
            <div className="group">
              <img
                loading="lazy"
                className="w-[50vw] "
                src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Towels_CE_wk23-28-2x3_5.jpg?imwidth=1536"
                alt="  "
              />
              <div className="flex flex-col px-1 py-3">
                <p className="group-hover:underline">TOWELS</p>
                <p className=" cursor-pointer text-xs">EXPLORE</p>
              </div>
            </div>
          </Link>
          <Link to="/home/homeDecorations">
            <div className="group">
              <img
                loading="lazy"
                src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Decorations_CE_wk23-28-2x3_4.jpg?imwidth=1536"
                alt=" "
                className="w-[50vw]"
              />
              <div className="flex flex-col px-1 py-3">
                <p className="group-hover:underline">DECORATIONS</p>
                <p className=" cursor-pointer text-xs">EXPLORE</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-[99vw] xl:absolute left-0  px-5 py-2 ">
          <h1>HOME DECOR</h1>
          <p className="text-sm mt-2">
            Level up your interior aesthetics with our home décor range. Whether
            you've moved into a new home, or you want to breathe new life into
            your existing living space, our collection has every room in the
            house covered. Our furniture edit offers stunning side tables and
            comfy lounge chairs, plus there’s an array of chic lighting to
            create a calming ambience. Looking for those finishing touches?
            Check out our beautiful bed linen, and top it off by scrolling for
            decorative cushions and cushion covers, or create textured layers
            with blankets and throws. When it comes to decorations, add scented
            candles to your bathroom, give your favorite plants a place to call
            home in our chic plant pots, or experiment with wall hangings and
            elegant glassware. Whether your preferred style is minimalistic or
            bold, we've got something to suit every taste in our home décor
            range.
          </p>
        </div>
      </div>
    </>
  );
}
