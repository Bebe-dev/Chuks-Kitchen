export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#614433] px-30 py-20 hidden md:block">
      <div className="flex justify-between">
        <div>
          <img src="/images/logo.png" alt="logo" />
          <p className="w-60 text-[#FFFFFF]">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col gap-1 text-[#FFFFFF]">
          <p className="text-xl">Quick Links</p>
          <a className="text-sm no-underline hover:underline" href="">
            Home
          </a>
          <a className="text-sm no-underline hover:underline" href="">
            Explore
          </a>
          <a className="text-sm no-underline hover:underline" href="">
            My Order
          </a>
          <a className="text-sm no-underline hover:underline" href="">
            Account
          </a>
          <a className="text-sm no-underline hover:underline" href="">
            Contact
          </a>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col gap-1 text-[#FFFFFF]">
          <p className="text-xl ">Contact Us</p>
          <a className="text-sm no-underline hover:underline" href="">
            +234 801 234 5678
          </a>
          <a className="text-sm no-underline hover:underline" href="">
            hello@chukskitchen.com
          </a>
          <a className="text-sm no-underline hover:underline" href="">
            123 Taste Blvd, Lagos, Nigeriat
          </a>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="flex flex-col gap-1 text-[#FFFFFF]">
          <a className="text-sm no-underline hover:underline" href="#">
            Facebook
          </a>
          <a className="text-sm no-underline hover:underline" href="#">
            Twitter
          </a>
          <a className="text-sm no-underline hover:underline" href="#">
            LinkedIn
          </a>
          <a className="text-sm no-underline hover:underline" href="#">
            Instagram
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center pt-14">
        <p className="text-white text-sm">
          &copy; 2020 Lift Media. All rights reserved
        </p>
        <a onClick={scrollToTop}>
          <img src="/images/arrow-up.png" alt="arrow-up-icon" />
        </a>
      </div>
    </div>
  );
}
