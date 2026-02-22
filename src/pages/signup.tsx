import { useState } from "react";
import Footer from "../components/footer";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


export default function Signup() {
  const [seePassword, setSeePassword] = useState(false);
  const [seecPassword, setSeecPassword] = useState(false);

  return (
    <div className="bg-[#F3F4F6] ">
      <div className="flex gap-12">
        <div className="hidden relative md:block flex-1 ">
          <img
            src="images/onboarding-img.png"
            alt="onboarding-image"
            className=""
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
            <img src="images/logo.png" alt="logo" className="w-38" />
            <p className="font-semibold text-3xl text-center">
              Create Your Account
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#292535CC]">
                Email
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
              <label htmlFor="number" className="text-[#292535CC]">
                Phone number
              </label>

              <div className="flex items-center gap-2 border-1 border-[#BDBDBD] rounded-lg p-2">
                <img src="images/call-icon.png" alt="mail-icon" />
                <input
                  name="number"
                  className="outline-none"
                  placeholder="8123340690"
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
                    placeholder="Qwe123#"
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
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword" className="text-[#292535CC]">
                Confirm password
              </label>

              <div className="flex justify-between items-center gap-2 border-1 border-[#BDBDBD] rounded-lg p-2">
                <div className="flex items-center gap-2">
                  <img src="images/lock-icon.png" alt="mail-icon" />
                  <input
                    type={seecPassword ? "text" : "password"}
                    name="confirmPassword"
                    className="outline-none"
                    placeholder="Qwe123#"
                  />
                </div>
                {seePassword ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setSeecPassword(false)}
                    cursor="pointer"
                  />
                ) : (
                  <IoEyeOutline
                    onClick={() => setSeecPassword(true)}
                    cursor="pointer"
                  />
                )}
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <input name="agree" type="checkbox" />
              <label htmlFor="agree">
                I agree to the{" "}
                <a className="text-[#1E88E5]">Terms and Conditions</a> and{" "}
                <a>Privacy Policy</a>{" "}
              </label>
            </div>
            <Link to="/dashboard" className="block bg-[#FF7A18] text-[#FFFFFF] w-full text-center p-3 rounded-xl my-4 mt-4 md:my-8">
              Continue
            </Link>
          </form>

          <p className="text-[#1F2937] text-center ">or continue with</p>
          <button className="flex gap-2 bg-white items-center justify-center border-1 border-[#3B4758] text-[#3B4758] w-full p-2 rounded-xl my-4 mt-4 md:my-6 md:mt-6">
            <img src="images/google-icon.png" alt="google-icon" />
            Continue with Google
          </button>
          <button className="flex gap-2 bg-white items-center justify-center border-1 border-[#3B4758] text-[#3B4758] w-full p-2 rounded-xl my-4 mt-8">
            <img src="images/fb-icon.png" alt="facebook-icon" />
            Continue with Facebook
          </button>

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-[#1E88E5]">
              Sign In
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
