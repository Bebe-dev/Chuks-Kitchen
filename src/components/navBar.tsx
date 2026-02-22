import { X, Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="px-4 md:px-12 py-3 bg-white">
      <nav className="md:flex justify-between items-center hidden">
        <img src="/images/logo.png" alt="logo" />
        <div className="flex gap-24 text-[#1F2937] ">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? `text-[#FF7A18] no-underline hover:underline`
                : `text-[#1F2937] no-underline hover:underline`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive
                ? `text-[#FF7A18] no-underline hover:underline`
                : `text-[#1F2937] no-underline hover:underline`
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive
                ? `text-[#FF7A18] no-underline hover:underline`
                : `text-[#1F2937] no-underline hover:underline`
            }
          >
            My Orders
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `text-[#FF7A18] no-underline hover:underline hover:cursor-not-allowed`
                : `text-[#1F2937] no-underline hover:underline hover:cursor-not-allowed`
            }
          >
            Account
          </NavLink>
        </div>
        <button className="bg-[#FF7A18] text-[#FFFFFF] p-2 px-8 rounded-xl transition transition-ease-in hover:cursor-pointer hover:bg-white hover:text-[#FF7A18] hover:border-1 hover:border-[#FF7A18]">
          Login
        </button>
      </nav>
      <nav className="md:hidden flex justify-between items-center">
        <img src="/images/logo.png" alt="logo" className="h-8" />
        <button
          onClick={toggleMenu}
          className="text-[#1F2937] hover:text-[#FF7A18] transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 mt-3 py-4 animate-in fade-in duration-200">
          <div className="flex flex-col gap-4">
            <NavLink
              to="/dashboard"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? `text-[#FF7A18] no-underline font-medium px-4 py-2 rounded-lg bg-orange-50`
                  : `text-[#1F2937] no-underline px-4 py-2 rounded-lg hover:bg-gray-100`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/explore"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? `text-[#FF7A18] no-underline font-medium px-4 py-2 rounded-lg bg-orange-50`
                  : `text-[#1F2937] no-underline px-4 py-2 rounded-lg hover:bg-gray-100`
              }
            >
              Explore
            </NavLink>
            <NavLink
              to="/orders"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? `text-[#FF7A18] no-underline font-medium px-4 py-2 rounded-lg bg-orange-50`
                  : `text-[#1F2937] no-underline px-4 py-2 rounded-lg hover:bg-gray-100`
              }
            >
              My Orders
            </NavLink>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? `text-[#FF7A18] no-underline font-medium px-4 py-2 rounded-lg bg-orange-50`
                  : `text-[#1F2937] no-underline px-4 py-2 rounded-lg hover:bg-gray-100`
              }
            >
              Account
            </NavLink>

            <div className="border-t border-gray-200 my-2"></div>

            <button className="bg-[#FF7A18] text-white px-6 py-2 rounded-xl transition-all hover:bg-[#FF9243] font-medium mx-4">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
