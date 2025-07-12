import { useParams } from "react-router-dom";
import { FiPlus, FiFilter } from "react-icons/fi";
import { useWishlist } from "./WishlistContext";
import Toast from "./Toast";
const KidsSections = {
  new_arrivals: {
    title: "NEW ARRIVALS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/kids/start-page-assets/w27/KS32L-2x3-NS-kids-start-page-prio-week-27.jpg",
    products: {
      patternedCottonDress: {
        title: "PATTERNED COTTON DRESS",
        price: "399.00",
        image:
          "	https://image.hm.com/assets/hm/14/03/140384fb3164ccd028b9f5e848e2ccf8f484dec1.jpg?imwidth=1536",
      },
      flaredLeggins: {
        title: "FLARED LEGGINGS",
        price: "799.00",
        image:
          "https://image.hm.com/assets/hm/d8/38/d838664ef4570f1e59ad476178c330476e14eda1.jpg?imwidth=1536",
      },

      superStretchFlared: {
        title: "SUPERSTRECH FLARE LEG JEANS",
        price: "999.00",
        image:
          "https://image.hm.com/assets/hm/f1/f2/f1f2b3ecccd703423712e07f4120de3293bec568.jpg?imwidth=1536",
      },
      ribbedCottonTop: {
        title: "RIBBED COTTON TOP",
        price: "699.00",
        image:
          "	https://image.hm.com/assets/hm/63/fe/63feb582f198acece99df33db5b12520ee8b9799.jpg?imwidth=1536",
      },

      aLineDress: {
        title: "A-LINE DRESS",
        price: "1,999.00",
        image:
          "	https://image.hm.com/assets/hm/d6/7c/d67cd5fa0de3a4cf424b3c97fbdd902b23ce9557.jpg?imwidth=1536",
      },
      frilTrimmedStrap: {
        title: "FRILL-TRIMMED STRAPY DRESS",
        price: "1,999.00",
        image:
          "	https://image.hm.com/assets/hm/28/ca/28ca3a4a7be65ed4bb29441131d3207b7ce7549d.jpg?imwidth=1536",
      },
      twoPackRibbedCotton: {
        title: "TWO PACK RIBBED COTTON TOPS",
        price: "1,499.00",
        image:
          "https://image.hm.com/assets/hm/86/55/8655d7b07765ef09d194382c0af9b32084f42627.jpg?imwidth=1536",
      },
      M: {
        title: "RIBBED COTTON TOP",
        price: "699.00",
        image:
          "https://image.hm.com/assets/hm/bf/48/bf48973c8a05edc67161d4ceeed51feb9b4c2d06.jpg?imwidth=1536",
      },
    },
  },
  legoHome: {
    title: "LEGO HOME",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/kids/start-page-assets/w27/KS32L-2x3-NS-kids-start-page-prio-week-27.jpg",
    products: {
      canvasRug: {
        title: "CANVAS RUG",
        price: "4,999.00",
        image:
          "https://image.hm.com/assets/hm/79/68/796869815f4a0f9dcdcbeb581f50e628e65caf0a.jpg?imwidth=1536",
      },
      childrensPoster: {
        title: "CHILDREN'S POSTER HANGER AND POSTER",
        price: "999.00",
        image:
          "https://image.hm.com/assets/hm/87/0d/870d86ce708b54d329d7fcdc590ac5584f34d6b7.jpg?imwidth=1536",
      },

      canvasToyStorage: {
        title: "CANVAS TOY STORAGE BASKET",
        price: "1,399.00",
        image:
          "https://image.hm.com/assets/hm/cc/5d/cc5d54cfa465513db1c4d6177fa895fab6458214.jpg?imwidth=1536",
      },
      patternedDeskPad: {
        title: "PATTERNED DESK PAD",
        price: "799.00",
        image:
          "https://image.hm.com/assets/hm/27/c6/27c60281673b33b306e8037a1fed24e034b13747.jpg?imwidth=1536",
      },

      PatternedBathTowel: {
        title: "PATTERNED BATH TOWEL",
        price: "799.00",
        image:
          "https://image.hm.com/assets/hm/6c/e7/6ce7eb0d0c67ec1b763dcfd720526a6f8fd3eb49.jpg?imwidth=1536",
      },
      patternedGymBag: {
        title: "PATTERNED GYM BAG",
        price: "799.00",
        image:
          "https://image.hm.com/assets/hm/3c/c7/3cc7a7ba5f74a344d8066bc8a1f7206fc48a0e08.jpg?imwidth=1536",
      },
      patternedCushionCover: {
        title: "PATTERNED CUSHION COVER",
        price: "399.00",
        image:
          "https://image.hm.com/assets/hm/a8/5e/a85ec2525a52ce83c0b00ee444ece916fa600e42.jpg?imwidth=1536",
      },
      patternedBathTowel: {
        title: "PATTERNED BATH TOWEL",
        price: "799.00",
        image:
          "https://image.hm.com/assets/hm/9a/52/9a529fff92031e98b8f2bb6cdbd293bcc8096734.jpg?imwidth=1536",
      },
    },
  },
  playful_statements: {
    title: "PLAYFUL STATEMENTS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/MS32E1-2x3-wk27.jpg?imwidth=4800",
    products: {
      printedTee: {
        title: "PRINTED T-SHIRT",
        price: "399.00",
        image:
          "https://image.hm.com/assets/hm/e6/79/e6794dbd62cf4968b9e25fd8d4cf6013f4942c27.jpg?imwidth=1536",
      },

      twillChinos: {
        title: "TWILL CHINOS",
        price: "699.00",
        image:
          "https://image.hm.com/assets/hm/b6/e3/b6e3664161b90896c19fddc1a15a9ef4424a22ad.jpg?imwidth=1536",
      },
      printedTeePattern: {
        title: "PRINTED T-SHIRT",
        price: "399.00",
        image:
          "https://image.hm.com/assets/hm/d5/dc/d5dc31b9800d3acd15dc77079f6c5bf6a0d8609a.jpg?imwidth=1536",
      },
      cap: {
        title: "CAP",
        price: "799.00",
        image:
          "https://image.hm.com/assets/hm/bb/d2/bbd26feb1837ab893a61140a1734c329ac8b36da.jpg?imwidth=1536",
      },

      fivePaclJerseyTee: {
        title: "5-PACK JERSEY T-SHIRT",
        price: "1,999.00",
        image:
          "	https://image.hm.com/assets/hm/0c/00/0c00e957a33af24f5dc93590b980796f9940f466.jpg?imwidth=1536",
      },
      texturedKnit: {
        title: "TEXTURED-KNIT SHIRT",
        price: "1,499.00",
        image:
          "https://image.hm.com/assets/hm/11/a6/11a663482d1449cc70d5775a99d43707d6ab63b7.jpg?imwidth=1536",
      },

      printedVestTop: {
        title: "PRINTED VEST TOP",
        price: "399.00",
        image:
          "https://image.hm.com/assets/hm/fc/9c/fc9cca39ede33eaaf0afea9b83c058f530ec05fd.jpg?imwidth=1536",
      },
      printedSweatShorts: {
        title: "PRINTED SWEATSHORTS",
        price: "699.00",
        image:
          "https://image.hm.com/assets/hm/b3/f4/b3f4635093506af6fac9a9dacff662d8701292fc.jpg?imwidth=1536",
      },
    },
  },

  baby: {
    title: "BABY CLOTHES",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/Jeans-CE-wk-27-30.jpg??imwidth=1536",
    products: {
      threePieceCottonSet: {
        title: "3-PIECE COTTION SET",
        price: "1,799.00",
        image:
          "https://image.hm.com/assets/hm/ca/40/ca40d66cb54d86b578e4ed544aa09c2051e2eabc.jpg?imwidth=1536",
      },
      printedCottonDress: {
        title: "PRINTED COTTON DRESS",
        price: "399.00",
        image:
          "https://image.hm.com/assets/hm/ce/1c/ce1cb680398fee38409f7f765f229af5e1d3cee2.jpg?imwidth=1536",
      },
      slimFitJeans: {
        title: "SLIM FIT JEANS",
        price: "799.00",
        image:
          "https://image.hm.com/assets/hm/72/cf/72cfbd35cc112be50e5181ed7e68b76592efdc00.jpg?imwidth=1536",
      },
      twoPieceSet: {
        title: "2-PIECE SET",
        price: "999.00",
        image:
          "https://image.hm.com/assets/hm/ce/cf/cecf4365db692aa42dd3c2508614366da387b4c8.jpg?imwidth=1536",
      },
      denimDungaree: {
        title: "DENIM DUNGAREE SHORTS",
        price: "1,499.00",
        image:
          "https://image.hm.com/assets/hm/07/a2/07a2b980aede93da7413aab8c6e5809b7e196d27.jpg?imwidth=1536",

        //
      },
      printedottonTee: {
        title: "PRINTED COTTION",
        price: "399.00",
        image:
          "https://image.hm.com/assets/hm/22/1b/221bbbd79bfb66b0d82f141bdfc3c628bf95a84d.jpg?imwidth=1536",
      },
    },
  },
  kids2_8: {
    title: "SHIRTS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/Shirts-CE-wk-27-30.jpg?imwidth=1536",
    products: {
      flaredLegJeans: {
        title: "FLARED LEG JEANS",
        price: "1,499.00",
        image:
          "https://image.hm.com/assets/hm/bc/b5/bcb58ef8779c1ef9838eb5c2ec9b5e26316704d8.jpg?imwidth=1536",
      },
      threePackJoggers: {
        title: "3-PACK JOGGERS",
        price: "1,999.00",
        image:
          "https://image.hm.com/assets/hm/63/05/6305b20c8ee2c18647563548c79d157a3836126f.jpg?imwidth=1536",
      },
      wideLegPaperBag: {
        title: "WIDE LEG PAPER BAG JEANS",
        price: "1,499.00",
        image:
          "https://image.hm.com/assets/hm/63/5c/635cdadd375a91edba1ad7916f1a066bff5cd122.jpg?imwidth=1536",
      },
      twoPackLeggings: {
        title: "2-PACK LEGGINGS",
        price: "799.00",
        image:
          "https://image.hm.com/assets/hm/c6/b8/c6b89b8e9629918ec9ee8586323c8efa99201a19.jpg?imwidth=1536",
      },
      fivePackJerseyTops: {
        title: "5-PACK JERSEY TOPS",
        price: "1,999.00",
        image:
          "https://image.hm.com/assets/hm/fa/65/fa65b9b320757ce3608df86a09cb71ac3e33162b.jpg?imwidth=1536",
      },
      brushedInsideJogger: {
        title: "BRUSHED-INSIDE JOGGERS",
        price: "799.00",
        image:
          "https://image.hm.com/assets/hm/51/24/512401ba78a770ab3774d01ed456e80d4fe2e6fe.jpg?imwidth=1536",
      },
    },
  },
  kids9_14: {
    title: "kids9_14",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/Trousers-CE-wk-27-30.jpg?imwidth=1536",
    products: {
      printedCottonTee: {
        title: "PRINTED COTTON T-SHIRT",
        price: "999.00",
        image:
          "https://image.hm.com/assets/hm/2f/d6/2fd66839a22d703aa41447a31373f099aa4e18ec.jpg?imwidth=1536",
      },
      meshBasketballVest: {
        title: "MESH BASKETBALL SET",
        price: "999.00",
        image:
          "https://image.hm.com/assets/hm/50/24/5024cbb6b864343abf396d296e0fd9b02e7eb638.jpg?imwidth=1536",
      },
      printMotifTee: {
        title: "PRINTE-MOTIF T-SHIRT",
        price: "699.00",
        image:
          "https://image.hm.com/assets/hm/f3/32/f33211b761c1b8892b81401f45d505871d5fa202.jpg?imwidth=1536",
      },
      twoPackCottonLeg: {
        title: "2-PACK COTTON LEGGNINGS",
        price: "1,299.00",
        image:
          "https://image.hm.com/assets/hm/ed/bc/edbce1b7eaec49e7583a9b7ba43c64b991cd48ca.jpg?imwidth=1536",
      },
      denimLookSkirt: {
        title: "DENIM LOOK SKIRT",
        price: "1,299.00",
        image:
          "https://image.hm.com/assets/hm/34/3d/343dab1cfe61a06dc7e12f79c14fa07013861f05.jpg?imwidth=1536",
      },
      meshBasketballShorts: {
        title: "MESH BASKETBALL SHORTS",
        price: "1,299.00",
        image:
          "https://image.hm.com/assets/hm/39/a3/39a3cc870749ae20e0caf444a5664ca0b72e1612.jpg?imwidth=1536",
      },
    },
  },
  newborn: {
    title: "NEWBORN",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/T-shirt-Tanks-CE-wk-27-30.jpg?imwidth=1536",
    products: {
      cottonMuslinRomper: {
        title: "COTTON MUSLIN ROMPER SET",
        price: "999.00",
        image:
          "	https://image.hm.com/assets/hm/55/91/5591dad61eeb4fb9e2c6fdc94e9ce75b8fc5779d.jpg?imwidth=1536",
      },
      twoPieceCottonJersey: {
        title: "2-PIECE COTTON JERSEY SET",
        price: "999.00",
        image:
          "https://image.hm.com/assets/hm/49/95/4995f779dcecab20596e542b6b30e422106b4301.jpg?imwidth=1536",
      },
      cottonDungaree: {
        title: "COTTON DUNGAREE SET",
        price: "1,2999.00",
        image:
          "	https://image.hm.com/assets/hm/8b/a9/8ba952fc3c7b07dd12b07b1d47badcef850823f7.jpg?imwidth=1536",
      },
      eightPieceBodysuit: {
        title: "8-PIECE BODYSUIT AND TROUSER SET",
        price: "2,299.00",
        image:
          "	https://image.hm.com/assets/hm/37/84/37843ff9ddbb823de7dc1db815490b6088b72871.jpg?imwidth=1536",
      },
      twoPieceDungarees: {
        title: "2-PIECE DUNGAREES AND BODYSUIT",
        price: "1,999.00",
        image:
          "	https://image.hm.com/assets/hm/2c/65/2c650a17052d10859753f425669ffc766dab8529.jpg?imwidth=1536",
      },
      patternedSleepsuit: {
        title: "PATTERNED SLEEPSUIT",
        price: "799",
        image:
          "https://image.hm.com/assets/hm/dd/e8/dde84f6883cff04e7f3e690264e672745009e9ec.jpg?imwidth=1536",
      },
    },
  },
};

