
const Header = () => {
    return (
        <div className="w-screen h-screen bg-[#2668E9] flex items-center justify-between flex-col py-[48px]">
            <p className="text-white font-extralight">Featured Collection</p>
            <h1 className="font-newsreader text-[4rem] text-white w-[65%] mb-6 text-center">A Monumental Square Of Blue Above The Mediterranean</h1>
            <div className="flex items-center justify-center flex-col">
                <p className="text-white font-extralight">Scroll</p>
                <p className="text-white font-extralight">&darr;</p>
            </div>
        </div>
    )
}

export default Header
