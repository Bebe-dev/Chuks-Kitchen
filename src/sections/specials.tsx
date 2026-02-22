export default function Specials() {
  const popularFoods = [
    {
      image: "/images/pepperSoup.png",
      name: "Spicy Tilapia Pepper Soup",
      description:
        "A comforting and spicy soup with tender tilapia fish' a true Nigerian delicacy.",
      price: "₦3,500",
    },
    {
      image: "/images/jollof.png",
      name: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "₦4,000",
    },
    {
      image: "/images/jollof.png",
      name: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "₦4,000",
    },
    {
      image: "/images/jollof.png",
      name: "Jollof Rice & Smoked Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "₦3,500",
    },
    {
      image: "/images/jollofe.png",
      name: "Jollof RIce & Fried Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "₦3,500",
    },
    {
      image: "/images/poundo.png",
      name: "Egusi Soup & Pounded Yam",
      description:
        "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
      price: "₦3,500",
    },
  ];

  return (
    <div className="py-20 px-4 md:px-10">
      <h1 className="font-bold text-2xl text-center">Chef's Specials</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
        {popularFoods.map((popularFood) => (
          <div
            key={popularFood.name}
            className="rounded-xl bg-white flex flex-col items-center gap-4"
          >
            <img src={popularFood.image} alt={popularFood.name} />
            <div className="p-4">
              <p className="text-xl font-semibold">
                {popularFood.name}
              </p>
              <p className="text-sm text-[#1F2937] font-semibold py-4">
                {popularFood.description}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[#FF7A18] ">{popularFood.price}</p>
                <button className="bg-[#FF7A18] text-[#FFFFFF] text-sm p-2 px-4 rounded-lg ">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
