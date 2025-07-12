import { useParams } from "react-router-dom";
import { FiPlus, FiFilter, FiChevronsUp } from "react-icons/fi";
import { useWishlist } from "./WishlistContext";
import React, { useState, useMemo } from "react";
import Toast from "./Toast";
const ladiesSections = {
  highSummer: {
    title: "HIGH SUMMER",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/women/start-page-assets/wk26/WS32I-4x5-women-startpage-wk26.jpg?imwidth=4800",
    products: {
      cottonStrappy: {
        title: "COTTON STRAPPY DRESS",
        price: 2999.0,
        image:
          "https://image.hm.com/assets/hm/7f/19/7f19e83a8645203490605bd36675a86e7fe6e8a0.jpg?imwidth=1536",
      },
      tennisSkirt: {
        title: "TENNIS SKIRT WITH SOFTMOVE",
        price: 1999.0,
        image:
          "https://image.hm.com/assets/hm/d5/1e/d51eab2ad13ed994b43f7fc0035a872e4158977d.jpg?imwidth=1536",
      },

      twopackMediumSuppport: {
        title: "2-PACK MEDIUM SUPPORT SPORTS BRAS",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/dc/f4/dcf4cecc3e16d39b433ca06c1549e80f8da8eccb.jpg?imwidth=1536",
      },
      braidedtrimDenimShorts: {
        title: "BRAIDED-TRIM DENIM SHORTS",
        price: 1999.0,
        image:
          "https://image.hm.com/assets/hm/d0/62/d06220bb84e318d6c0535122f550d6033d9b57e8.jpg?imwidth=1536",
      },

      denimShift: {
        title: "DENIM SHIFT DRESS",
        price: 2299.0,
        image:
          "https://image.hm.com/assets/hm/d0/0b/d00b6355477aaf4e9ee701698039a96ab1ba80d2.jpg?imwidth=1536",
      },
      flaredLeggings: {
        title: "FLARED SPORTS LEGGINGS WITH SOFTMOVE",
        price: 2799.0,
        image:
          "https://image.hm.com/assets/hm/42/b5/42b5a3059b7c5e82d37f442961228924768700f4.jpg?imwidth=1536",
      },
      boxyStyleVest: {
        title: "BOXY STYLE SPORTS VEST TOP WITH DRYMOVE",
        price: 799.0,
        image:
          "https://image.hm.com/assets/hm/7d/79/7d79ea6388ce007033440f5547b36d1b1648920c.jpg?imwidth=1536",
      },
      overSizedTees: {
        title: "OVERSIZED T-SHIRT",
        price: 999.0,
        colors: ["red", "blue", "white"],
        image:
          "https://image.hm.com/assets/hm/03/c9/03c9deb057b0cbfbd97872fffb08cc1d4fe3e73b.jpg?imwidth=1536",
      },
    },
  },
  modernCountrySide: {
    title: "MODERN COUNTRYSIDE",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/women/start-page-assets/wk26/DS32H-4x5-women-startpage-wk26.jpg?imwidth=4800",
    products: {
      textJerseyTop: {
        title: "TEXTURED JERSEY TOP",
        price: 999.0,
        image:
          "https://image.hm.com/assets/hm/9e/10/9e1044eb75c9f1c5ada03ce138820e5a5ca4e8f7.jpg?imwidth=1536",
      },

      smockedPlum: {
        title: "SMOCKED PLUMETI BLOUSE",
        price: 1999.0,
        image:
          "https://image.hm.com/assets/hm/eb/cb/ebcb59de2f5cef61257965dccf6d85af1b084fb5.jpg?imwidth=1536",
      },
      detailPop: {
        title: "TIE-DETAIL POPLIN DRESS",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/4b/0a/4b0a371665a760f1446d42d34bbaefe6eb87d29f.jpg?imwidth=1536",
      },

      smockDetail: {
        title: "SMOCK DETAIL DRESS",
        price: 1999.0,
        image:
          "https://image.hm.com/assets/hm/b7/c7/b7c7fbfa950411b4b5c18c122f280e73f68b20e6.jpg?imwidth=1536",
      },
      frillPlumeti: {
        title: "FRILL-TRIMMED PLUMETI SKORT",
        price: 1999.0,
        image:
          "https://image.hm.com/assets/hm/6d/f3/6df3b83d00d86bfa028d32afc7819fd82f631f90.jpg?imwidth=1536",
      },
      jackWeave: {
        title: "JACQUARD-WEAVE STRAPPY DRESS",
        price: 2299.0,
        image:
          "https://image.hm.com/assets/hm/f7/e2/f7e243d21e190ba2e347a7380dd3c8dd6346d430.jpg?imwidth=1536",
      },
      flaredHemCotton: {
        title: "FLARED-HEM COTTON DRESS",
        price: 1499.0,
        colors: ["red", "blue", "white"],
        image:
          "https://image.hm.com/assets/hm/f5/a5/f5a5393a005f95fe52dac77f932fd1a371149c10.jpg?imwidth=1536",
      },
      embroideryDetail: {
        title: "EMBROIDERY-DETAIL DRESS",
        price: 2299.0,
        colors: ["red", "blue", "white"],
        image:
          "https://image.hm.com/assets/hm/9e/cf/9ecf264b09fd20ac0fb41093cba259c59854d32a.jpg?imwidth=1536",
      },
    },
  },
  tops: {
    title: "TOPS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk26/Tops-CE-wk26.jpg?imwidth=1536",
    products: {
      laceTrimmed: {
        title: "LACE-TRIMMED POINTELLE T-SHIRT",
        price: 799.0,
        image:
          "https://image.hm.com/assets/hm/d4/8d/d48d744234d0d62070e65d98ebfad9f8c773a1a2.jpg?imwidth=1536",
      },
      thongBody: {
        title: "THONG BODY",
        price: 699.0,
        image:
          "https://image.hm.com/assets/hm/7a/99/7a99414ce0afeca8d96f05be30fd9599e59cbb33.jpg?imwidth=1536",
      },
      longWaistCoat: {
        title: "LONG WAIST COAT",
        price: 3299.0,
        image:
          "https://image.hm.com/assets/hm/78/62/7862340c9ae2fad579b0d0732233014a133d40cd.jpg?imwidth=1536",
      },
      ribbedTee: {
        title: "RIBBED T-SHIRT",
        price: 699.0,
        image:
          "https://image.hm.com/assets/hm/cb/ab/cbab0e8bdb43c8892724c65278b350d011703e63.jpg?imwidth=1536 ",
      },
      cottonTee: {
        title: "COTTON T-SHIRT",
        price: 699.0,
        image:
          "https://image.hm.com/assets/hm/7a/4a/7a4a2c6e4850b3d8f10834040af2f79ca0584b80.jpg?imwidth=1536",

        //
      },
      frillPointelleKnit: {
        title: "FRILL-TRIMMED POINTELLE-KNITTED",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/3d/99/3d9939a7961c79f6666a464adffde8c6418f3f28.jpg?imwidth=1536",
      },
    },
  },
  dresses: {
    title: "DRESSES",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk26/Dresses-CE-wk26.jpg?imwidth=1536",
    products: {
      flaredSkirt: {
        title: "FLARED-SKIRT COTTON DRESS",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/e4/e3/e4e3a52016071db7561418f47646037827e44bc7.jpg?imwidth=1536",
      },
      smockedStrappy: {
        title: "SMOCKED STRAPPY DRESS",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/76/62/76628efe80ad2d8f527fa133f31ce303651b2e2a.jpg?imwidth=1536",
      },
      crinkledStrappy: {
        title: "CRINKLED STRAPPY DRESS",
        price: 2299.0,
        image:
          "https://image.hm.com/assets/hm/47/f1/47f19404ce6a8b98c854aebe590b2260b7c56868.jpg?imwidth=1536",
      },
      smockedStrappyBlue: {
        title: "SMOCKED STRAPPY DRESS",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/a1/b2/a1b21f7f9d119a02db7ceba8fed9391fc89775a0.jpg?imwidth=1536",
      },
      tbeltDenim: {
        title: "THE-DRESS DENIM DRESS",
        price: 2499.0,
        colors: ["red", "blue", "white"],
        image:
          "https://image.hm.com/assets/hm/47/1b/471b07fbb0135cd0ab51f8f27fef7112d5e35ea4.jpg?imwidth=1536",
      },
      psleeved: {
        title: "PUFF-SLEEVED COTTON DRESS",
        price: 2299.0,
        image:
          "https://image.hm.com/assets/hm/3c/c6/3cc6b29e55925fa0c8689444880998c2ab4993ef.jpg?imwidth=1536",
      },
    },
  },
  trousers: {
    title: "TROUSERS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk26/Trousers-CE-wk26.jpg?imwidth=1536",
    products: {
      jerseyTrousers: {
        title: "JERSEY TROUSERS",
        price: 999.0,
        image:
          "https://image.hm.com/assets/hm/5d/af/5daf807c28337939061e2665f6847d883ff87317.jpg?imwidth=1536",
      },
      wideJoggers: {
        title: "WIDE JOGGERS",
        price: 999.0,
        image:
          "https://image.hm.com/assets/hm/38/af/38afe86b53c56e1ed84f26669a90c1591807a8a7.jpg?imwidth=1536",
      },
      wPullTrousers: {
        title: "WIDE PULL-ON TROUSERS",
        price: 999.0,
        image:
          " https://image.hm.com/assets/hm/c9/a0/c9a01867b9ba5a92aa19a7939afecf95fe1f2769.jpg?imwidth=1536",
      },
      linenBlendTrousers: {
        title: "LINEN-BLEND TROUSERS",
        price: 1899.0,
        image:
          "https://image.hm.com/assets/hm/31/ec/31eccef9a0ffb386a0fc216a0f8325cae4855ee5.jpg?imwidth=1536",
      },
      seersucker: {
        title: "SEERSUCKER DRAWSTRING TROUSERS",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/e0/a2/e0a229060dc1baf610dbbd21ad9c9c02865819d9.jpg?imwidth=1536",
      },
      tailoredCigar: {
        title: "TAILORED CIGARETTE TROUSERS",
        price: 1999.0,
        image:
          "https://image.hm.com/assets/hm/33/aa/33aa12154f61ae204697d75d154355ce2082f4d8.jpg?imwidth=1536",
      },
    },
  },
  shirts: {
    title: "SHIRTS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk26/Shirts-CE-wk26.jpg?imwidth=1536",
    products: {
      linenBlendBlouse: {
        title: "LINEN-BLEND BLOUSE",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/b7/21/b7217ed87f4113e0da06a8eb0ade9e41e45de039.jpg?imwidth=1536",
      },
      crinkledViscose: {
        title: "CRINCKLED VISCOSE SHIRT",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/54/0e/540e52be8f9bdd5cb223fc124f5792bd3b752b05.jpg?imwidth=1536 ",
      },
      cottonPoplin: {
        title: "COTTON POPLIN SHIRT",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/e3/cf/e3cf1db310fa85c0c6374382687871c3fd305064.jpg?imwidth=1536",
      },
      linenBlendShirt: {
        title: "LINEN-BLEND SHIRT",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/67/bb/67bb49e662e0ca73742e1496692860f900c9c4b2.jpg?imwidth=1536",
      },
      linenShirt: {
        title: "LINEN SHIRT",
        price: 2199.0,
        image:
          "https://image.hm.com/assets/hm/99/b8/99b8838a0d5db82c40e27184ae06ae2dc6a1e956.jpg?imwidth=1536",
      },
      oxfordShirt: {
        title: "OXFORD SHIRT",
        price: 2199.0,
        image:
          "https://image.hm.com/assets/hm/f1/ae/f1ae7180477826c50ca1f0c4673e28d3cd9a690b.jpg?imwidth=1536",
      },
    },
  },
};

const sectionTitles = {
  highSummer: "NEW IN",
  modernCountrySide: "NEW SEASON ROMANCE",
  tops: "WOMEN'S TOPS & T-SHIRTS",
  dresses: "DRESSES",
  trousers: "WOMEN'S TROUSERS & LEGGINGS",
  shirts: "WOMEN'S BLOUSES & SHIRTS",
};

export default function LadiesSection() {
  const { sectionId } = useParams();
  const section = ladiesSections[sectionId];
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
