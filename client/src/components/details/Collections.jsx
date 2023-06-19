
import { archive } from "../../utils/data"

const Collections = () => {
    return (
        <div className="w-full h-auto bg-[#2668E9] text-white">
        <h1 className="py-[160px] pl-[48px] text-[1.2rem] font-light">Collections</h1>
        
        <div className="w-full h-auto px-[48px] pb-[160px]">
            {archive.map((item) => ( 
                <div className="flex pb-[48px]">
                <div className="flex-1 flex">
                    <img className="h-[250px] w-[200px] mr-[48px]" src={item.img} alt="" />
                    <h1 className="font-light">{item.title}</h1>
                </div>
                <div className="flex-1 flex items-start justify-end">
                    <p className="w-[212px] font-light">{item.date}</p>
                    <button className="font-light">Enter</button>
                </div>
                </div>                  
            ))}  
        </div>
    </div>
    )
}

export default Collections
