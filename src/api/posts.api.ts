import type { Post } from "../types/posts"
import { BASE_URL } from "./http"

export const getPosts = (): Promise<Post[]> => fetch(`${BASE_URL}/posts`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
}).then(async res => {
    if (!res.ok) {
        throw new Error("Failed to fetch posts")
    }
    // wait 2.5 seconds to simulate a slow network
    await new Promise(resolve => setTimeout(resolve, 2500))
    return res.json() as Promise<Post[]>
})

export const getPostsByUserId = (userId: number): Promise<Post[]> => fetch(`${BASE_URL}/posts?userId=${userId}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
}).then(async res => {
    if (!res.ok) {
        throw new Error("Failed to fetch posts")
    }
    return res.json() as Promise<Post[]>
}).catch(() => {
    throw new Error("Failed to fetch posts by user id")
})
