
const Navbar = () => {
    return (
        <div className="w-full h-[66px] bg-[#EEFF30] flex items-center justify-center font-grotesk fixed z-20">
            <div className="flex-1 flex items-center justify-start">
                <div className="w-1/2 flex items-center justify-between pl-[48px]">
                    <h1 className="font-bold text-[1.5rem]">LOGO</h1>
                    <p className="text-[16px] cursor-pointer">Artworks</p>
                    <p className="text-[16px] cursor-pointer">Collections</p>
                </div>

            </div>
            <div className="flex-1 flex items-center justify-end">
                <div className=" w-1/2 flex items-center justify-between pr-[48px]">
                    <p className="text-[16px] cursor-pointer">Cart(0)</p>
                    <p className="text-[16px] cursor-pointer">Log In</p>
                    <button className="text-[#EEFF30] bg-black py-[10px] px-[24px] text-[16px]">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
