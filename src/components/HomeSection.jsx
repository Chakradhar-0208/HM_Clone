import { useParams } from "react-router-dom";
import { FiPlus, FiFilter } from "react-icons/fi";
import { useWishlist } from "./WishlistContext";
import React, { useState, useMemo } from "react";
import Toast from "./Toast";
const homeSections = {
  summerBedding: {
    title: "SUMMER BEDDING",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-27/7002E-V27-4x5.jpg?imwidth=4800",
    products: {
      cottonKingDuvet: {
        title: "COTTON DOUBLE/KING DUVET COVER SIZE",
        price: 2999.0,
        image:
          "	https://image.hm.com/assets/hm/58/9e/589e6616c6f4faad93385126af51526ee243f6d9.jpg?imwidth=1536",
      },
      patternedDuvet: {
        title: "PATTERNED DOUBLE/KING SIZE DUVET COVER SET",
        price: 1499.0,
        image:
          "	https://image.hm.com/assets/hm/9b/10/9b10ab1b6c7ad0ff4e846877619a4b1c02357476.jpg?imwidth=1536",
      },

      muslinGown: {
        title: "MUSLIN DRESSING GOWN",
        price: 1899.0,
        image:
          "https://image.hm.com/assets/hm/90/f6/90f619b1971c88455bc4768f576142786b963930.jpg?imwidth=1536 ",
      },
      muslinDoubleDuvet: {
        title: "MUSLIN DOUBLE DUVET COVER SET",
        price: 4999.0,
        image:
          "	https://image.hm.com/assets/hm/60/8b/608bc7e7f12ae5b4b5b593588f04211bc614b486.jpg?imwidth=1536",
      },

      satinPyjamas: {
        title: "SATIN PYJAMAS",
        price: 2499.0,
        image:
          "		https://image.hm.com/assets/hm/6f/f4/6ff4513ef5ae1f2936aa8be55d24889543e5467a.jpg?imwidth=1536",
      },
      cottonPillowCase: {
        title: "COTTON PILLOW CASE",
        price: 299.0,
        image:
          "	https://image.hm.com/assets/hm/d6/4d/d64d0d7f8e1621d9aa43ebad83e58e0136d7ee50.jpg?imwidth=1536",
      },
      finrgedBedSpread: {
        title: "FRINGED BEDSPREAD",
        price: 2699.0,
        image:
          "		https://image.hm.com/assets/hm/19/7c/197cae745dcc6d7925cd9d0f1e550de9706f9f1c.jpg?imwidth=1536",
      },
      leninBlendDouble: {
        title: "LENIN-BLEND DOUBLE/KING SIZE DUVET COVER SET",
        price: 5999.0,
        image:
          "https://image.hm.com/assets/hm/08/68/08680e7a778c2a1a00739e7a45e40ed1ac6b62df.jpg?imwidth=1536",
      },
    },
  },
  bedding: {
    title: "BEDDING",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Bedding_CE_wk23-28-2x3_1.jpg?imwidth=1536",
    products: {
      patternedCottonFitted: {
        title: "PATTERNED COTTON FITTED SHEET",
        price: 1899.0,
        image:
          "https://image.hm.com/assets/hm/61/74/6174ff611e42f396cbbe28e3102d4bb2e290a012.jpg?imwidth=1536",
      },
      cottonDoubleDuvet: {
        title: "COTTON DOUBLE DUVET COVER SET",
        price: 3499.0,
        image:
          "https://image.hm.com/assets/hm/43/4d/434ddd991b895085bb6e36d9cd0d8f5d8805304f.jpg?imwidth=1536",
      },
      patternedFleeceBlanket: {
        title: "PATTERNED FLEECE BLANKET",
        price: 799.0,
        image:
          "https://image.hm.com/assets/hm/36/55/365504b370d2b6a037e163884162b85449af11ba.jpg?imwidth=1536",
      },

      muslinDoubleDuvetCover: {
        title: "MUSLIN DOUBLE DUVET COVER SET",
        price: 4999.0,
        image:
          "https://image.hm.com/assets/hm/98/bf/98bffbab7d628929243c3f01515d693d6db0bafc.jpg?imwidth=1536",
      },
      patternedFleeceBlanketCart: {
        title: "PATTERNED FLEECE BLANKET",
        price: 799.0,
        image:
          "https://image.hm.com/assets/hm/15/62/1562f7ba604b75803ec80b6552d4a10331c30be2.jpg?imwidth=1536",
      },
      doubleCottonDuvet: {
        title: "DOUBLE/KING COTTON DUVET COVER SET",
        price: 4499.0,
        image:
          "https://image.hm.com/assets/hm/29/31/293119e86d2d5b39b255f7df36c311cecc18204f.jpg?imwidth=1536",
      },
      cottonMuslinBlanket: {
        title: "COTTON MUSLIN BLANKET",
        price: 1699.0,
        image:
          "https://image.hm.com/assets/hm/23/69/2369456d394e1e0ec350be58435972347841aa31.jpg?imwidth=1536",
      },
      fittedCottonSheet: {
        title: "FITTED COTTON SHEET",
        price: 749.0,
        image:
          "https://image.hm.com/assets/hm/a6/9f/a69f29c8388e7cc3956f7ad02c92f8b688268a55.jpg?imwidth=1536",
      },
    },
  },
  tableware: {
    title: "TABLEWARE",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Tableware_CE_wk23-28-2x3_3.jpg?imwidth=1536",
    products: {
      reactiveGlaze: {
        title: "REACTIVE-GLAZE STONEWARE MUG",
        price: 499.0,
        image:
          "https://image.hm.com/assets/hm/1c/46/1c4665c36c8bc2399f5d0f9d38a804d7a7366d25.jpg?imwidth=1536",
      },
      smallMotifDetail: {
        title: "SMALL MOTIF-DETAIL PORCELAIN PLATE",
        price: 399.0,
        image:
          "https://image.hm.com/assets/hm/a0/f4/a0f4d793b1d1b4f56da15749d8592764d927c01f.jpg?imwidth=1536",
      },
      stonewareServingBowl: {
        title: "STONEWARE SERVING BOWL",
        price: 699.0,
        image:
          "https://image.hm.com/assets/hm/7d/b4/7db4589c25caabff0f37a71480109c8e805840c9.jpg?imwidth=1536",
      },
      stonewarePlate: {
        title: "STONEWARE PLATE",
        price: 799.0,
        image:
          "https://image.hm.com/assets/hm/9d/86/9d86789b0b5fcaac5958ce3516dd0e4e82611284.jpg?imwidth=1536",
      },
      sunflowerShapedMidPlate: {
        title: "SUNFLOWE-SHAPED MID PLATE",
        price: 799.0,
        image:
          "https://image.hm.com/assets/hm/e8/8a/e88a8c645195c46c4b0dcda9f110f1a281673d55.jpg?imwidth=1536",
      },
      marbleSaltPepperShaped: {
        title: "MARBLE SALT AND PEPPER SHAKERS",
        price: 1499.0,
        image:
          "https://image.hm.com/assets/hm/33/0c/330ce4ba3c1ff0c15a8ecd8372904d5776fa686d.jpg?imwidth=1536",
      },
    },
  },
  cushionCovers: {
    title: "CUSHION COVERS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-27/7002A-V27-4x5.jpg?imwidth=4800",
    products: {
      patternedCushionCover: {
        title: "PATTERNED CUSHION COVER",
        price: 499.0,
        image:
          "https://image.hm.com/assets/hm/66/a6/66a681fe2ffee38a4dbab887ab86a4a4c07e7eec.jpg?imwidth=1536",
      },
      threePackStructureWeave: {
        title: "3-PACK STRUCTURE-WEAVE CUSHION COVER",
        price: 1899.0,
        image:
          "https://image.hm.com/assets/hm/aa/05/aa052d433d60f8a2f80921e380d2cd4875a650aa.jpg?imwidth=1536",
      },
      patternedCottonCover: {
        title: "PATTERENED COTTON CUSHION COVER",
        price: 1899.0,
        image:
          "https://image.hm.com/assets/hm/dd/17/dd173b0ca93baa3633b33d35c751a56886461c9d.jpg?imwidth=1536",
      },
      patternedCanvasCover: {
        title: "PATTERNED CANVAS CUSHION COVER",
        price: 399.0,
        image:
          "https://image.hm.com/assets/hm/3b/79/3b7970953bad0a9974b69939e98948a45883504a.jpg?imwidth=1536",
      },
      candyCaneCushion: {
        title: "CANDY CANE CUSHION",
        price: 1299.0,
        image:
          "https://image.hm.com/assets/hm/40/bc/40bc561fdc17782ebacc06454f1e60d2463cee68.jpg?imwidth=1536",
      },
      slubWeave: {
        title: "SLUB WEAVE CUSHION CIVER",
        price: 649.0,
        image:
          "https://image.hm.com/assets/hm/6f/df/6fdfa555642f21ca15565ea9bc16bc25445486f5.jpg?imwidth=1536 ",
      },
    },
  },
  homeDecorations: {
    title: "HOME DECORATIONS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Decorations_CE_wk23-28-2x3_4.jpg?imwidth=1536",
    products: {
      reedDiffuser: {
        title: "REED DIFFUSER",
        price: 1099.0,
        image:
          "https://image.hm.com/assets/hm/ad/f1/adf1e5eecc1c885ef6e7809af1842b8049fa0c27.jpg?imwidth=1536",
      },
      patternedCushion: {
        title: "PATTERNED CUSHIONE COVER",
        price: 499.0,
        image:
          "	https://image.hm.com/assets/hm/66/a6/66a681fe2ffee38a4dbab887ab86a4a4c07e7eec.jpg?imwidth=1536",
      },
      largeRattan: {
        title: "LARGE RATTAN PLANT POT HOLE",
        price: 2999.0,
        image:
          "	https://image.hm.com/assets/hm/91/8a/918ad26d77a1cc1269485833e38573577bae271e.jpg?imwidth=1536",
      },
      marbleBookend: {
        title: "MARBLE BOOKEND",
        price: 1699.0,
        image:
          "https://image.hm.com/assets/hm/3e/d8/3ed85daa635bf1eb7e494c363e31fbb4135bc7ae.jpg?imwidth=1536",
      },
      smallScentedCandle: {
        title: "SMALL SCENTED CANDLE",
        price: 299.0,
        image:
          "https://image.hm.com/assets/hm/9b/88/9b88369f5bc5f25c59e72c9b1c042730cc7f6259.jpg?imwidth=1536",
      },
      stoneware: {
        title: "STONEWARE CANDLESTICK",
        price: 1299.0,
        image:
          "	https://image.hm.com/assets/hm/35/6e/356e1b368fa7c6b9cf27806d8e63fa9c9ee13bb7.jpg?imwidth=1536",
      },
    },
  },
  towels: {
    title: "TOWELS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Towels_CE_wk23-28-2x3_5.jpg?imwidth=1536",
    products: {
      patternedBathTowel: {
        title: "PATTERNED BATH TOWEL",
        price: 799.0,
        image:
          "	https://image.hm.com/assets/hm/66/ba/66ba53e5528e45348d91ecab907cc96115f32da2.jpg?imwidth=1536",
      },
      bathTowel: {
        title: "BathTowel",
        price: 999.0,
        image:
          "	https://image.hm.com/assets/hm/4d/a2/4da2b74dfbadb9b1905489df835f37875a70c6c3.jpg?imwidth=1536 ",
      },
      twoPackCotton: {
        title: "2-PACK COTTION TERRY GUEST TOWELS",
        price: 699.0,
        image:
          "	https://image.hm.com/assets/hm/6d/42/6d42b0bd902b60b16c1eacfb5aa31f12220c3ea5.jpg?imwidth=1536",
      },
      patternedBathTowelLego: {
        title: "LEGO PATTERNED BATH TOWEL",
        price: 799.0,
        image:
          "	https://image.hm.com/assets/hm/6c/e7/6ce7eb0d0c67ec1b763dcfd720526a6f8fd3eb49.jpg?imwidth=1536",
      },
      terryBathSheet: {
        title: "TERRY BATH SHEET",
        price: 1299.0,
        image:
          "	https://image.hm.com/assets/hm/4b/a6/4ba6d6bb9f414ab8c9b3be644a1e8b324b7226a5.jpg?imwidth=1536",
      },
      hooededBathTowel: {
        title: "HOODED BATH TOWEL",
        price: 1299.0,
        image:
          "		https://image.hm.com/assets/hm/d9/c3/d9c3675ebe27930cbb1c2de1ce6a684de92c3035.jpg?imwidth=1536",
      },
    },
  },
};

