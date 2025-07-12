import { useParams } from "react-router-dom";
import { FiPlus, FiFilter, FiChevronsUp } from "react-icons/fi";
import { useWishlist } from "./WishlistContext";
import React, { useState, useMemo } from "react";
import Toast from "./Toast";
const mensSections = {
  new_styles: {
    title: "NEW STYLES",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/MS32LH4-4x5-wk27.jpg?imwidth=4800",
    products: {
      regularBoxy_style: {
        title: "REGULAR FIT BOXY-STYLE POPLIN SHIRT",
        price: 1499.0,
        image:
          "	https://image.hm.com/assets/hm/e9/8f/e98f0a27f823e19df3b0d4142c0d7d6149dfb681.jpg?imwidth=1536",
      },
      looseFitBoxy_style: {
        title: "LOOSE FIT BOXY-STYLE T-SHIRT",
        price: 1499.0,
        image:
          "	https://image.hm.com/assets/hm/54/91/5491cc032fb37f2663471095acf3b8120566f431.jpg?imwidth=1536",
      },

      relaxFit_Trousers: {
        title: "RELAXED FIT TROUSERS",
        price: 2799.0,
        image:
          "	https://image.hm.com/assets/hm/ae/91/ae91e111130885bd2d4ec66b915f6189347b72cb.jpg?imwidth=1536",
      },
      regFit_DenimResort: {
        title: "REGULAR FIT DENIM RESORT SHIRT",
        price: 2799.0,
        image:
          "https://image.hm.com/assets/hm/c4/bf/c4bfb12a2e4c16d18000414147124497d6afb500.jpg?imwidth=1536",
      },

      oversizedFit_CroppedTee: {
        title: "OVERSIZED FIT CROPPED T-SHIRT",
        price: 2299.0,
        image:
          "	https://image.hm.com/assets/hm/ea/db/eadb69b04a17c57c786febe3837cf16e577ed003.jpg?imwidth=1536",
      },
      oversizedFit_TeeLinen: {
        title: "OVERSIZED FIT T-SHIRT",
        price: 1999.0,
        image:
          "https://image.hm.com/assets/hm/b1/7e/b17e7622265d2ce5d33ea8003fc6ed8a5eabc84d.jpg?imwidth=1536",
      },
      oversizedFit_LongSleeved: {
        title: "OVERSIZED FIT LONG-SLEEVED JERSEY TOP",
        price: 2299.0,
        image:
          "https://image.hm.com/assets/hm/e6/84/e684befb9b9a1658ecaafc089724ee5801eceb00.jpg?imwidth=1536",
      },
      oversizedFit_ShortSleeve: {
        title: "OVERSIZED FIT SHORT-SLEEEVD LINEN-BLEND SHIRT",
        price: 2299.0,
        colors: ["red", "blue", "white"],
        image:
          "https://image.hm.com/assets/hm/49/f9/49f92beb6c0dd4807301347264a8a3c7519f5a1a.jpg?imwidth=1536",
      },
    },
  },
  linen_looks: {
    title: "LINEN LOOKS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/MS32E1-2x3-wk27.jpg?imwidth=4800",
    products: {
      regFit_LinenBlendTrousers: {
        title: "REGULAR FIT LINEN-BLEND TROUSERS",
        price: 2999.0,
        image:
          "https://image.hm.com/assets/hm/de/74/de74869d8c461f1455bb800621bf4a38be9d8030.jpg?imwidth=1536",
      },
      linenJacket: {
        title: "SLIM FIT LINEN JACKET",
        price: 5999.0,
        image:
          "https://image.hm.com/assets/hm/3f/62/3f62e6d763adc4e1d1c101a987e7d063afa50c74.jpg?imwidth=1536",
      },
      regFit_ResortShirt: {
        title: "REGULAR FIT LINEN-BLEND RESORT SHIRT",
        price: 2799.0,
        image:
          "	https://image.hm.com/assets/hm/d7/b9/d7b939dcd7f4e0b9fca6ef65a4f01d689efa75e1.jpg?imwidth=1536",
      },

      regFit_Trousers: {
        title: "REGULAR FIT LINEN-BLEND TROUSERS",
        price: 2799.0,
        image:
          "https://image.hm.com/assets/hm/b0/43/b043f0f0eeaba1bcf1ea0d7937bfe6bd48925a05.jpg?imwidth=1536",
      },
      regFit_LinenTrousers: {
        title: "REGULAR FIT LINEN TROUSERS",
        price: 3999.0,
        image:
          "	https://image.hm.com/assets/hm/5a/d4/5ad4bcc26516c84b234c6d3e93d281ed8083545c.jpg?imwidth=1536",
      },
      regFit_leninShirt: {
        title: "REGULAR FIT LINEN SHIRT",
        price: 2999.0,
        image:
          "	https://image.hm.com/assets/hm/eb/0b/eb0beb93a43c9f3e8049a962da292fad1ab2cc02.jpg?imwidth=1536",
      },
      regFit_LinenBlendShorts: {
        title: "REGULAR FIT LINEN-BLEND SHORTS",
        price: 1999.0,
        image:
          "https://image.hm.com/assets/hm/93/70/9370069dcd241ae49a40ad5a4582d9d57ba91682.jpg?imwidth=1536",
      },
      regFit_Shirt: {
        title: "REGULAR FIT LINEN-BLEND SHIRT",
        price: 2299.0,
        image:
          "	https://image.hm.com/assets/hm/86/3d/863d5017d6333e8c44d5a8d766b8fdf8cb2177b1.jpg?imwidth=1536",
      },
    },
  },
  jeans: {
    title: "JEANS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/Jeans-CE-wk-27-30.jpg??imwidth=1536",
    products: {
      relaxedJeans: {
        title: "RELAXED JEANS",
        price: 1999.0,
        image:
          "https://image.hm.com/assets/hm/e5/29/e529a515f56d9f12632954548173f86c9c6e5c68.jpg?imwidth=1536",
      },
      looseJEans: {
        title: "LOOSE JEANS",
        price: 2299.0,
        image:
          "https://image.hm.com/assets/hm/61/d0/61d03fa770ad1c6a31fb8919798dc83ea8d3bdec.jpg?imwidth=1536",
      },
      strRegJeans: {
        title: "STRAIGHT REGULAR JEANS",
        price: 1799.0,
        image:
          "https://image.hm.com/assets/hm/47/22/4722ecac7c278331feffe1037d238d13da7606aa.jpg?imwidth=1536",
      },
      regJeans: {
        title: "REGULAR JEANS",
        price: 2299.0,
        image:
          "https://image.hm.com/assets/hm/ee/46/ee46c3b15e2d01a75624730fe481482e5f9ffbaa.jpg?imwidth=1536 ",
      },
      looseJeans: {
        title: "LOOSE JEANS",
        price: 2299.0,
        image:
          "https://image.hm.com/assets/hm/c7/8b/c78b07056276ddaabce1bcfab3709e78976a756a.jpg?imwidth=1536",

        //
      },
      baggyJeans: {
        title: "BAGGY JEANS",
        price: 2699.0,
        image:
          "https://image.hm.com/assets/hm/b9/db/b9dbcc63d87071fdff2eb964c78cb5fbe64f941e.jpg?imwidth=1536",
      },
    },
  },
  shirts: {
    title: "SHIRTS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/Shirts-CE-wk-27-30.jpg?imwidth=1536",
    products: {
      oxfordShirt: {
        title: "REGULAR FIT OXFORD SHIRT",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/52/10/52105f881ef33f3d7169d696549f9804235b27d2.jpg?imwidth=1536",
      },
      sFit_EasyIron: {
        title: "SLIM FIT EASY IRON SHIRT",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/7d/85/7d851e3124bd16c0b743eeaf32ec07434fe94ef4.jpg?imwidth=1536",
      },
      regFit_JerseyShirt: {
        title: "REGULAR FIT JERSEY SHIRT",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/67/02/670291a5cbb8a731ed59bc1087938b2513307d82.jpg?imwidth=1536",
      },
      regFitTexturedShirt: {
        title: "REGULAR FIT TEXTURED SHIRT",
        price: 1999.0,
        image:
          "https://image.hm.com/assets/hm/fe/6d/fe6d9ffb9b77de605f991308c20e39973c54e79e.jpg?imwidth=1536",
      },
      regFit_LinenBlendShirt: {
        title: "REGUALAR FIT LINEN-BASED SHIRT",
        price: 2299.0,
        image:
          "https://image.hm.com/assets/hm/d8/e5/d8e5b0bf21d9cff160f1b9e5d3f0ab699245d101.jpg?imwidth=1536",
      },
      psleeved: {
        title: "REGULAR FIT SHORT-SLEEVED SHIRT",
        price: 1999.0,
        image:
          "https://image.hm.com/assets/hm/27/31/2731407a9a29cdb96bcde097e8916dc9fb87a851.jpg?imwidth=1536",
      },
    },
  },
  trousers: {
    title: "TROUSERS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/Trousers-CE-wk-27-30.jpg?imwidth=1536",
    products: {
      looseFit_SweatPants: {
        title: "LOOSE FIT SWEATPANTS",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/b8/67/b86734fe7367cfd1a545f66d1bb28c3e6a1d5880.jpg?imwidth=1536",
      },
      regFit_LinenBlendTrousers: {
        title: "REGULAR FIT LINEN-BLEND TROUSERS",
        price: 2799.0,
        image:
          "https://image.hm.com/assets/hm/04/27/0427a2d720c824973c9b60217164a14d47727462.jpg?imwidth=1536",
      },
      looseFit_SweatPants1: {
        title: "LOOSE FIT SWEATPANTS",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/a6/28/a628282d3795642d3779ee152dae10b66674e063.jpg?imwidth=1536",
      },
      looseFit_Cargo: {
        title: "LOOSE FIT CARGO TROUSERS",
        price: 1999.0,
        image:
          "https://image.hm.com/assets/hm/3f/e3/3fe3a1b14e5eb0e3bc524b90fe45d55a0667574f.jpg?imwidth=1536",
      },
      relaxFit_Trousers: {
        title: "RELAXED FIT TROUSERS",
        price: 2799.0,
        image:
          "https://image.hm.com/assets/hm/04/13/0413f5010ec537b8dc3c3e4779658e0b7c4ac7f3.jpg?imwidth=1536",
      },
      cottonTwill_Trousers: {
        title: "SLIM FIT COTTON FWILL TROUSERS",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/96/39/96390ccf7926244ba128b431f09895bf40ab2067.jpg?imwidth=1536",
      },
    },
  },
  t_shirts: {
    title: "MEN'S T-SHIRTS & TOPS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/T-shirt-Tanks-CE-wk-27-30.jpg?imwidth=1536",
    products: {
      fivePack_regFit: {
        title: "5-PACK REGULAR FIT T-SHIRTS",
        price: 1999.0,
        image:
          "	https://image.hm.com/assets/hm/23/0d/230d25c3d0a7e81992b1c1ec551a17cb32ef5326.jpg?imwidth=1536",
      },
      threePack_Polo: {
        title: "3-PACK SLIM FIT POLO T-SHIRTS",
        price: 2299.0,
        image:
          "https://image.hm.com/assets/hm/8f/46/8f46b4d64de4cae9e9dbb2831ba052eac1769c1d.jpg?imwidth=1536 ",
      },
      regFitTee: {
        title: "REGULAR FIT T-SHIRT",
        price: 399.0,
        image:
          "	https://image.hm.com/assets/hm/ba/f9/baf9ae5354aeeffd3123060ca22d59166d552c6e.jpg?imwidth=1536",
      },
      looseFitTee: {
        title: "LINEN-BLEND SHIRT",
        price: 999.0,
        image:
          "	https://image.hm.com/assets/hm/b3/ee/b3ee2503c4e7c8b25f8f1efa1c9428f0061cd0b9.jpg?imwidth=1536",
      },
      looseFitPrintedTee: {
        title: "LOOSE FIT PRINTED T-SHIRT",
        price: 999.0,
        image:
          "	https://image.hm.com/assets/hm/2f/8e/2f8e217352bbbc8c74e6fbcd6ca465729f6711c1.jpg?imwidth=1536",
      },
      oversizedFit_Tee: {
        title: "OVERSIZED FIT T-SHIRT",
        price: 1499.0,
        image:
          "	https://image.hm.com/assets/hm/e7/ce/e7ce16aa0811db02ebd05c4db7fdea53d109209b.jpg?imwidth=1536",
      },
    },
  },
};

