import Footer from "../components/footer";
import Navbar from "../components/navBar";
import Additions from "../sections/additions";
import Hero from "../sections/hero";
import Popular from "../sections/popular";
import Specials from "../sections/specials";

export default function Dashboard() {
    return(
        <div className="max-width-8xl bg-[#F3F4F6] ">
            <Navbar />
            <Hero />
            <Popular />
            <Specials />
            <Additions />
            <Footer />
        </div>
    )
}