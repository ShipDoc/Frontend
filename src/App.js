import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/account/SignIn";
import Home from "./pages/Home/Home";
import Insurance from "./pages/insurance/Insurance";

function App() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/insurance" element={<Insurance />}></Route>
        </Routes>
    );
}

export default App;
