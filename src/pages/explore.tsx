import Footer from "../components/footer";
import Navbar from "../components/navBar";
import Categories from "../sections/exploreSection/categories";
import Jollof from "../sections/exploreSection/jollof";
import Swallow from "../sections/exploreSection/swallow";
import XHero from "../sections/exploreSection/xhero";
import Xpopular from "../sections/exploreSection/xpopular";

export default function Explore() {
    return(
        <div className="max-width-8xl bg-[#F3F4F6] ">
            <Navbar />
            <XHero />
            <Categories />
            <Xpopular />
            <Jollof />
            <Swallow />
            <Footer />
        </div>
    )
}