import { useState } from "react";
import { Plus, Minus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      quantity: 1,
      image: "/images/jollofe.png",
    },
    {
      id: 2,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      quantity: 1,
      image: "/images/jollof.png",
    },
    {
      id: 3,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      quantity: 1,
      image: "/images/poundo.png",
    },
    {
      id: 4,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      quantity: 1,
      image: "/images/jollof.png",
    },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.075);
  const total = subtotal + tax;


  return (
    <div className="bg-white my-8 md:mt-20 md:mb-0 mx-4 md:mx-8 p-4 rounded-lg">
      <h1 className="text-xl font-semibold mb-2">Your Cart</h1>

      <div>
        <div className="space-y-2 mb-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-2 flex justify-between md:justify-start gap-4 border border-[#BDBDBD] hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-46 md:h-32 object-cover rounded-lg"
                  />
                </div>

                <div className="flex flex-col md:flex-row flex-1 justify-between items-center">
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                    <p className="text-sm text-[#4B5563] mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-1 items-center justify-between mb-1 md:mb-0 gap-4">
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 rounded-lg bg-[#BDBDBD] flex items-center justify-center hover:bg-white hover:border hover:border-[#BDBDBD] transition-colors"
                    >
                      <Plus size={18} className="" />
                    </button>
                    <span className="text-3xl font-semibold w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 rounded-lg bg-[#BDBDBD] flex items-center justify-center hover:bg-white hover:border hover:border-[#BDBDBD] transition-colors"
                    >
                      <Minus size={18} className="text-gray-600" />
                    </button>
                  </div>

                  <div className="flex flex-1 items-center justify-between md:justify-around gap-3">
                    <span className="text-lg font-bold text-orange-500">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </span>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-6 h-6 rounded-md bg-[#FF7A18] text-white flex items-center justify-center hover:bg-white hover:border-2 hover:border-[#FF7A18] hover:text-[#FF7A18] transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Your cart is empty</p>
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="flex flex-col md:flex-row justify-between items-center">
            <button className="text-[#1E88E5] font-semibold text-sm mb-4 cursor-pointer no-underline hover:underline flex items-center gap-2">
              <Plus size={18} />
              Add more items from Chuks Kitchen
            </button>
            <button
              onClick={() => navigate(`/orders/order-summary`, {state: { cartItems, subtotal, tax, total }})}
              className="bg-[#FF7A18] text-white p-2 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#FF7A18] hover:border hover:border-[#FF7A18] transition-colors"
            >
              Next step
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
