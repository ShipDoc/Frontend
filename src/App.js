import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/account/SignIn";
import SignUp from "./pages/account/SignUp";
import Home from "./pages/Home/Home";
import SignUpInfo from "./pages/account/SignUpInfo";
import SignUpSuccess from "./pages/account/SignUpSuccess";
import Insurance from "./pages/insurance/Insurance";
import InsuranceFAQ1 from "./pages/insurance/InsuranceFAQ1";
import Detail from "./pages/detail/Detail";

function App() {
    return (
        <Routes>
            {/* Account */}
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/SignUp/Info" element={<SignUpInfo />}></Route>
            <Route path="/SignUp/success" element={<SignUpSuccess />}></Route>

            <Route path="/Home" element={<Home />}></Route>
            <Route path="/insurance" element={<Insurance />}></Route>
            <Route path="/insurance/FAQ1" element={<InsuranceFAQ1 />}></Route>

            {/* Detail */}
            <Route path="/detail" element={<Detail />}></Route>
        </Routes>
    );
}

export default App;
