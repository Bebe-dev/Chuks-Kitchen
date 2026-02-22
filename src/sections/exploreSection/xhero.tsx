export default function XHero() {
    return(
        <div className="relative">
            <img src="images/xplore-img.png" alt="xplore-image" className="md:h-screen w-full " />
            <div className="inset-0 absolute bg-[#00000089]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 pl-10">
                <p className="text-white text-xl md:text-4xl font-semibold">Chuks Kitchen</p>
                <p className="text-white md:text-[18px] font-semibold my-2 md:my-8">Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)</p>
            </div>

        </div>
    )
}