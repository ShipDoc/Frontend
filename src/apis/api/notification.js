import { authInstance } from "../utils/instance";

// 수신 정보 가져오기
export const getNotification = async () => {
    try {
        const result = await authInstance.get('/api/members/health-checkup/notification');
        return result.data;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};

// 수신 동의 및 전화번호 업데이트
export const updateNotification = async (phone) => {
    try {
        const result = await authInstance.put('/api/members/health-checkup/notification', {
            phone
        });
        return result.data;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};

// 수신 거절
export const deleteNotification = async () => {
    try {
        const result = await authInstance.delete('/api/members/health-checkup/notification');
        return result.data;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};
