import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/account/SignIn";
import Home from "./pages/Home/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/Home" element={<Home />}></Route>
        </Routes>
    );
}

export default App;
