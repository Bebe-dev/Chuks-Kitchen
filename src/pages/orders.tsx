import Navbar from "../components/navBar";
import Cart from "../sections/orderSection/cart";

export default function Orders() {
    return(
        <div className="max-width-8xl bg-[#F3F4F6] ">
            <Navbar />
            <Cart />
        </div>
    )
}