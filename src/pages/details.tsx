import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import Footer from "../components/footer";

export default function Details() {
  const [selectedProtein, setSelectedProtein] =
    useState<string>("fried-chicken");
  const [selectedSides, setSelectedSides] = useState<string[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState<string>("");

  const proteins = [
    {
      id: "fried-chicken",
      name: "Fried Chicken",
      price: "Default",
      isDefault: true,
    },
    {
      id: "grilled-fish",
      name: "Grilled Fish",
      price: "+₦500",
      isDefault: false,
    },
    { id: "beef", name: "Beef", price: "+₦700", isDefault: false },
  ];

  const sides = [
    { id: "fried-plantain", name: "Fried Plantain", price: "+₦700" },
    { id: "coleslaw", name: "Coleslaw", price: "+₦500" },
    { id: "pepper-sauce", name: "Extra Pepper Sauce", price: "+₦300" },
  ];

  const toggleSide = (sideId: any) => {
    setSelectedSides((prev) =>
      prev.includes(sideId)
        ? prev.filter((id) => id !== sideId)
        : [...prev, sideId],
    );
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#F3F4F6] md:flex gap-2">
        <img src="/images/details-img.png" alt="food-image" />
        <div className="bg-white p-4 py-8 md:my-4 md:rounded-xl md:mx-8">
          <div className="flex justify-end">
            <p
              className="bg-black text-white text-lg w-6 h-6 text-center cursor-pointer"
              onClick={() => navigate(-1)}
            >
              X
            </p>
          </div>
          <h1 className="text-xl font-bold">Jollof Rice with Fried Chicken</h1>
          <p className="text-[#FF7A18] py-2 ">₦3,500</p>
          <p className=" tracking-tight">
            Our signature Jollof rice, cooked to perfection with aromatic
            spices, served with juicy, golden-fried chicken. A classic Nigerian
            comfort food, rich in flavor and satisfying. Perfect for a quick
            lunch or a hearty dinner.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:items-center my-4 mt-6">
            <div className="flex gap-2 items-center bg-[#F3F4F6] md:bg-white rounded-xl p-2">
              <img src="/images/timer.png" alt="timer" />
              <p>Mildly Spicy</p>
            </div>

            <div className="flex gap-2 items-center bg-[#F3F4F6] md:bg-white rounded-xl p-2">
              <img src="/images/timer.png" alt="timer" />
              <p>Vegetarian option available</p>
            </div>

            <div className="flex gap-2 items-center bg-[#F3F4F6] md:bg-white rounded-xl p-2">
              <img src="/images/timer.png" alt="timer" />
              <p>View Allergies</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Choose Your Protein</h2>

            <div className="space-y-3">
              {proteins.map((protein) => (
                <label
                  key={protein.id}
                  className="flex items-center p-4 border-2 border-[#BDBDBD] rounded-lg cursor-pointer hover:border-[#FF7A18] transition-colors group"
                  onClick={() => setSelectedProtein(protein.id)}
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-[#FF7A18] flex-shrink-0 group-hover:bg-orange-50">
                    {selectedProtein === protein.id && (
                      <div className="w-3 h-3 rounded-full bg-[#FF7A18]"></div>
                    )}
                  </div>

                  <span className="ml-3 flex-1">
                    <span className="font-medium">{protein.name}</span>
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{protein.price}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Extra Sides (Optional)
            </h2>

            <div className="space-y-3">
              {sides.map((side) => (
                <label
                  key={side.id}
                  className="flex items-center p-4 border-2 border-[#BDBDBD] rounded-lg cursor-pointer hover:border-[#FF7A18] transition-colors group"
                >
                  <div
                    className="flex items-center justify-center w-6 h-6 rounded border-2 border-[#BDBDBD] flex-shrink-0 group-hover:border-[#FF7A18] transition-colors"
                    onClick={() => toggleSide(side.id)}
                  >
                    {selectedSides.includes(side.id) && (
                      <>
                        <div className="w-full h-full rounded bg-[#FF7A18] flex items-center justify-center">
                          <Check size={16} className="text-white" />
                        </div>
                      </>
                    )}
                  </div>

                  <span className="ml-3 flex-1 font-medium">{side.name}</span>

                  <span className="font-medium text-sm">{side.price}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4 md:mb-8">
            <h2 className="text-xl font-semibold mb-4">Special Instructions</h2>

            <textarea
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="E.g no onion, food is too spicy, food is too not hhhhhhhhhh food is tasty"
              className="w-full p-4 border-2 border-[#BDBDBD] rounded-lg focus:outline-none focus:border-[#FF7A18] transition-colors resize-none placeholder-black"
              rows={5}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
