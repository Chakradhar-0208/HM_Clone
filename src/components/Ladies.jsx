import { Link } from "react-router-dom";
export default function Ladies() {
  return (
    <>
      <div className="flex flex-col w-full md:flex-row">
        <Link to="/ladies/highSummer">
          <div>
            <img
              loading="lazy"
              className="lg:w-[50vw] "
              src="https://image.hm.com/content/dam/global_campaigns/season_02/women/start-page-assets/week-27/WS32K-4x5-startpage-wk27-teaser-1.jpg?imwidth=4800"
              alt="  "
            />
            <div className="flex justify-between px-6 py-3">
              <p>RESORT ESSENTIALS</p>
              <p className="underline cursor-pointer">SHOP NOW</p>
            </div>
          </div>
        </Link>
        <Link to="/ladies/modernCountrySide">
          <div>
            <img
              loading="lazy"
              src="https://image.hm.com/content/dam/global_campaigns/season_02/women/start-page-assets/week-27/DS32I-4x5-startpage-wk27-teaser-3.jpg?imwidth=4800"
              alt=" "
              className="lg:w-[50vw]"
            />
            <div className="flex justify-between px-6 py-3">
              <p>MODERN COUNTRYSIDE</p>
              <p className="underline cursor-pointer">SHOP NOW</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="xl:w-[50vw] mx-auto mt-[5rem] lg:mb-[18rem] ">
        <div className="flex w-full">
         <Link to="/ladies/tops"> <div className="group">
            <img
              loading="lazy"
              className="lg:w-[50vw] "
              src="https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk26/Tops-CE-wk26.jpg?imwidth=1536   "
              alt="  "
            />
            <div className="flex flex-col px-1 py-3">
              <p className="group-hover:underline">TOPS</p>
              <p className=" cursor-pointer text-xs ">EXPLORE</p>
            </div>
          </div></Link>
          <Link to="/ladies/dresses"><div className="group">
            <img
              loading="lazy"
              src="https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk26/Dresses-CE-wk26.jpg?imwidth=1536"
              alt=" "
              className="lg:w-[50vw]"
            />
            <div className="flex flex-col px-1 py-3 ">
              <p className="group-hover:underline">DRESSES</p>
              <p className=" cursor-pointer text-xs none">EXPLORE</p>
            </div>
          </div></Link>
        </div>
        <div className="flex w-full  mt-12 mb-5 ">
          <Link to="/ladies/trousers"><div className="group">
            <img
              loading="lazy"
              className="lg:w-[50vw] "
              src="https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk26/Trousers-CE-wk26.jpg?imwidth=1536"
              alt="  "
            />
            <div className="flex flex-col px-1 py-3">
              <p className="group-hover:underline">TROUSERS</p>
              <p className=" cursor-pointer text-xs">EXPLORE</p>
            </div>
          </div></Link>
          <Link to="/ladies/shirts">
          <div className="group">
            <img
              loading="lazy"
              src="https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk26/Shirts-CE-wk26.jpg?imwidth=1536"
              alt=" "
              className="lg:w-[50vw]"
            />
            <div className="flex flex-col px-1 py-3">
              <p className="group-hover:underline">SHIRTS</p>
              <p className=" cursor-pointer text-xs">EXPLORE</p>
            </div>
          </div>
          </Link>
        </div>
        <div className="w-[99vw] lg:absolute left-0  px-5 py-2 ">
          <h1>Women's Clothing</h1>
          <p className="text-sm mt-2">
            Refresh your daily rotation with our women’s clothing range. With
            the freshest styles available all in one place, you can expect
            everyday basics, like women's tops and skirts, as well as must-have
            knitwear and cozy loungewear for downtime days. Plans to go out? Our
            women's dresses line up mini, midi and maxi styles that were made
            for summer evenings, while our stylish jeans and pants offer
            something to flatter every silhouette. Solve your wardrobe woes on
            busy days with cool co-ords, and wrap up to stay warm in our women's
            jackets and coats when extra layers are required. Finish off your
            favorite new looks with an array of trendy accessories, and don’t
            forget to scroll for statement footwear in our women's shoes range.
            Discover more women’s fashion by scrolling our Conscious collection,
            which has been crafted with the planet in mind – think sustainably
            sourced materials, including organic cotton and recycled polyester.
          </p>
        </div>
      </div>
    </>
  );
}
