import type {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import type {SerializedError} from "@reduxjs/toolkit";

type RTKError = FetchBaseQueryError | SerializedError | undefined;

export default function getErrorMessage(error: RTKError): string {
    if (error) {
        if ("status" in error) {
            if ("data" in error &&
                typeof error.data === "object" &&
                error.data !== null &&
                "message" in error.data
            ) {
                return String(error.data.message);
            }

            if (error.status === "FETCH_ERROR") {
                return "Не удалось сделать запрос";
            }

            if (error.status === "PARSING_ERROR") {
                return "Был получен неверный формат";
            }

            if (error.status === "TIMEOUT_ERROR") {
                return "Вышло время ожидания ответа от сервера";
            }

            if (error.status === "CUSTOM_ERROR") {
                return error.error;
            }

            return "Неизвестная ошибка";
        }

        if (
            "message" in error &&
            typeof error.message === "string"
        ) {
            return  error.message;
        }

        return "Неизвестная ошибка";
    }
    else {
        return "Неизвестная ошибка";
    }
}