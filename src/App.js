import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/account/SignIn";
import SignUp from "./pages/account/SignUp";
import Home from "./pages/Home/Home";
import SignUpInfo from "./pages/account/SignUpInfo";
import SignUpSuccess from "./pages/account/SignUpSuccess";

function App() {
    return (
        <Routes>
            {/* Account */}
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/SignUp/Info" element={<SignUpInfo />}></Route>
            <Route path="/SignUp/success" element={<SignUpSuccess />}></Route>

            <Route path="/Home" element={<Home />}></Route>
        </Routes>
    );
}

export default App;
