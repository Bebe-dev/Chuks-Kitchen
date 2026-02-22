import { useState } from "react";
import Footer from "../components/footer";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Login() {
  const [seePassword, setSeePassword] = useState(false);
  return (
    <div className="bg-[#F3F4F6]">
      <div className="flex gap-12">
        <div className="hidden relative md:block flex-1 h-screen">
          <img
            src="images/onboarding-img.png"
            alt="onboarding-image"
            className="h-screen w-full "
          />
          <div className="bg-[#FF7A18B2] absolute inset-0"></div>
          <div className="absolute inset-0 flex flex-col text-white text-center items-center justify-center">
            <p className="text-white text-4xl font-bold">Chuks Kitchen</p>
            <p className="w-1/2">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>
        <div className="flex-1 py-10 px-6 md:px-20">
          <div className="flex flex-col justify-center items-center gap-2 my-6">
            <img src="images/logo.png" alt="logo" className="w-38 " />
            <p className="font-semibold text-3xl text-center">
              Login your account
            </p>
          </div>

          <form>
            <div className="flex flex-col gap-2 my-4">
              <label htmlFor="email" className="text-[#292535CC] ">
                Email or phone number
              </label>
              <div className="flex items-center gap-2 border-1 border-[#BDBDBD] rounded-lg p-2">
                <img src="images/mail-icon.svg" alt="mail-icon" />
                <input
                  name="email"
                  className="outline-none"
                  placeholder="name@gmail.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-[#292535CC]">
                Password
              </label>

              <div className="flex justify-between items-center gap-2 border-1 border-[#BDBDBD] rounded-lg p-2">
                <div className="flex items-center gap-2">
                  <img src="images/lock-icon.png" alt="mail-icon" />
                  <input
                    type={seePassword ? "text" : "password"}
                    name="password"
                    className="outline-none"
                    placeholder="*****"
                  />
                </div>
                {seePassword ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setSeePassword(false)}
                    cursor="pointer"
                  />
                ) : (
                  <IoEyeOutline
                    onClick={() => setSeePassword(true)}
                    cursor="pointer"
                  />
                )}
              </div>
              <span className="text-[#1E88E5] text-sm text-right ">
                Forgot Password?
              </span>
            </div>
            <Link to="/dashboard" className="block bg-[#FF7A18] text-[#FFFFFF] w-full text-center p-3 rounded-xl my-4 mt-4 md:my-8">
              Continue
            </Link>
          </form>

          <p className="text-center text-[#1F2937] ">or continue with</p>
          <button className="flex gap-2 bg-white items-center justify-center border-1 border-[#3B4758] text-[#3B4758] w-full p-2 rounded-xl my-4 mt-4 md:my-4 md:mt-6">
            <img src="images/google-icon.png" alt="google-icon" />
            Continue with Google
          </button>
          <button className="flex gap-2 bg-white items-center justify-center border-1 border-[#3B4758] text-[#3B4758] w-full p-2 rounded-xl my-4 mt-4">
            <img src="images/fb-icon.png" alt="facebook-icon" />
            Continue with Facebook
          </button>

          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#1E88E5] hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}
