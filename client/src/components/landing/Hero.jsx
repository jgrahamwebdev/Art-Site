
const Hero = () => {
    return (
        <div className="w-screen h-[98vh] bg-[url('https://source.unsplash.com/5GwLlb-_UYk')] bg-no-repeat bg-center bg-cover pt-[48px] bg-fixed">
            <div className="flex flex-col items-center justify-between h-full">

            <div className="w-full pt-[48px] pl-[48px]">
                <h1 className="text-white font-grotesk text-[18px] font-light">Featured Collection</h1>
            </div>

            <div>
                <h1 className="font-newsreader text-[4rem] text-white w-[65%] pl-[48px] mb-6">A Look Into the Works of Amazing Emerging Artists</h1>
                <button className="text-white ml-[48px] mb-[48px] text-[1.2rem] font-grotesk">Enter</button>
            </div>

            </div>
            
        </div>
    )
}

export default Hero
