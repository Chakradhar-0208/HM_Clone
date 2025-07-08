export default function Kids() {
  return (
    <>
      {/* <div className="w-full min-h-[50vh] h-[83.5vh] overflow-hidden md:h-[50vh] lg:h-screen">
        <img
          src="https://image.hm.com/content/dam/global_campaigns/season_02/kids/start-page-assets/w27/KS32L-2x3-NS-kids-start-page-prio-week-27.jpg"
          alt=""
          loading="lazy"
          className="w-full min-h-[50vh] object-cover h-[83.5vh] md:h-[50vh] lg:h-screen"
        />

        <div className="flex flex-col items-center justify-end pb-8 relative -mt-32 md:mt-6 lg:-mt-32 -top-51.5  h-[48%] lg:h-[50%] lg:-top-80">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.34)_11%,rgba(125,125,125,0.25)_75%,rgba(255,255,255,0)_100%)] z-5"></div>


          <div className="z-10 flex flex-col items-center lg:flex-row lg:justify-between lg:w-[95%] lg:pb-8">
            <p className="text-4xl md:text-5xl font-extrabold overflow-hidden text-white tracking-wide text-center">
              NEW ARRIVALS
            </p>
            <p className="underline cursor-pointer bg-white w-fit px-2 my-4 text-sm md:text-base py-1 text-black">
              SHOP NOW
            </p>
          </div>
        </div>
      </div> */}

      <div className="relative min-h-[50dvh] h-[83.5dvh] overflow-hidden md:h-[60dvh] lg:h-screen">
        <img
          src="https://image.hm.com/content/dam/global_campaigns/season_02/kids/start-page-assets/w27/KS32L-2x3-NS-kids-start-page-prio-week-27.jpg"
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_10%,rgba(125,125,125,0.10)_75%,rgba(255,255,255,0)_100%)] z-10"></div>

        <div className="absolute inset-0 flex flex-col lg:flex-row lg:justify-between lg:px-6 items-center justify-end pb-10 z-20 text-center lg:items-end ">
          <p className="text-white text-4xl md:text-5xl font-extrabold tracking-wide overflow-hidden ">
            NEW ARRIVALS
          </p>
          <p className="underline cursor-pointer bg-white text-black w-fit px-1 py-1 mt-4 text-sm md:text-base">
            SHOP NOW
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full md:flex-row ">
        {/* lg:mt-32 */}
        <div>
          <img
            loading="lazy"
            className="lg:w-[50vw] "
            src="https://image.hm.com/content/dam/global_campaigns/season_02/kids/start-page-assets/w26/KS31I-4x5-kids-start-page-prio-week-26.jpg?imwidth=4800"
            alt="  "
          />
          <div className="flex justify-between px-6 py-3">
            <p>THE CHARACTER SHOP</p>
            <p className="underline cursor-pointer">SHOP 2-8Y</p>
          </div>
        </div>
        <div>
          <img
            loading="lazy"
            src="https://image.hm.com/content/dam/global_campaigns/season_02/kids/start-page-assets/w26/KS32J-4x5-kids-start-page-prio-week-26.jpg?imwidth=4800"
            alt=" "
            className="lg:w-[50vw]"
          />
          <div className="flex justify-between px-6 py-3">
            <p>THE CHARACTER SHOP</p>
            <p className="underline cursor-pointer">SHOP 9-14Y</p>
          </div>
        </div>
      </div>

      <div className="xl:w-[50vw] mx-auto mt-[5rem] lg:mb-[18rem] ">
        <div className="flex  w-full ">
          <div className="group">
            <img
              loading="lazy"
              className="lg:w-[50vw] "
              src="https://image.hm.com/content/dam/global_campaigns/season_01/kids/start-page-assets/w-20/Baby-CE-wk20-26-v2.jpg?imwidth=1536"
              alt="  "
            />
            <div className="flex flex-col px-1 py-3">
              <p className="group-hover:underline">BABY</p>
              <p className=" cursor-pointer text-xs">SHOP NOW</p>
            </div>
          </div>
          <div className="group">
            <img
              loading="lazy"
              src="https://image.hm.com/content/dam/global_campaigns/season_01/kids/start-page-assets/w-20/Kids-2-8y-CE-wk20-26-v2.jpg?imwidth=1536"
              alt=" "
              className="lg:w-[50vw]"
            />
            <div className="flex flex-col px-1 py-3">
              <p className="group-hover:underline">KIDS 2-8Y</p>
              <p className=" cursor-pointer text-xs">SHOP NOW</p>
            </div>
          </div>
        </div>
        <div className="flex w-full  mt-12 mb-5 ">
          <div className="group">
            <img
              loading="lazy"
              className="lg:w-[50vw] "
              src="https://image.hm.com/content/dam/global_campaigns/season_01/kids/start-page-assets/w-20/Kids-9-14y-CE-wk20-26-v2.jpg?imwidth=1536"
              alt="  "
            />
            <div className="flex flex-col px-1 py-3">
              <p className="group-hover:underline">BABY</p>
              <p className=" cursor-pointer text-xs">SHOP NOW</p>
            </div>
          </div>
          <div className="group">
            <img
              loading="lazy"
              src="https://image.hm.com/content/dam/global_campaigns/season_01/kids/start-page-assets/w-20/Newborn-CE-wk20-26-v2.jpg?imwidth=1536"
              alt=" "
              className="lg:w-[50vw]"
            />
            <div className="flex flex-col px-1 py-3">
              <p className="group-hover:underline">NEWBORN </p>
              <p className=" cursor-pointer text-xs">SHOP NOW</p>
            </div>
          </div>
        </div>
        <div className="w-[99vw] lg:absolute left-0  px-5 py-2 ">
          <h1>KIDS' CLOTHING</h1>
          <p className="text-sm mt-2">
            Refill on their everyday essentials with our kids' clothes. You'll
            find an extensive selection of kids' tops and T-Shirts featuring
            colors that pop, plus adorable designs to suit their personality.
            Pair their favorite cardigan or sweater with our kids' jeans and
            pants – you'll find an array of cuts and styles, including chinos
            and cargo pants, to name a few. outdoor adventures on the cards? No
            problem. Keep chills at bay and little ones warm with our standout
            edit of kids' jackets and coats – and don't forget to scroll our
            kids' shoes for wellington boots, trendy sneakers and summer
            sandals.
          </p>
        </div>
      </div>
    </>
  );
}
