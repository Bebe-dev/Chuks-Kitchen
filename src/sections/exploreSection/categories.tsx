export default function Categories () {
    return(
        <div className="bg-white md:mx-6 md:my-8 md:rounded-xl">
            <h1 className="font-bold pb-4 p-4">Menu Categories</h1>
            <ul>
            <li className="bg-[#FFE1C4] tracking-tight  border-l-4 border-[#FF7A18] pl-4 py-1 ">Popular</li>
            <li className="tracking-tight pl-4 py-1 hover:border-l-4 hover:border-[#FF7A18] hover:bg-[#FFE1C4]">Jollof Rice & Chicken</li>
            <li className="tracking-tight pl-4 py-1 hover:border-l-4 hover:border-[#FF7A18] hover:bg-[#FFE1C4]">Swallow & Soups</li>
            <li className="tracking-tight pl-4 py-1 hover:border-l-4 hover:border-[#FF7A18] hover:bg-[#FFE1C4]">Grills & sides</li>
            <li className="tracking-tight pl-4 py-1 hover:border-l-4 hover:border-[#FF7A18] hover:bg-[#FFE1C4]">Beverages</li>
            <li className="tracking-tight pl-4 py-1 hover:border-l-4 hover:border-[#FF7A18] hover:bg-[#FFE1C4]">Dessets</li>
            </ul>
        </div>
    )
}