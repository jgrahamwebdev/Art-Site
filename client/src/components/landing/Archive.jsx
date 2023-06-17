
import { archive } from "../../utils/data"

const Archive = () => {
    return (
        <div className="w-full h-auto bg-[#F0F0F0]">
            <h1 className="py-[160px] pl-[48px] text-[1.2rem]">Archive</h1>
            
            <div className="w-full h-auto px-[48px] pb-[160px]">
                {archive.map((item) => ( 
                    <div className="flex pb-[48px]">
                    <div className="flex-1 flex">
                        <img className="h-[250px] w-[200px] mr-[48px]" src={item.img} alt="" />
                        <h1>{item.title}</h1>
                    </div>
                    <div className="flex-1 flex items-start justify-end">
                        <p className="w-[212px]">{item.date}</p>
                        <button>Enter</button>
                    </div>
                    </div>                  
                ))}  
            </div>
        </div>
    )
}

export default Archive
