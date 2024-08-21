import "./App.css";
import { Route, Routes,Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";
import InvalidRoute from "./components/InvalidRoute";
import OnlyLogin from "./components/OnlyLogin"
import Card1 from "./components/Pages/Card1";
import Card2 from "./components/Pages/Card2";
import Card3 from "./components/Pages/Card3";
import Cards from "./components/Cards";
function App() {
  return (
    <div>
      <button><Link to="/" element={<Home/>}>Home</Link></button>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route element={<Login />}>
            <Route path="Nav" element={<Nav />} />
            <Route path="Nav" element={<Cards />}>
              <Route path="Card1" element={<Card1 />} />
              <Route path="Card2" element={<Card2 />} />
              <Route path="Card3" element={<Card3 />} />
            </Route>
          </Route>
          <Route path="/Login" element={<OnlyLogin />} />
        <Route path="*" element={<InvalidRoute />} />
      </Routes>
    </div>
  );
}

export default App;