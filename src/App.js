import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/account/SignIn";

function App() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />}></Route>
        </Routes>
    );
}

export default App;
