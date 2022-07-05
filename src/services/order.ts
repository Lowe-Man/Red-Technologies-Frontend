import {API_URL, authToken} from "./auth";

export class HttpError extends Error {
    constructor(public status: number, public message: string) {
        super(message);
        this.status = status;
    }
}

export async function getAllOrders() {
    const auth = authToken();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", auth);
    const response = await fetch(`${API_URL}/orders`, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    });
    const result = await response.json();
    return result.map((order: { CreatedDate: any; Id: any; CreatedByUserName: any; OrderType: any; CustomerName: any; }) => {
        const date = order.CreatedDate + "Z";
        const local = new Date(date).toLocaleString();
        return {
            Id: order.Id,
            CreatedDate: local,
            CreatedByUserName: order.CreatedByUserName,
            OrderType: order.OrderType,
            CustomerName: order.CustomerName,
        }
    });
}

export async function searchForOrder(customer: string, orderType: string) {
    const auth = authToken();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", auth);
    const response = await fetch(`${API_URL}/orders/${customer}/${orderType}`, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    });
    const result = await response.json();
    return result.map((order: { CreatedDate: any; Id: any; CreatedByUserName: any; OrderType: any; CustomerName: any; }) => {
        const date = order.CreatedDate + "Z";
        const local = new Date(date).toLocaleString();
        return {
            Id: order.Id,
            CreatedDate: local,
            CreatedByUserName: order.CreatedByUserName,
            OrderType: order.OrderType,
            CustomerName: order.CustomerName,
        }
    });
}

export async function getOrder(id: string) {
    const myHeaders = new Headers();
    const auth = authToken();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", auth);
    const response = await fetch(`${API_URL}/orders/${id}`, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    });
    return await response.json();
}

export async function createOrder(order: object) {
    const myHeaders = new Headers();
    const auth = authToken();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", auth);
    const raw = JSON.stringify(order);
    const response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    });
    return response.json();
}

export function updateOrder(id: number, order: object) {
    const myHeaders = new Headers();
    const auth = authToken();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", auth);
    // @ts-ignore
    order.CreatedDate = new Date(order.CreatedDate).toISOString();
    const raw = JSON.stringify(order);
    return fetch(`${API_URL}/orders/${id}`, {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => {
            return result;
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
            return result;
        })
        .catch(error => console.log('error', error));
}