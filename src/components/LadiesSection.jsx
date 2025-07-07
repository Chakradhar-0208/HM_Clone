import { useParams } from "react-router-dom";
import { useState } from "react";
const ladiesSections = {
  highSummer: {
    title: "HIGH SUMMER",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/women/start-page-assets/wk26/WS32I-4x5-women-startpage-wk26.jpg?imwidth=4800",
    products: {
      cottonStrappy: {
        title: "COTTON STRAPPY DRESS",
        price: "2,999.00",
        image:
          "https://image.hm.com/assets/hm/7f/19/7f19e83a8645203490605bd36675a86e7fe6e8a0.jpg?imwidth=1536",
        type: "clothes",
      },
      tennisSkirt: {
        title: "TENNIS SKIRT WITH SOFTMOVE",
        price: "1,999.00",
        image:
          "https://image.hm.com/assets/hm/d5/1e/d51eab2ad13ed994b43f7fc0035a872e4158977d.jpg?imwidth=1536",
        type: "sport",
      },

      twopackMediumSuppport: {
        title: "2-PACK MEDIUM SUPPORT SPORTS BRAS",
        price: "1,499.00",
        image:
          "https://image.hm.com/assets/hm/dc/f4/dcf4cecc3e16d39b433ca06c1549e80f8da8eccb.jpg?imwidth=1536",
        type: "sport",
      },
      braidedtrimDenimShorts: {
        title: "BRAIDED-TRIM DENIM SHORTS",
        price: "1,999.00",
        image:
          "https://image.hm.com/assets/hm/d0/62/d06220bb84e318d6c0535122f550d6033d9b57e8.jpg?imwidth=1536",
        type: "clothes",
      },
      // SPORTS

      denimShift: {
        title: "DENIM SHIFT DRESS",
        price: "2,299.00",
        image:
          "https://image.hm.com/assets/hm/d0/0b/d00b6355477aaf4e9ee701698039a96ab1ba80d2.jpg?imwidth=1536",
        type: "clothes",
      },
      flaredLeggings: {
        title: "FLARED SPORTS LEGGINGS WITH SOFTMOVE",
        price: "2,799.00",
        image:
          "https://image.hm.com/assets/hm/42/b5/42b5a3059b7c5e82d37f442961228924768700f4.jpg?imwidth=1536",
        type: "sport",
      },
      boxyStyleVest: {
        title: "BOXY STYLE SPORTS VEST TOP WITH DRYMOVE",
        price: "799.00",
        image:
          "https://image.hm.com/assets/hm/7d/79/7d79ea6388ce007033440f5547b36d1b1648920c.jpg?imwidth=1536",
        type: "sport",
      },
      overSizedTees: {
        title: "OVERSIZED T-SHIRT",
        price: 999.0,
        colors: ["red", "blue", "white"],
        image:
          "https://image.hm.com/assets/hm/03/c9/03c9deb057b0cbfbd97872fffb08cc1d4fe3e73b.jpg?imwidth=1536",
        type: "clothes",
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
        price: "999.00",
        image:
          "https://image.hm.com/assets/hm/9e/10/9e1044eb75c9f1c5ada03ce138820e5a5ca4e8f7.jpg?imwidth=1536",
      },

      smockedPlum: {
        title: "SMOCKED PLUMETI BLOUSE",
        price: "1,999.00",
        image:
          "https://image.hm.com/assets/hm/eb/cb/ebcb59de2f5cef61257965dccf6d85af1b084fb5.jpg?imwidth=1536",
        type: "sport",
      },
      detailPop: {
        title: "TIE-DETAIL POPLIN DRESS",
        price: "1,499.00",
        image:
          "https://image.hm.com/assets/hm/4b/0a/4b0a371665a760f1446d42d34bbaefe6eb87d29f.jpg?imwidth=1536",
        type: "clothes",
      },
      // SPORTS

      smockDetail: {
        title: "SMOCK DETAIL DRESS",
        price: "1,999.00",
        image:
          "https://image.hm.com/assets/hm/b7/c7/b7c7fbfa950411b4b5c18c122f280e73f68b20e6.jpg?imwidth=1536",
        type: "clothes",
      },
      frillPlumeti: {
        title: "FRILL-TRIMMED PLUMETI SKORT",
        price: "1,999.00",
        image:
          "https://image.hm.com/assets/hm/6d/f3/6df3b83d00d86bfa028d32afc7819fd82f631f90.jpg?imwidth=1536",
        type: "sport",
      },
      jackWeave: {
        title: "JACQUARD-WEAVVE STRAPPY DRESS",
        price: "2,299.00",
        image:
          "https://image.hm.com/assets/hm/f7/e2/f7e243d21e190ba2e347a7380dd3c8dd6346d430.jpg?imwidth=1536",
        type: "sport",
      },
      flaredHemCotton: {
        title: "FLARED-HEM COTTON DRESS",
        price: "1,499.00",
        colors: ["red", "blue", "white"],
        image:
          "https://image.hm.com/assets/hm/f5/a5/f5a5393a005f95fe52dac77f932fd1a371149c10.jpg?imwidth=1536",
        type: "clothes",
      },
      embroideryDetail: {
        title: "EMBROIDERY-DETAIL DRESS",
        price: "2,299.00",
        colors: ["red", "blue", "white"],
        image:
          "https://image.hm.com/assets/hm/9e/cf/9ecf264b09fd20ac0fb41093cba259c59854d32a.jpg?imwidth=1536",
        type: "clothes",
      },
    },
  },
  Tops: {
    title: "TOPS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk26/Tops-CE-wk26.jpg?imwidth=1536",
  },
  dresses: {
    title: "DRESSES",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk26/Dresses-CE-wk26.jpg?imwidth=1536",
  },
  trousers: {
    title: "TROUSERS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk26/Trousers-CE-wk26.jpg?imwidth=1536",
  },
  shirts: {
    title: "SHIRTS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk26/Shirts-CE-wk26.jpg?imwidth=1536",
  },
};

