import { defaultInstance, authInstance } from "../utils/instance";

// 예약 내역 가져오기
export const getReservations = async () => {
    try {
        const result = await authInstance.get(`/api/reservations/check-all`);
        return result.data;
    } catch (e) {
        return { message: e.response.data.message, status: e.response.status };
    }
};

// 예약 취소하기
export const deleteReservations = async (reservationId) => {
    try {
        const result = await authInstance.delete(`/api/reservations/${reservationId}`);
        return result.data;
    } catch (e) {
        console.error("Error deleting reservation:", e.response.data);
        return { message: e.response.data.message, status: e.response.status };
    }
};
