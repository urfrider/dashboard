// test api for user and customers

export function fetchUsers() {
    return fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json());
}

export function fetchCustomers() {
    return fetch(`https://dummyjson.com/users`).then(response => response.json());
}