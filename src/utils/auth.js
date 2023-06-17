export const BASE_URL = "https://auth.nomoreparties.co/";

export function register(email, password) {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, email }),
    }).then((res) => checkError(res));
}

export function authorize (email, password) {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, email }),
    }).then((res) => checkError(res));
}

function checkError(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}
