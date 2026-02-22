import Footer from "../components/footer";
import Navbar from "../components/navBar";

export default function OrderSuccess() {
  return (
    <div className="bg-[#F3F4F6] h-screen flex flex-col gap-12 text-center">
        <Navbar />
      <div className="mx-auto md:w-2/7 mx-6 mt-10">
        <div>
          <img src="/images/check-icon.png" alt="check-icon" className="text-center mx-auto w-16 h-16 mb-4" />
          <p className="font-semibold text-lg">Order Placed Successfully!</p>
          <p className="py-2">
            Your delicious Chuks Kitchen meal is on its way!
          </p>
        </div>
        <div className="w-10 h-10 my-16 rounded-full bg-green-100 mx-auto">
         
        </div>
        <div className="my-20 mt-12">
          <p className="font-semibold text-xl">
            Order #123RGR231567Y Confirmed
          </p>
          <button className="bg-[#FF7A18] text-white w-full my-2 mb-4 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#FF7A18] hover:border hover:border-[#FF7A18] transition-colors">
            Track Order
          </button>
          <p className="text-[#9DA3A1] text-sm  mb-4">Generate Receipt</p>
          <p className="text-[#1E88E5] ">Need help with your order?</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
