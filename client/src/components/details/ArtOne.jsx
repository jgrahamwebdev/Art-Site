
import {BookmarkIcon} from "@heroicons/react/24/outline";

const ArtOne = () => {
    return (
        <div className="w-screen h-auto bg-[#F0F0F0] flex items-center justify-center py-[320px]">
            <div className="w-[600px] h-[800px]">
                <img className="w-full h-full" src="https://source.unsplash.com/1EzlbwFs0ik" alt="" />
                <div className="w-full h-[80px] flex">
                    <div className="flex-1 flex items-start justify-end flex-col">
                        <p className="font-light">Artwork title, 2023</p>
                        <p className="font-light">$200/month</p>
                    </div>

                    <div className="flex-1 flex items-end justify-center flex-col">
                        <BookmarkIcon className="w-6 h-6 text-[#838383] cursor-pointer" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ArtOne
