import { Link } from "react-router-dom";
export default function Men() {
  return (
    <>
      <div className="flex w-full flex-col md:flex-row cursor-pointer ">
        <Link to="/men/new_styles" className="md:w-1/2">
          <div className="aspect-[4/5] w-full">
            <img
              loading="lazy"
              src="https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/MS32LH4-4x5-wk27.jpg?imwidth=4800"
              alt="Men's New Styles - Week 27"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-between px-6 py-3">
            <p>NEW STYLES</p>
            <p className="underline">SHOP NOW</p>
          </div>
        </Link>

        <Link to="/men/linen_looks" className="md:w-1/2">
          <div className="aspect-[4/5] w-full">
            <img
              loading="lazy"
              src="https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/MS32E1-2x3-wk27.jpg?imwidth=4800"
              alt="Men's Linen Looks - Week 27"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-between px-6 py-3">
            <p>LINEN LOOKS</p>
            <p className="underline">SHOP NOW</p>
          </div>
        </Link>
      </div>

      <div className="xl:w-[50vw] mx-auto mt-[5rem] lg:mb-[18rem] ">
        <div className="flex  w-full cursor-pointer">
          <Link to="/men/t_shirts">
            <div className="group">
              <img
                loading="lazy"
                className="lg:w-[50vw] "
                src="https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/T-shirt-Tanks-CE-wk-27-30.jpg?imwidth=1536"
                alt="  "
              />
              <div className="flex flex-col px-1 py-3">
                <p className="group-hover:underline">T-SHIRTS AND TANKS</p>
                <p className=" cursor-pointer text-xs ">EXPLORE</p>
              </div>
            </div>
          </Link>
          <Link to="/men/trousers">
            <div className="group">
              <img
                loading="lazy"
                src="https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/Trousers-CE-wk-27-30.jpg?imwidth=1536"
                alt=" "
                className="lg:w-[50vw]"
              />
              <div className="flex flex-col px-1 py-3 ">
                <p className="group-hover:underline">TROUSERS</p>
                <p className=" cursor-pointer text-xs none">EXPLORE</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex  w-full  mt-12 mb-5 cursor-pointer">
          <Link to="/men/shirts">
            <div className="group">
              <img
                loading="lazy"
                className="lg:w-[50vw] "
                src="https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/Shirts-CE-wk-27-30.jpg?imwidth=1536"
                alt="  "
              />
              <div className="flex flex-col px-1 py-3">
                <p className="group-hover:underline">SHIRTS </p>
                <p className=" cursor-pointer text-xs">EXPLORE</p>
              </div>
            </div>
          </Link>
          <Link to="/men/jeans">
            <div className="group">
              <img
                loading="lazy"
                src="https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/Jeans-CE-wk-27-30.jpg?imwidth=1536"
                alt=" "
                className="lg:w-[50vw]"
              />
              <div className="flex flex-col px-1 py-3">
                <p className="group-hover:underline">JEANS</p>
                <p className=" cursor-pointer text-xs">EXPLORE</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-[99vw] lg:absolute left-0  px-5 py-2 ">
          <h1>MEN'S CLOTHING</h1>
          <p className="text-sm mt-2">
            Check out all the freshest styles your closet needs in our men's
            clothing range. You'll find a roundup of everyday essentials,
            including tops and T-Shirts, as well as comfy lounge sets and
            underwear. Formal event coming up? Scroll no further than our men's
            blazers and suits for the sharpest looks and nail the dress code.
            When it comes to men's pants, there's chinos, joggers and cargo
            styles in all the staple colors. dreaming of denim? our men's jeans
            offer a range of fits to suit your style, including skinny, straight
            and tapered, to name just a few. Wear yours with a trendy oversized
            shirt or a classic denim number from our men's shirts edit. and when
            it comes to chilly weather, our men's jackets and coats have you
            covered – we've got puffer jackets and trench coats, as well as
            leather jackets and bomber jackets in year-round colors.
          </p>
        </div>
      </div>
    </>
  );
}
