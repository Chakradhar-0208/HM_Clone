export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full lg:flex-row">
        <div>
          <img
            loading="lazy"
            className="lg:w-[50vw] "
            src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-26/7002D-V26-4x5.jpg?imwidth=4800"
            alt="  "
          />
          <div className="flex justify-between px-6 py-3">
            <p>NEW IN:TABLEWARE</p>
            <p className="underline cursor-pointer">SHOP NOW</p>
          </div>
        </div>
        <div>
          <div className="relative lg:w-[50vw] h-full">
            <img
              loading="lazy"
              src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-26/7002B-V26-16x9.jpg?imwidth=4800"
              alt=" "
              className="w-full h-[75%] object-cover"
            />

            <div className="absolute top-[50%] lg:top-[60%] sm:top-[60%] md:top-[70%] left-6 right-6 z-10">
              <p className="text-3xl font-extrabold text-white tracking-wide">
                VACATION READY
              </p>
              <p className="underline cursor-pointer bg-white inline-block px-2 mt-4 text-sm md:text-base text-black float-right">
                SHOP NOW
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:w-[50vw] mx-auto mt-[5rem] xl:mb-[18rem] ">
        <div className="flex flex-col w-full lg:flex-row ">
          <div className="group">
            <img
              loading="lazy"
              className="lg:w-[50vw] "
              src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Bedding_CE_wk23-28-2x3_1.jpg?imwidth=1536"
              alt="  "
            />
            <div className="flex flex-col px-1 py-3">
              <p className="group-hover:underline">BEDDING</p>
              <p className=" cursor-pointer text-xs ">EXPLORE</p>
            </div>
          </div>
          <div className="group">
            <img
              loading="lazy"
              src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Tableware_CE_wk23-28-2x3_3.jpg?imwidth=1536"
              alt=" "
              className="lg:w-[50vw]"
            />
            <div className="flex flex-col px-1 py-3 ">
              <p className="group-hover:underline">TABLEWARE</p>
              <p className=" cursor-pointer text-xs none">EXPLORE</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:flex-row  mt-12 mb-5 ">
          <div className="group">
            <img
              loading="lazy"
              className="lg:w-[50vw] "
              src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Towels_CE_wk23-28-2x3_5.jpg?imwidth=1536"
              alt="  "
            />
            <div className="flex flex-col px-1 py-3">
              <p className="group-hover:underline">TOWELS</p>
              <p className=" cursor-pointer text-xs">EXPLORE</p>
            </div>
          </div>
          <div className="group">
            <img
              loading="lazy"
              src="https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Decorations_CE_wk23-28-2x3_4.jpg?imwidth=1536"
              alt=" "
              className="lg:w-[50vw]"
            />
            <div className="flex flex-col px-1 py-3">
              <p className="group-hover:underline">DECORATIONS</p>
              <p className=" cursor-pointer text-xs">EXPLORE</p>
            </div>
          </div>
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
