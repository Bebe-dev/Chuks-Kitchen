import { Route, Routes } from "react-router-dom";
import "./App.css";
import Onboarding from "./pages/onboarding";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Explore from "./pages/explore";
import Details from "./pages/details";
import Orders from "./pages/orders";
import OrderSummary from "./pages/orderSummary";
import DeliveryDetails from "./pages/deliveryDetails";
import Payment from "./pages/payment";
import OrderSuccess from "./pages/orderSuccess";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<Details /> } />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/order-summary" element={<OrderSummary />} />
        <Route path="/orders/delivery-details" element={<DeliveryDetails />} />
        <Route path="/orders/payment" element={<Payment/>} />
        <Route path="/orders/success" element={<OrderSuccess/>} />
      </Routes>
    </>
  );
}

export default App;
