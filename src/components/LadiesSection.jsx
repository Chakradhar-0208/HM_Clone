import { useParams } from "react-router-dom";
import { useState } from "react";
const ladiesSections = {
  resortEssentials: {
    title: "RESORT ESSENTIALS",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/women/start-page-assets/wk26/WS32I-4x5-women-startpage-wk26.jpg?imwidth=4800",
    products: {
      overSizedTees: {
        title: "OVERSIZED T-SHIRT",
        price: 999.0,
        colors: ["red", "blue", "white"],
        image:
          "https://image.hm.com/assets/hm/03/c9/03c9deb057b0cbfbd97872fffb08cc1d4fe3e73b.jpg?imwidth=1536",
      },
      cottonStrappy: {
        title: "COTTON STRAPPY DRESS",
        price: "2,999.00",
        image:
          "https://image.hm.com/assets/hm/7f/19/7f19e83a8645203490605bd36675a86e7fe6e8a0.jpg?imwidth=1536",
      },
      denimShift: {
        title: "DENIM SHIFT DRESS",
        price: "2,299.00",
        image:
          "https://image.hm.com/assets/hm/d0/0b/d00b6355477aaf4e9ee701698039a96ab1ba80d2.jpg?imwidth=1536",
      },
      braidedtrimDenimShorts: {
        title: "BRAIDED-TRIM DENIM SHORTS",
        price: "1,999.00",
        image:
          "https://image.hm.com/assets/hm/d0/62/d06220bb84e318d6c0535122f550d6033d9b57e8.jpg?imwidth=1536",
      },
    },
  },
  marineHeat: {
    title: "MARINE HEAT",
    image:
      "https://image.hm.com/content/dam/global_campaigns/season_02/women/start-page-assets/wk26/DS32H-4x5-women-startpage-wk26.jpg?imwidth=4800",
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
                className="relative cursor-pointer -translate-y-8 left-[85%] sm:left-[90%] md:left-[85%] lg:left-[90%] w-5 h-5 fill-white"
                src={
                  wishlist[key]
                    ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABIUlEQVR4nO2UsUoDQRCGv1ewES1EAlrYWAYLrYKK2Ooj6CtpIKa08GlEczMb0UKiIggWEaNESGThhEPnNlmzAQt/GDjY2f/b/W8Z+FesHFQU6gIdhQ+BO4VGC5a+ejJYFjjJ13xPR+DY7w2aK2wrvCgMjeoLHCgc+m+rR6ArsBU6eZn5MDcY+BrR081g0Tp9PbRRI0rg6AcgzzwJQOHWArwnvMGbBbhJeIMrC9BMCGhYgLVE8QzaUDWfqsBZAsgpZbqGWYWHCcwfWzBHSBlsCPR+EU3PwXrQvBDVZuSz7QvsEiMH+2Uz57u5wl6UeSGu2oj59Opgh0nUhqrAk2H+PHbmY0BW/Hwp/NB7B6uklMC8wLlCdgkLTEMXMONrKuZ/Vp9SFOP6yc1bowAAAABJRU5ErkJggg=="
                    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8klEQVR4nN1UO6sTQRQebAQRLBTFyifqjxB/iVa+qjR5nTPZYrtAErIkgUCSDWTZZqvL1sKFW4hFwgYCsRAr4Uog3M2TEJN9jRzBEG8eknu3ED847DB75vvmPOYw9l8iHo8/QsR3iAjJZPJ9IpF4et6Hc/6M/pEPALxBxId/JY5Go7cURTlptVrueDwOfN8X9LUsyy0Wix8lSXpAVigUPtHeug+dobPEsZNc0zR7uVyKbfA8T5imOTdN8wett2GxWAhN084Q8eaGAKnvIv+NIAh+2T6QiKIoxxs5pxBFSGg2my6lcr1gbymPYQkMh8OAc/56JQAA6LqhBSCIizhXAoj4ajAY+GEJ2LbtA8DLdYEn7XY7tBAsy3IR8fEfha7Val/DIA+CQFSr1S8bbQoAL7rd7qWj6HQ6HgA83/rYMpnM0WQyuXA3TafTIJvNHu0YFIzJsnxNVdXvjuMcTO44jqjX66fEwfYhFovdbjQaZ4e0red5Qtf1QSqVuruXfK0e9w3DmO6aOefJDcOYSJJ0jx0CeuoUyb75RGnRdd2mC7GLgHN+p1KpfJvNZhuFn8/nQlXVU/Jhl4Esy9dLpVJ7NBqtRKjTyuXyZwC4wcJAJBK5msvlPvR6Pb/f7/v5fP6Y9liYkGX5SjqdrpHROlTyfxo/AQT5bjtkGHFIAAAAAElFTkSuQmCC"
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
