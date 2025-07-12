import { useWishlist } from "./WishlistContext";
import Toast from "./Toast";
import { useState } from "react";

export default function Favourites() {
  const { wishlist, toggleWishlist, toastMessage, clearToast } = useWishlist();
  const [removing, setRemoving] = useState(null);

  const items = Object.entries(wishlist);

  const handleRemove = (key, item) => {
    setRemoving(key);
    setTimeout(() => {
      toggleWishlist(key, item);
      setRemoving(null);
    }, 300);
  };
  let itemCountMessage;
  if (!items.length) {
    itemCountMessage = <>0 ITEMS</>;
  } else {
    itemCountMessage = `${items.length} ITEMS`;
  }

  return (
    <div className="lg:mt-[140px] mt-[15px] min-h-[80dvh]">
      <h2 className="text-3xl font-bold mb-4 px-6 ">FAVOURITES</h2>
      <div className="flex justify-between px-6 mt-6 mb-2 text-sm items-center  text-gray-600">
        <div className="">{itemCountMessage}</div>
        <div
          className="underline outline-offset-2 cursor-pointer text-xs  md:text-sm"
          onClick={() => {
            items.forEach(([key, item]) => toggleWishlist(key, item));
          }}
        >
          CLEAR FAVOURITES
        </div>
      </div>
      <div className="flex justify-center">
        <br />
        <br />
        {!items.length && "Tap the heart icon on items to save them here."}
      </div>
      <div className="flex flex-wrap">
        {items.map(([key, item]) => (
           <div
            key={key}
            className="w-[50%] md:w-[25%] border-[1px] border-gray-100 "
          >
            <div>
              <img src={item.image} alt={item.title} className="w-full" />
              <img
                onClick={() => toggleWishlist(key, item)}
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
              <p className="font-medium">{item.title}</p>
              <div className="flex justify-between items-center ">
                <strong>
                  ₹{" "}
                  {new Intl.NumberFormat("en-IN", {
                    minimumFractionDigits: 2,
                  }).format(item.price)}
                </strong>{" "}
                <div className="underline text-xs">ADD TO CART</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {toastMessage && <Toast message={toastMessage} onClose={clearToast} />}
    </div>
  );
}
