import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navBar";

export default function DeliveryDetails() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F3F4F6] pb-4 md:pb-0">
      <Navbar />
      <div className="md:w-1/2 mt-10 md:mt-20 md:mb-20 mx-4 md:mx-auto bg-white rounded-lg p-2 md:p-4">
        <h1 className="border-b-1 border-[#BDBDBD] font-bold text-2xl py-3 mb-6">
          Delivery Details
        </h1>

        <div className="mb-6">
          <textarea
            placeholder="Home: 123 Main Street, Victoria Island, Lagos"
            className="w-full placeholder-black p-3 border border-[#BDBDBD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A18] focus:border-transparent resize-none text-sm"
            rows={5}
          />
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Delivery Time</h2>

          <textarea
            placeholder="ASAP(30-35)"
            className="w-full placeholder-black p-3 border border-[#BDBDBD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A18] focus:border-transparent resize-none text-sm"
            rows={2}
          />
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Delivery Instructions (Optional)
          </h2>

          <textarea
            placeholder="E.g leave at the front of the door, knock twicee... "
            className="w-full placeholder-black p-3 border border-[#BDBDBD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A18] focus:border-transparent resize-none text-sm"
            rows={3}
          />
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contact Address</h2>

          <textarea
            placeholder="+234 801 234 5678"
            className="w-full placeholder-black p-3 border border-[#BDBDBD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A18] focus:border-transparent resize-none text-sm"
            rows={2}
          />
        </div>

        <button
          onClick={() => navigate(`/orders/payment`)}
          className="bg-[#FF7A18] text-white w-full py-3 rounded-lg font-semibold hover:bg-white hover:text-[#FF7A18] hover:border hover:border-[#FF7A18] transition-colors"
        >
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
}
