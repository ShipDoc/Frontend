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
import MyPageApointment from "./pages/MyPage/Apointment";
import MyPageApointmentNull from "./pages/MyPage/ApointmentNull";
import MyPageApointmentDetail from "./pages/MyPage/ApointmentDetail";
import MyPageHistory from "./pages/MyPage/History";
import MyPageHistoryNull from "./pages/MyPage/HistoryNull";
import MyPageHistoryDetail from "./pages/MyPage/HistoryDetail";
import HealthCare from "./pages/HealthCare/HealthCare";
import HealthCareHistory from "./pages/HealthCare/HealthCareHistory.jsx";
import HealthCareHistoryDetail from "./pages/HealthCare/HealthCareHistoryDetail.jsx";
import Reservation from "./pages/detail/Reservation";
import Payment from "./pages/detail/Payment";
import NoPay from "./pages/detail/NoPay";
import SuccessRes from "./pages/detail/SuccessRes";
import SearchHospitalBySubject from "./pages/SearchHospital/SearchHospitalBySubject.jsx";
import SearchHospital from "./pages/SearchHospital/SearchHospital";
import SearchHospitalBySymptom from "./pages/SearchHospital/SearchHospitalBySymptom";
import Chat from "./pages/chat/Chat.jsx";


function App() {
  return (
    <Routes>
      {/* Account */}
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/SignUp/Info" element={<SignUpInfo />}></Route>
      <Route path="/SignUp/success" element={<SignUpSuccess />}></Route>

      {/* Main */}
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/HealthCare" element={<HealthCare />}></Route>
      <Route path="/HealthCare/History" element={<HealthCareHistory />}></Route>
      <Route path="/healthcare/History/detail" element={<HealthCareHistoryDetail />} />

      {/* SearchHospital */}
      <Route path="/SearchHospitalBySymptom" element={<SearchHospitalBySymptom />}></Route>
      <Route path="/SearchHospitalBySubject" element={<SearchHospitalBySubject />}></Route>
      <Route path="/SearchHospital" element={<SearchHospital />}></Route>

      <Route path="/insurance" element={<Insurance />}></Route>
      <Route path="/insurance/FAQ1" element={<InsuranceFAQ1 />}></Route>

      {/* Detail */}
      <Route path="/detail" element={<Detail />}></Route>
      <Route path="/detail/reservation" element={<Reservation />}></Route>
      <Route path="/detail/pay" element={<Payment />}></Route>
      <Route path="/detail/noPay" element={<NoPay />}></Route>
      <Route path="/detail/success" element={<SuccessRes />}></Route>

      {/* MyPage */}
      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/mypage/apointment" element={<MyPageApointment />}></Route>
      <Route
        path="/mypage/apointmentNull"
        element={<MyPageApointmentNull />}
      ></Route>
      <Route path="/mypage/apointment/detail" element={<MyPageApointmentDetail />}></Route>


      <Route path="/mypage/history" element={<MyPageHistory />}></Route>
      <Route path="/mypage/historyNull" element={<MyPageHistoryNull />}></Route>
      <Route path="/mypage/history/detail" element={<MyPageHistoryDetail />}></Route>


      {/* Chat */}
      <Route path="/chat" element={<Chat />}></Route>
    </Routes>
  );
}

export default App;
