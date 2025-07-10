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

  if (items.length === 0) {
    return (
      <div className="p-6  text-center text-gray-500">
        {/* Favourites is empty. */}

        FAVOURITES IS EMPTY.
      </div>
    );
  }

  return (
    <div className="lg:mt-[140px] mt-[15px] min-h-[80dvh]">
      <h2 className="text-3xl font-bold mb-4 px-6 ">FAVOURITES</h2>
      <div className="flex flex-wrap">
        {items.map(([key, item]) => (
          <div
            key={key}
            className={`w-[50%] md:w-[25%] transition-all duration-300 ${
              removing === key ? "opacity-0 scale-90" : "opacity-100"
            }`}
          >
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full"
                loading="lazy"
              />
              <img
                onClick={() => handleRemove(key, item)}
                className="relative -translate-y-8 left-[85%] w-5 h-5 cursor-pointer"
                src="https://res.cloudinary.com/dppnjyn8a/image/upload/v1751882673/rro2nzzvvy3lbzkbtbmk.png"
                alt="liked"
              />
            </div>
            <div className="py-2 -mt-5 text-sm lg:text-base pl-2">
              <p className="font-medium">{item.title}</p>
              <strong>{`₹ ${item.price}`}</strong>
            </div>
          </div>
        ))}
      </div>

      {toastMessage && <Toast message={toastMessage} onClose={clearToast} />}
    </div>
  );
}
