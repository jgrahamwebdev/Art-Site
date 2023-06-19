
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-screen h-auto bg-[#2668E9] flex items-center justify-between flex-col pb-[48px]">
             <div className="w-full h-[66px] bg-[#2668E9] flex items-center justify-center font-grotesk fixed z-20">
            <div className="flex-1 flex items-center justify-start">
                <div className="w-1/2 flex items-center justify-between pl-[48px] text-white">
                    <Link to={'/'}><h1 className="font-bold text-[1.5rem]">LOGO</h1></Link>
                    <p className="text-[16px] cursor-pointer">Artworks</p>
                    <p className="text-[16px] cursor-pointer">Collections</p>
                </div>

            </div>
            <div className="flex-1 flex items-center justify-end">
                <div className=" w-1/2 flex items-center justify-between pr-[48px]">
                    <p className="text-[16px] cursor-pointer text-white">Cart(0)</p>
                    <p className="text-[16px] cursor-pointer text-white">Log In</p>
                    <button className="text-[#2668E9] bg-white py-[10px] px-[24px] text-[16px]">Sign Up</button>
                </div>
            </div>
        </div>
            <div className="w-screen h-screen flex items-center justify-between flex-col pt-[114px]">
            <p className="text-white font-extralight">Featured Collection</p>
            <h1 className="font-newsreader text-[4rem] text-white w-[65%] mb-6 text-center">A Monumental Square Of Blue Above The Mediterranean</h1>
            <div className="flex items-center justify-center flex-col">
                <p className="text-white font-extralight">Scroll</p>
                <p className="text-white font-extralight">&darr;</p>
            </div>
            </div>
        </div>
    )
}

export default Header
