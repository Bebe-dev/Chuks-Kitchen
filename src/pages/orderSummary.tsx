import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navBar";

export default function OrderSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, subtotal, tax, total } = location.state || {
    cartItems: [],
    total: 0,
    tax: 0,
    subtotal: 0,
  };

  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">(
    "delivery",
  );
  return (
    <div className="bg-[#F3F4F6] pb-4 md:pb-0">
      <Navbar />
      <div className="md:w-1/2 md:mx-auto md:mb-20 mt-10 md:mt-20 mx-4 bg-white rounded-lg p-2 md:p-4">
        <h1 className="border-b-1 border-[#BDBDBD] font-bold text-2xl py-3 mb-6">
          Order Summary
        </h1>
        <div>
          <label htmlFor="code" className="font-semibold">
            Add a Promo Code
          </label>
          <div className="flex flex-col md:flex-row gap-2 my-2">
            <input
              className="border-1 border-[#BDBDBD] p-2 rounded-lg w-full placeholder-black"
              name="code"
              placeholder="Enter Code here"
            />
            <button className="bg-[#FF7A18] text-white p-2 px-16 rounded-lg font-semibold hover:bg-white hover:text-[#FF7A18] hover:border hover:border-[#FF7A18] transition-colors">
              Enter
            </button>
          </div>
        </div>

        {cartItems.length > 0 && (
          <div className="bg-white rounded-lg pt-8 mb-6 text-[#4B5563] text-sm ">
            <div className="space-y-3 mb-4 pb-4 border-b border-[#BDBDBD] font-semibold">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="font-medium">₦500</span>
              </div>
              <div className="flex justify-between">
                <span>Service Fee</span>
                <span className="font-medium">₦200</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span className="font-medium">₦{tax.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex justify-between text-xl font-bold text-black">
              <span>Total</span>
              <span>₦{total.toLocaleString()}</span>
            </div>
          </div>
        )}

        <div className="flex gap-0 mb-8 rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => setDeliveryType("delivery")}
            className={`flex-1 py-3 font-semibold text-white transition-colors ${
              deliveryType === "delivery"
                ? "bg-[#FF7A18] hover:bg-orange-600"
                : "bg-[#BDBDBD] hover:bg-gray-500"
            }`}
          >
            Delivery
          </button>
          <button
            onClick={() => setDeliveryType("pickup")}
            className={`flex-1 py-3 font-semibold text-white transition-colors ${
              deliveryType === "pickup"
                ? "bg-[#FF7A18] hover:bg-orange-600"
                : "bg-[#BDBDBD] hover:bg-gray-500"
            }`}
          >
            Pick up
          </button>
        </div>

        <div className="rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Special Instructions for Restaurant
          </h2>

          <textarea
            placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty"
            className="w-full placeholder-black p-3 border border-[#BDBDBD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A18] focus:border-transparent resize-none text-sm"
            rows={5}
          />
        </div>

        <button onClick={() => navigate(`/orders/delivery-details`)} className="bg-[#FF7A18] text-white w-full py-3 rounded-lg font-semibold hover:bg-white hover:text-[#FF7A18] hover:border hover:border-[#FF7A18] transition-colors">
          Proceed to Checkout
        </button>
      </div>
      <Footer />
    </div>
  );
}
