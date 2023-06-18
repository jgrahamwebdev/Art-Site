
import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Archive from "../components/landing/Archive"
import Footer from "../components/landing/Footer"
import Hero from "../components/landing/Hero"
import Navbar from "../components/landing/Navbar"
import SectionOne from "../components/landing/SectionOne"
import SectionThree from "../components/landing/SectionThree"
import SectionTwo from "../components/landing/SectionTwo"

const LandingScreen = () => {
    const [preloader, setPreloader] = useState(true);

    const [timer, setTimer] = useState(3);
    const id = useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
        setPreloader(false);
    };

    // Will run when we mount the component
    useEffect(() => {
        console.log("set timer");
        setTimeout(() => {
            setPreloader(false);
            console.log("set timer");
        }, 2500);

        clearTimeout();
    }, []);

    // Will run when the timer changes
    useEffect(() => {
        if(timer === 0) {
            clear();
        }
    }, [timer])

    // LOADING COUNT UP
    // const count = useMotionValue(0);
    // const rounded = useTransform(count, Math.round);

    // useEffect(() => {
    //     const animation = animate(count, 100, { duration: 5 });

    //     return animation.stop;
    // }, []);

    return (
        <>
        {preloader ? (
            <div className="flex items-center justify-center flex-col bg-[#191919] text-[#dbd8d6] fixed top-0 left-0 right-0 bottom-0 z-10">
                <motion.div
                    className="box bg-[#EEFF30] w-[200px] h-[200px] flex items-center justify-center"
                    animate={{
                        scale: [2, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["10%", "25%", "50%", "50%", "50%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        // repeat: 1,
                        repeatDelay: 1
                    }}
                >
                    <img className="w-[65%] h-auto" src="./imgs/keyhole.svg" alt="" />
                </motion.div>
                {/* <motion.h1 className="text-[3rem]">{rounded}</motion.h1> */}
                <h2 className="text-[1.8vw] uppercase font-newsreader font-light mt-2">J-J Projects</h2>
            </div>
        ) : (
        <div className="scroll-smooth">
            <Navbar />
            <Hero />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <Archive />
            <Footer />
        </div>
         )}
        </>
    )
}

export default LandingScreen
