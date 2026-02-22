export default function Additions() {
  return (
    <div className="relative">
      <img
        src="images/additions.png"
        alt="dash-image"
        className="h-[400px] md:h-screen w-full object-cover"
      />
      <div className="inset-0 absolute bg-[#00000073]"></div>
      <div className="absolute top-1/2 -translate-y-1/2 pl-10">
        <p className="text-white text-xl md:text-3xl font-bold">
          Introducing Our New Menu Additions!
        </p>
        <p className="text-white text-[16px] my-4 w-70 md:w-100">
          Explore exciting new dishes, crafted with the freshest ingredients and
          authentic Nigerian flavors. Limited time offer!
        </p>
        <button className="bg-[#FF7A18] text-[#FFFFFF] p-2 px-8 rounded-xl">
          Discover what's new
        </button>
      </div>

    </div>
  );
}
