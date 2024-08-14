import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Logo from "./Space-Tourism/assets/shared/logo.svg"
function App() {
  return (
    <div className="relative ">
      <img className="absolute w-10 h-10 z-50 top-3 left-7 sm:w-min sm:h-min lg:top-10" src={Logo} alt="logo" />
      <Router>
        <Navbar />
        <MobileNav />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Crew/*" element={<Crew />} />
          <Route path="/Destination/*" element={<Destination />} />
          <Route path="/Technology/*" element={<Technology />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
