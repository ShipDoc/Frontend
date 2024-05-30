import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/account/SignIn";
import SignUp from "./pages/account/SignUp";
import Home from "./pages/Home/Home";
import SignUpInfo from "./pages/account/SignUpInfo";
import SignUpSuccess from "./pages/account/SignUpSuccess";
import Insurance from "./pages/insurance/Insurance";
import InsuranceFAQ1 from "./pages/insurance/InsuranceFAQ1";
import InsuranceFAQ2 from "./pages/insurance/InsuranceFAQ2";
import InsuranceFAQ3 from "./pages/insurance/InsuranceFAQ3";
import InsuranceFAQ4 from "./pages/insurance/InsuranceFAQ4";
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
import HealthCareHistoryReminder from "./pages/HealthCare/ReminderPage.jsx";
import Reservation from "./pages/detail/Reservation";
import Payment from "./pages/detail/Payment";
import NoPay from "./pages/detail/NoPay";
import SuccessRes from "./pages/detail/SuccessRes";
import SearchHospitalBySubject from "./pages/SearchHospital/SearchHospitalBySubject.jsx";
import SearchHospitalBySubjectDetail from "./pages/SearchHospital/SearchHospitalBySubjectDetail.jsx";
import SearchHospital from "./pages/SearchHospital/SearchHospital";
import SearchHospitalBySymptom from "./pages/SearchHospital/SearchHospitalBySymptom";
import SearchHospitalBySymptomDetail from "./pages/SearchHospital/SearchHospitalBySymptomDetail";
import Chat from "./pages/chat/Chat.jsx";
import Health from "./pages/health/Health.jsx";
import Review from "./pages/review/Review.jsx";
import WriteReview from "./pages/review/WriteReview.jsx";
import { AuthProvider } from "./utils/context/AuthContext";
import PrivateRoute from "./utils/context//PrivateRoute";

function App() {
    return (
        <AuthProvider>
            <Routes>
                {/* Account */}
                <Route path="/" element={<SignIn />}></Route>
                <Route path="/SignUp" element={<SignUp />}></Route>
                <Route path="/SignUp/Info" element={<SignUpInfo />}></Route>
                <Route
                    path="/SignUp/success"
                    element={<SignUpSuccess />}
                ></Route>

                {/* Main */}
                <Route path="/Home" element={<PrivateRoute element={Home} />} />
                <Route
                    path="/HealthCare"
                    element={<PrivateRoute element={HealthCare} />}
                ></Route>
                <Route
                    path="/HealthCare/History"
                    element={<PrivateRoute element={HealthCareHistory} />}
                />
                <Route
                    path="/healthcare/History/detail"
                    element={<PrivateRoute element={HealthCareHistoryDetail} />}
                />
                <Route
                    path="/healthcare/History/reminder"
                    element={
                        <PrivateRoute element={HealthCareHistoryReminder} />
                    }
                />

                {/* SearchHospital */}
                <Route
                    path="/SearchHospitalBySymptom"
                    element={<PrivateRoute element={SearchHospitalBySymptom} />}
                ></Route>
                <Route
                    path="/SearchHospitalBySymptom/Detail"
                    element={
                        <PrivateRoute element={SearchHospitalBySymptomDetail} />
                    }
                ></Route>
                <Route
                    path="/SearchHospitalBySubject"
                    element={<PrivateRoute element={SearchHospitalBySubject} />}
                ></Route>
                <Route
                    path="/SearchHospitalBySubject/Detail"
                    element={
                        <PrivateRoute element={SearchHospitalBySubjectDetail} />
                    }
                ></Route>
                <Route
                    path="/SearchHospital"
                    element={<PrivateRoute element={SearchHospital} />}
                ></Route>
                <Route
                    path="/insurance"
                    element={<PrivateRoute element={Insurance} />}
                ></Route>
                <Route
                    path="/insurance/FAQ1"
                    element={<PrivateRoute element={InsuranceFAQ1} />}
                ></Route>
                <Route
                    path="/insurance/FAQ2"
                    element={<PrivateRoute element={InsuranceFAQ2} />}
                ></Route>
                <Route
                    path="/insurance/FAQ3"
                    element={<PrivateRoute element={InsuranceFAQ3} />}
                ></Route>
                <Route
                    path="/insurance/FAQ4"
                    element={<PrivateRoute element={InsuranceFAQ4} />}
                ></Route>

                {/* Detail */}
                <Route
                    path="/detail"
                    element={<PrivateRoute element={Detail} />}
                ></Route>
                <Route
                    path="/detail/reservation"
                    element={<PrivateRoute element={Reservation} />}
                ></Route>
                <Route
                    path="/detail/pay"
                    element={<PrivateRoute element={Payment} />}
                ></Route>
                <Route
                    path="/detail/noPay"
                    element={<PrivateRoute element={NoPay} />}
                ></Route>
                <Route
                    path="/detail/success"
                    element={<PrivateRoute element={SuccessRes} />}
                ></Route>

                {/* Review */}
                <Route
                    path="/detail/review"
                    element={<PrivateRoute element={Review} />}
                ></Route>
                <Route
                    path="/detail/review/write"
                    element={<PrivateRoute element={WriteReview} />}
                ></Route>

                {/* MyPage */}
                <Route
                    path="/mypage"
                    element={<PrivateRoute element={MyPage} />}
                ></Route>
                <Route
                    path="/mypage/apointment"
                    element={<PrivateRoute element={MyPageApointment} />}
                ></Route>
                <Route
                    path="/mypage/apointmentNull"
                    element={<PrivateRoute element={MyPageApointmentNull} />}
                ></Route>
                <Route
                    path="/mypage/apointment/detail"
                    element={<PrivateRoute element={MyPageApointmentDetail} />}
                ></Route>

                <Route
                    path="/mypage/history"
                    element={<PrivateRoute element={MyPageHistory} />}
                ></Route>
                <Route
                    path="/mypage/historyNull"
                    element={<PrivateRoute element={MyPageHistoryNull} />}
                ></Route>
                <Route
                    path="/mypage/history/detail"
                    element={<PrivateRoute element={MyPageHistoryDetail} />}
                ></Route>

                {/* Chat */}
                <Route
                    path="/chat"
                    element={<PrivateRoute element={Chat} />}
                ></Route>

                {/* Health */}
                <Route
                    path="/health"
                    element={<PrivateRoute element={Health} />}
                ></Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
