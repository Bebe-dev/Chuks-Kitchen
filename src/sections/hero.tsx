export default function Hero() {
    return(
        <div className="relative">
            <img src="images/dash-image.png" alt="dash-image" className="md:h-screen w-full " />
            <div className="inset-0 absolute bg-[#00000073]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 pl-10">
                <p className="text-white text-xl md:text-4xl font-semibold">The Heart of Nigerian Home Cooking</p>
                <p className="text-white md:text-[18px] font-semibold my-2 md:my-8">Handcrafted with passion, delivered with care</p>
                <button className="bg-[#FF7A18] text-[#FFFFFF] p-2 px-8 rounded-xl">Discover what's new</button>
            </div>

            <div className="box-shadow flex gap-4 items-center absolute -bottom-6 w-4/5 left-1/2 -translate-x-1/2  p-2 rounded-lg bg-white">
                <img src="images/search-icon.png" alt="search-icon" className="w-8 h-8" />
                <input className="w-full" placeholder="What are you craving today?" />
            </div>
        </div>
    )
}