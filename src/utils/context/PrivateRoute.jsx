import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ element: Element }) => {
    const { auth } = useAuth();
    const navigate = useNavigate();

    if (!auth) {
        alert("로그인된 사용자만 이용 가능합니다.");
        return <Navigate to="/" />;
    }

    return <Element />;
};

export default PrivateRoute;
