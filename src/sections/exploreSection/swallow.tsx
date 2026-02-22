import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Swallow() {
  const popularFoods = [
    {
      image: "/images/amala.png",
      name: "Amala with Gbegiri & Ewedu",
      description:
        "Classic Amala served with gbegiri(beans) and ewedu(jute leaf) soup.",
      price: "₦3,500",
    },
    {
      image: "/images/fufu.png",
      name: "Fufu & Okra Soup (Fish)",
      description: "Light Fufu served with fresh okra soup and tilapia fish.",
      price: "₦3,500",
    },
    {
      image: "/images/fufu.png",
      name: "Fufu & Okra Soup (Fish)",
      description: "Light Fufu served with fresh okra soup and tilapia fish.",
      price: "₦3,500",
    },
  ];

  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const visibleFoods = showAll ? popularFoods : popularFoods.slice(0, 3);

  return (
    <div className="py-4 md:py-20 px-4 md:px-10">
      <h1 className="font-bold text-2xl">Swallows & Soups</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
        {visibleFoods.map((popularFood) => (
          <div
            key={popularFood.name}
            onClick={() => navigate(`/explore/${popularFood.name}`)}
            className="rounded-xl bg-white flex md:flex-col md:items-center gap-2 md:gap-4"
          >
            <img
              src={popularFood.image}
              alt={popularFood.name}
              className="w-36 md:w-full h-auto p-2 md:p-0 object-cover rounded-xl md:rounded-xs"
            />
            <div className="md:p-4">
              <p className="text-xl font-semibold">{popularFood.name}</p>
              <p className="text-sm text-[#1F2937] font-semibold py-4">
                {popularFood.description}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[#FF7A18] ">{popularFood.price}</p>
                <button className="bg-[#FF7A18] text-[#FFFFFF] w-8 h-8 text-center rounded-full text-xl ">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p
        className="text-[#1E88E5] text-center md:hidden p-4 "
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "View Less" : "View All"}
      </p>
    </div>
  );
}
