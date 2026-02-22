import Footer from "../components/footer";
import Navbar from "../components/navBar";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import OrderSuccess from "./orderSuccess";
import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {
    const navigate = useNavigate();
    const location = useLocation()
  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "bank" | "transfer"
  >("card");
  const [stage, setStage] = useState<"payment" | "loading" | "success">(
    "payment",
  );

   useEffect(() => {
    //alert(location.pathname)
    if (location.pathname === '/orders/success') {
      setStage('success');
    } else if (location.pathname === '/orders/payment') {
      setStage('payment');
    }
  }, [location.pathname]);

  const handlePayment = () => {
    setStage("loading");

    setTimeout(() => {
        navigate('/orders/success');
      setStage("success");
    }, 3000);
  };

  if (stage === "payment") {
    return (
      <div className="bg-[#F3F4F6] pb-4 md:pb-0">
        <Navbar />
        <div className="md:w-1/2 md:mb-20 mt-10 md:mt-20 mx-4 md:mx-auto bg-white rounded-lg p-2 md:p-4">
          <h1 className="border-b-1 border-[#BDBDBD] font-bold text-2xl py-3 mb-6">
            Payment
          </h1>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Pay With:</h2>
            <div className="md:flex justify-between items-center">
              <label className="flex items-center cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="sr-only"
                  />
                  <div className="w-5 h-5 border-2 border-[#2FBD6A] rounded-full flex items-center justify-center">
                    {paymentMethod === "card" && (
                      <div className="w-3 h-3 bg-[#2FBD6A] rounded-full"></div>
                    )}
                  </div>
                </div>
                <span className="ml-3 text-[#0A0D13] font-medium">Card</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                    className="sr-only"
                  />
                  <div className="w-5 h-5 border-2 border-[#ACACAC] rounded-full flex items-center justify-center">
                    {paymentMethod === "bank" && (
                      <div className="w-3 h-3 bg-[#ACACAC] rounded-full"></div>
                    )}
                  </div>
                </div>
                <span className="ml-3 text-[#ACACAC] font-medium">Bank</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="payment"
                    value="transfer"
                    checked={paymentMethod === "transfer"}
                    onChange={() => setPaymentMethod("transfer")}
                    className="sr-only"
                  />
                  <div className="w-5 h-5 border-2 border-[#ACACAC] rounded-full flex items-center justify-center">
                    {paymentMethod === "transfer" && (
                      <div className="w-3 h-3 bg-[#ACACAC] rounded-full"></div>
                    )}
                  </div>
                </div>
                <span className="ml-3 text-[#ACACAC] font-medium">
                  Transfer
                </span>
              </label>
            </div>
          </div>

          {paymentMethod === "card" && (
            <div className="mb-8">
              <div className="mb-5">
                <label className="block text-sm font-semibold text-[#0A0D13] mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9101 1121"
                  maxLength={19}
                  className="w-full px-4 py-3 border border-[#ACACAC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A18] focus:border-transparent text-[#0A0D13] placeholder-[#ACACAC]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full px-4 py-3 border border-[#ACACAC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A18] focus:border-transparent text-[#0A0D13] placeholder-[#ACACAC]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    maxLength={3}
                    className="w-full px-4 py-3 border border-[#ACACAC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A18] focus:border-transparent text-[#0A0D13] placeholder-[#ACACAC]"
                  />
                </div>
              </div>

              <label className="flex items-center mt-4 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-[#ACACAC] rounded accent-[#FF7A18]"
                />
                <span className="ml-2 text-sm text-[#ACACAC]">
                  Save card details
                </span>
              </label>
            </div>
          )}

          <button
            onClick={() => handlePayment()}
            className="bg-[#FF7A18] text-white w-full py-3 rounded-lg font-semibold hover:bg-white hover:text-[#FF7A18] hover:border hover:border-[#FF7A18] transition-colors"
          >
            Pay ₦9,900
          </button>
          <p className="text-sm text-[#ACACAC] text-center leading-relaxed">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  if (stage === "loading") {
    return (
      <div>
        <Navbar />
        <div className="h-screen bg-[#F3F4F6] my-auto flex justify-center items-center">
          <div className="flex justify-center items-center mb-8">
            <Loader size={60} className="text-[#FF7A18] animate-spin" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (stage === "success") {
    return <OrderSuccess />;
  }
}
