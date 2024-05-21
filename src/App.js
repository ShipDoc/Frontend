import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/account/SignIn";
import SignUp from "./pages/account/SignUp";
import Home from "./pages/Home/Home";
import Insurance from "./pages/insurance/Insurance";
import InsuranceFAQ1 from "./pages/insurance/InsuranceFAQ1";

function App() {
    return (
        <Routes>
            {/* Account */}
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/insurance" element={<Insurance />}></Route>
            <Route path="/insurance/FAQ1" element={<InsuranceFAQ1 />}></Route>
        </Routes>
    );
}

export default App;
