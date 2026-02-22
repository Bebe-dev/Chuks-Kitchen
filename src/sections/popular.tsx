export default function Popular() {

    const popularFoods = [
        {image:"/images/jollof.png", name:"Jollof Delights"},
        {image:"/images/swallow.png", name:"Swallow & Soups"},
        {image:"/images/suya.png", name:"Grills & BBQ"},
        {image:"/images/sweets.png", name:"Sweet Treats"},
        {image:"/images/suya.png", name:"Jollof Delights"},
        {image:"/images/jollof.png", name:"Jollof Delights"},
    ]

    return(
        <div className="py-20 px-4 md:px-10">
            <h1 className="font-bold text-2xl text-center">Popular categories</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
                {popularFoods.map((popularFood) => (
                    <div key={popularFood.name} className="rounded-xl bg-white flex flex-col items-center gap-8">
                        <img src={popularFood.image} alt={popularFood.name} />
                        <p className="pb-16 font-semibold text-center">{popularFood.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}