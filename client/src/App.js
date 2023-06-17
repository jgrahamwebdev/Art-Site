
import './App.css';
import { motion } from "framer-motion"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from './screens/LandingScreen';
import { useEffect, useState } from 'react';

function App() {
  // **Add 'cursor: none;' to App.css 
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  // const [cursorVariant, setCursorVariant] = useState("default")

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   }

  //   window.addEventListener("mousemove", mouseMove)

  //   return () => {
  //     window.removeEventListener("mouseMove", mouseMove)
  //   }
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 10,
  //     y: mousePosition.y - 10,
  //     backgroundColor: "#EEFF30",
  //     mixBlendMode: "difference",
  //     border: "2px solid #000"
  //   },
    // Will make curosor get bigger when add properites to text
    // text: {
    //   height: 100,
    //   width: 100,
    //   x: mousePosition.x - 75,
    //   y: mousePosition.y - 75,
    // }
  // }

  // Cursor Functions
  // const textEnter = () => {
  //   setCursorVariant("text")
  // }
  // const textLeave = () => {
  //   setCursorVariant("default")
  // }

  return (
    <Router>
      {/* <motion.div className='h-[32px] w-[32px] rounded-full fixed top-0 left-0 z-50 pointer-events-none' variants={variants} animate={cursorVariant}/> */}

      {/* Add this into any text or image tags */}
      {/* onMouseEnter={textEnter} onMouseLeave={textLeave} */}
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingScreen /> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
