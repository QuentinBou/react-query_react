import type { User } from "../types/users"
import { BASE_URL } from "./http"

export const getUsers = () => fetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
}).then(res => {
    if (!res.ok) {
        throw new Error("Failed to fetch users")
    }
    return res.json() as Promise<User[]>
})

export const getUser = (id: number) => fetch(`${BASE_URL}/users/${id}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
}).then(res => {
    if (!res.ok) {
        throw new Error("Failed to fetch user")
    }
    return res.json() as Promise<User>
})