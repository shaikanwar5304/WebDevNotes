import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Pricing from "./pages/Pricing/Pricing";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Premium from "./pages/Pricing/Premium";
import Free from "./pages/Pricing/Free";
import { useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Protected from "./pages/Protected";
import Validate from "./pages/Validate";

function App() {
  let currLocation = useLocation()
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/pricing" element={<Pricing />}>
          <Route path="Free" element={<Free />} />
          {/**in nesting we shouldnot use /Free */}
          <Route path="Premium" element={<Premium />} />
        </Route>
        
        <Route element={<Validate/>} >{/**first goes into this and checks validation */}
          <Route path="/Protected" element={<Protected/>} />
        </Route>

        <Route path="/user/:userId" element={<Profile />} />
        <Route path="/user/:userId/:project" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      currentLocation : {currLocation.pathname}
    </div>
  );
}

export default App;