export default function LadiesSection() {
  const { sectionId } = useParams();
  const section = ladiesSections[sectionId];
  if (!section) {
    return <div className="p-6 text-red-600">404: Section not Found</div>;
  }
  const product = section.products || {};
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (key) => {
    setWishlist((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  console.log(ladiesSections);
  return (
    <div className="lg:mt-[130px]">
      <div className="p-6">
        <h1 className="font-bold ">NEW IN</h1>
        <div className="my-5 flex gap-5 font-medium">
          <p className="border px-2 py-1 text-sm bg-black text-white">
            VIEW ALL
          </p>
          <p className="border px-2 py-1 text-sm">CLOTHES</p>
          <p className="border px-2 py-1 text-sm">SPORT</p>
        </div>
        <div className="flex justify-between">
          <p>SORT BY</p>
          <p>FILTER</p>
        </div>
      </div>

      <div className="flex flex-wrap">
        {Object.entries(product).map(([key, product]) => (
          <div key={key} className="w-[50%] md:w-[25%]">
            <div>
              <img src={product.image} alt={product.title} className="w-full" />
              <img
                onClick={() => {
                  toggleWishlist(key);
                }}
                className="relative  -translate-y-8 left-[85%] sm:left-[90%] md:left-[85%] lg:left-[90%] w-5 h-5 fill-white cursor-pointer"
                src={
                  wishlist[key]
                    ? "https://res.cloudinary.com/dppnjyn8a/image/upload/v1751882673/rro2nzzvvy3lbzkbtbmk.png"
                    : "https://res.cloudinary.com/dppnjyn8a/image/upload/v1751882702/emr1pnwelzy5uzbrx1d7.png"
                }
                alt="like--v1"
              ></img>
            </div>
            <div className="  py-2 -mt-5 lg:text-base text-sm pl-2">
              <p className="font-medium">{product.title}</p>
              <strong>₹{product.price}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
