import {API_URL, authToken} from "./auth";

export function getAllOrders() {
    const auth = authToken();
    console.log(auth);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", auth);
    return fetch(`${API_URL}/orders`, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(error => console.log('error', error));
}

export function getOrder(id: number) {
    const myHeaders = new Headers();
    const auth = authToken();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", auth);
    return fetch(`${API_URL}/orders/${id}`, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => {
            return result.data;
        })
        .catch(error => console.log('error', error));
}

export function createOrder(order: object) {
    const myHeaders = new Headers();
    const auth = authToken();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", auth);
    const raw = JSON.stringify(order);
    return fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => {
            return result.data;
        })
        .catch(error => console.log('error', error));
}

export function updateOrder(id: number, order: object) {
    const myHeaders = new Headers();
    const auth = authToken();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", auth);
    const raw = JSON.stringify(order);
    return fetch(`${API_URL}/orders/${id}`, {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => {
            return result.data;
        })
        .catch(error => console.log('error', error));
}

export function deleteOrder(id: number) {
    const myHeaders = new Headers();
    const auth = authToken();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", auth);
    return fetch(`${API_URL}/orders/${id}`, {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => {
            return result.data;
        })
        .catch(error => console.log('error', error));
}