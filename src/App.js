import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/account/SignIn";
import SignUp from "./pages/account/SignUp";
import Home from "./pages/Home/Home";
import InsuranceMain from "./pages/insurance/InsuranceMain";
import InsuranceWhere from "./pages/insurance/insuranceWhere";

function App() {
    return (
        <Routes>
            {/* Account */}
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/insurance" element={<InsuranceMain />}></Route>
            <Route path="/insurance/qna1" element={<InsuranceWhere />}></Route>
        </Routes>
    );
}

export default App;
