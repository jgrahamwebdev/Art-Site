
import { sectionTwoData } from "../../utils/data"
import { motion } from "framer-motion";

const SectionTwo = () => {
    return (
        <div className="w-screen h-auto flex items-center justify-center">
            {sectionTwoData.map((item) => (  
                <div className="flex-1 h-full" key={item.id} style={{backgroundColor: item.color}}>
                    <div className="flex flex-col items-center justify-between h-full">
                        <div className="w-full pt-[48px] pl-[48px]">                        
                            <h1 className="text-white font-grotesk text-[1rem] font-light">{item.artist}</h1>
                        </div>

                        <motion.div className="w-full h-full flex items-center justify-end" 
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.8,
                              delay: 0.5,
                              ease: [0, 0.71, 0.2, 1.01]
                            }} 
                        >                       
                            <img className="h-[400px] w-[350px] pr-[48px] object-cover transition transform ease-in-out mb-8" src={item.img} alt="" />
                        </motion.div>

                        <div className="w-full pl-[48px]">
                            <h1 className="font-newsreader text-[2.5rem] text-white w-[65%] mb-6">{item.title}</h1>
                            <button className="text-white mb-[48px] text-[1rem] font-grotesk">Enter</button>
                        </div>
                    </div>
                </div>
            ))}   
        </div>
    )
}

export default SectionTwo