const sectionTitles = {
  summerBedding: "SUMMER BEDDING",
  cushionCovers: "CUSHIONS & CUSHION COVERS",
  bedding: "BEDDING",
  tableware: "TABLEWARE",
  towels: "TOWELS",
  homeDecorations: "HOME DECORATIONS",
};

export default function HomeSection() {
  const { sectionId } = useParams();
  const section = homeSections[sectionId];
  if (!section) {
    return <div className="p-6 text-red-600">404: Section not Found</div>;
  }
  const product = section.products || {};
  const { wishlist, toggleWishlist, toastMessage, clearToast } = useWishlist();

  const [sortOption, setSortOption] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);
  const sortedAndFilteredProducts = useMemo(() => {
    let items = Object.entries(section.products || {});

    // Apply filter
    if (priceFilter === "below_1000") {
      items = items.filter(([_, prod]) => prod.price < 1000);
    } else if (priceFilter === "above_1000") {
      items = items.filter(([_, prod]) => prod.price >= 1000);
    }

    // Apply sort
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
          <div key={key} className="w-[50%] md:w-[25%]">
            <div>
              <img
                src={prod.image}
                alt={prod.title}
                className="w-full"
                loading="lazy"
              />

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
            <div className="  py-2 -mt-5 lg:text-base text-sm pl-2">
              <p className="font-medium">{prod.title}</p>
              <strong>
                ₹{" "}
                {new Intl.NumberFormat("en-IN", {
                  minimumFractionDigits: 2,
                }).format(prod.price)}
              </strong>
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
