
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from './screens/LandingScreen';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingScreen /> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
