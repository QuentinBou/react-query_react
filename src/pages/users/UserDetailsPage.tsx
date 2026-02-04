import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { getPostsByUserId } from "../../api/posts.api"
import { PostItem } from "../../components/posts/PostItem"
import { PostItemSkeleton } from "../../components/posts/PostItemSkeleton"
import type { Post } from "../../types/posts"
import { shuffleArray } from "../../utils"

const StyledUserDetailsPage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: #f0f0f0;
    width: 100%;
    height: 100%;
`

const StyledUserDetailsPageTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #000;
`

const StyledUserPostsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`

export const UserDetailsPage = () => {
    const { id } = useParams()
    const { data: posts, isPending: isPostsPending } = useQuery<Post[], Error>({
        queryKey: ["posts", id],
        queryFn: () => getPostsByUserId(Number(id)),
        select: (data) => shuffleArray(data),
    })
    return (
        <StyledUserDetailsPage>
            <StyledUserDetailsPageTitle>User Posts</StyledUserDetailsPageTitle>
            <StyledUserPostsGrid>
                {isPostsPending ? Array.from({ length: 25 }).map((_, index) => (
                    <PostItemSkeleton key={index} />
                )) : posts?.map((post) => (
                    <PostItem key={post.id} post={post} />
                ))}
            </StyledUserPostsGrid>
        </StyledUserDetailsPage>
    )   
}