const sectionTitles = {
  linen_looks: "THE LINEN",
  new_styles: "NEW IN",
  t_shirts: "MEN'S T-SHIRTS & TOPS",
  jeans: "MEN'S JEANS",
  trousers: "MEN'S TROUSERS",
  shirts: "MEN'S SHIRTS",
};

export default function MenSection() {
  const { sectionId } = useParams();
  const section = mensSections[sectionId];
  if (!section) {
    return <div className="p-6 text-red-600">404: Section not Found</div>;
  }

  const product = section.products || {};
  const { wishlist, toggleWishlist, toastMessage, clearToast } = useWishlist();
  const [sortOption, setSortOption] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);
  const sortedAndFilteredProducts = useMemo(() => {
    let items = Object.entries(section.products || {});

    if (priceFilter === "below_1000") {
      items = items.filter(([_, prod]) => prod.price < 1000);
    } else if (priceFilter === "above_1000") {
      items = items.filter(([_, prod]) => prod.price >= 1000);
    }

    if (sortOption === "price_asc") {
      items.sort((a, b) => a[1].price - b[1].price);
    } else if (sortOption === "price_desc") {
      items.sort((a, b) => b[1].price - a[1].price);
    }

    return items;
  }, [section.products, sortOption, priceFilter]);

  return (
    <div className="lg:mt-[130px]">
      <div className="p-6">
        <h1 className="font-bold overflow-hidden text-4xl">
          {sectionTitles[sectionId]?.toUpperCase()}
        </h1>
        <div className="flex justify-between mt-8 gap-4">
          <div className="flex items-center">
            <select
              onChange={(e) => setSortOption(e.target.value)}
              className="text-center w-20 appearance-none outline-0 "
              defaultValue=""
            >
              <option value="">SORT BY </option>
              <option value="price_asc">PRICE ▲ </option>
              <option value="price_desc">PRICE ▼</option>
            </select>
            <FiPlus className=" w-5 h-5" />
          </div>

          <div className="flex items-center gap-4">
            <select
              onChange={(e) => setPriceFilter(e.target.value)}
              className="text-center  w-fit appearance-none outline-0 "
              defaultValue=""
            >
              <option value="" className="text-right">
                FILTER
              </option>
              <option value="below_1000">BELOW ₹1000</option>
              <option value="above_1000">₹1000 & ABOVE</option>
            </select>
            <FiFilter className=" w-5 h-5" />
          </div>
        </div>
        <button
          className="float-right mt-3 text-xs cursor-pointer underline -mb-2"
          onClick={() => {
            setSortOption(null);
            setPriceFilter(null);
          }}
        >
          {" "}
          CLEAR FILTERS{" "}
        </button>
      </div>

      <div className="flex flex-wrap">
        {sortedAndFilteredProducts.map(([key, prod]) => (
          <div
            key={key}
            className="w-[50%] md:w-[25%] border-[1px] border-gray-100 "
          >
            <div>
              <img src={prod.image} alt={prod.title} className="w-full" />
              <img
                onClick={() => toggleWishlist(key, prod)}
                className="relative -translate-y-8 left-[85%] sm:left-[90%] md:left-[85%] lg:left-[90%] w-5 h-5 fill-white cursor-pointer"
                src={
                  wishlist[key]
                    ? "https://res.cloudinary.com/dppnjyn8a/image/upload/v1751882673/rro2nzzvvy3lbzkbtbmk.png"
                    : "https://res.cloudinary.com/dppnjyn8a/image/upload/v1751882702/emr1pnwelzy5uzbrx1d7.png"
                }
                alt="like"
              />
            </div>
            <div className="py-2 -mt-5 lg:text-base text-sm px-2  flex flex-col justify-between min-h-20">
              <p className="font-medium">{prod.title}</p>
              <div className="flex justify-between items-center ">
                <strong>
                  ₹{" "}
                  {new Intl.NumberFormat("en-IN", {
                    minimumFractionDigits: 2,
                  }).format(prod.price)}
                </strong>{" "}
                <div className="underline text-xs">ADD TO CART</div>
              </div>
            </div>
          </div>
        ))}
        {sortedAndFilteredProducts.length === 0 && (
          <p className="p-6 text-gray-600 text-center w-full min-h-[80dvh]">
            No products match the selected filters.
          </p>
        )}
      </div>
      {toastMessage && <Toast message={toastMessage} onClose={clearToast} />}
    </div>
  );
}
