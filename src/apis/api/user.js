/**
 * 사용자 관련 API
 */
import { defaultInstance, authInstance } from "../utils/instance";

// 회원가입
export const signup = async (userInfo) => {
    try {
        const result = await defaultInstance.post(`/api/members`, userInfo);
        return result;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};

// 로그인
export const signin = async (userInfo) => {
    try {
        const result = await defaultInstance.post(`/api/auth/login`, userInfo);
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
};

// 인증번호 요청
export const sms = async (phoneNumber) => {
    try {
        const result = await defaultInstance.post(
            `/api/members/sms`,
            phoneNumber
        );
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
};

// 인증번호 검증
export const verifyCode = async (numberInfo) => {
    try {
        const result = await defaultInstance.post(
            `/api/members/sms/verify`,
            numberInfo
        );
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
};

// 로그아웃
export const signout = async () => {
    try {
        const { data, status } = await defaultInstance.post(
            `/api/user/signOut`
        );
        return { data, status };
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};

// 사용자 이름 확인
export const getName = async () => {
    try {
        const result = await authInstance.get(`/api/members/user-name`);
        return result;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};
