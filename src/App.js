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
import MyPage from "./pages/MyPage/MyPage";
import MyPageApointment from "./pages/MyPage/Apionment";
import MyPageApointmentNull from "./pages/MyPage/ApointmentNull";
import MyPageHistory from "./pages/MyPage/History";
import MyPageHistoryNull from "./pages/MyPage/HistoryNull";
import HealthCare from "./pages/HealthCare/HealthCare";

function App() {

  return (
    <Routes>
      {/* Account */}
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/SignUp/Info" element={<SignUpInfo />}></Route>
      <Route path="/SignUp/success" element={<SignUpSuccess />}></Route>

      <Route path="/Home" element={<Home />}></Route>
      <Route path="/HealthCare" element={<HealthCare />}></Route>

      <Route path="/insurance" element={<Insurance />}></Route>
      <Route path="/insurance/FAQ1" element={<InsuranceFAQ1 />}></Route>

      {/* Detail */}
      <Route path="/detail" element={<Detail />}></Route>

      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/mypage/apointment" element={<MyPageApointment />}></Route>
      <Route
        path="/mypage/apointmentNull"
        element={<MyPageApointmentNull />}
      ></Route>
      <Route path="/mypage/history" element={<MyPageHistory />}></Route>
      <Route path="/mypage/historyNull" element={<MyPageHistoryNull />}></Route>
    </Routes>
  );
}

export default App;
