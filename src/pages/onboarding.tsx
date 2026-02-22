import Footer from "../components/footer";

export default function Onboarding() {
  return (
    <div>
      <div className="md:flex gap-12">
        <div className="md:hidden">
          <img
            src="images/mobile-onboarding.png"
            alt="onboarding-image"
            className="w-full"
          />
        </div>
        <div className="hidden md:block flex-1 h-screen">
          <img
            src="images/onboarding-img.png"
            alt="onboarding-image"
            className="h-screen w-full"
          />
        </div>
        <div className="flex-1 py-10 px-6 md:px-20">
          <div className="md:flex justify-between items-center hidden">
            <img src="images/logo.png" alt="logo" />
            <a
              href="/login"
              className="border-2 border-[#1E88E5] text-[#1E88E5] rounded-xl p-2 px-8"
            >
              Sign in
            </a>
          </div>
          <div className="md:hidden flex justify-end">
            <a
              href="/login"
              className="border-2 border-[#1E88E5] text-[#1E88E5]  rounded-xl p-2 px-8"
            >
              Sign in
            </a>
          </div>
          <div className="text-[#1F2937] ">
            <div className="md:hidden my-4 mt-12 flex justify-center ">
              <img src="images/logo.png" alt="logo" />
            </div>
            <p className="text-3xl font-bold my-4">
              Your Authentic Taste of Nigeria
            </p>
            <p>
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your
              doorstep.
            </p>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 my-4">
              <div className="flex gap-2 items-center bg-[#F3F4F6] md:bg-[#FFFFFF] rounded-xl p-2">
                <img src="images/fork-icon.png" alt="fork-icon" />
                <p>Freshly Prepared</p>
              </div>
              <div className="flex gap-2 items-center bg-[#F3F4F6] md:bg-[#FFFFFF] rounded-xl p-2">
                <img src="images/fork-icon.png" alt="fork-icon" />
                <p>Support Local Business</p>
              </div>
              <div className="flex gap-2 items-center md:bg-[#FFFFFF] bg-[#F3F4F6] rounded-xl p-2">
                <img src="images/delivery-icon.png" alt="delivery-icon" />
                <p>Fast and Reliable Delivery</p>
              </div>
            </div>

            {/* BUTTONS */}
            <div>
              <button className="bg-[#FF7A18] text-[#FFFFFF] w-full p-3 rounded-xl my-4 mt-4 md:my-8">
                Start Your Order
              </button>
              <button className="border-2 border-[#1E88E5] text-[#1E88E5] rounded-xl w-full p-3">
                Learn More About Us
              </button>
            </div>

            <div className="md:flex gap-4 items-center my-10 justify-center hidden">
              <p>&copy; 2024 Chuks Kitchen. </p>
              <a href="#" className="text-[#64B5F6]">
                Privacy Policy
              </a>
              <a href="#" className="text-[#64B5F6]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}