const sectionTitles = {
  playful_statements: "PLAYFUL STATEMENTS",
  new_arrivals: "BOHO SUMMER",
  baby: "BABY CLOTHES",
  kids2_8: "CLOTHING 2-8Y",
  kids9_14: "CLOTHING 9-14Y",
  newborn: "NEWBORN BABY CLOTHES",
  legoHome: "LEGO® Collection",
};

export default function MenSection() {
  const { sectionId } = useParams();
  const section = KidsSections[sectionId];
  if (!section) {
    return (
      <div className="lg:mt-[130px] p-6 text-red-600">
        404: Section not Found
      </div>
    );
  }

  const product = section.products || {};
  const { wishlist, toggleWishlist, toastMessage, clearToast } = useWishlist();
  return (
    <div className="lg:mt-[130px]">
      <div className="p-6">
        <h1 className="font-bold overflow-hidden text-4xl">
          {sectionTitles[sectionId]?.toUpperCase()}
        </h1>
        <div className="flex justify-between mt-8">
          <p className="flex justify-between items-center gap-2">
            SORT BY <FiPlus className="w-5 h-5" />
          </p>
          <p className="flex justify-between items-center gap-2">
            FILTER <FiFilter className="w-4 h-5" />
          </p>
        </div>
      </div>

      <div className="flex flex-wrap">
        {Object.entries(product).map(([key, prod]) => (
          <div key={key} className="w-[50%] md:w-[25%]">
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
            <div className="py-2 -mt-5 lg:text-base text-sm pl-2">
              <p className="font-medium">{prod.title}</p>
              <strong>{`₹ ${prod.price}`}</strong>
            </div>
          </div>
        ))}
      </div>
      {toastMessage && <Toast message={toastMessage} onClose={clearToast} />}
    </div>
  );
}
