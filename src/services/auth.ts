export const API_URL = "https://localhost:5001/api";

export function signup(name: string, email: string, password: string): object {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "Email": email,
        "FullName": name,
        "Password": password
    });

    return fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => {
            if (result.token) {
                localStorage.setItem("user", result.token);
            }
            return result.token;
        })
        .catch(error => console.log('error', error));
}

export function login(email: string, password: string): object {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "Email": email,
        "Password": password
    });

    return fetch(`${API_URL}/authenticate`, {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => {
            if (result.token) {
                localStorage.setItem("user", result.token);
            }
            console.log(localStorage.getItem("user"));
            return result.token;
        })
        .catch(error => console.log('error', error));
}

export function logout(): void {
    localStorage.removeItem("user");
}

export function authToken(): string {
    let user = localStorage.getItem("user");
    if (user !== null) {
        return `Bearer ${user}`;
    }
    return "";
}