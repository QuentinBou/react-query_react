import type { Post } from "../../types/posts"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getUser } from "../../api/users.api"
import type { User } from "../../types/users"

const StyledPostItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
`

const StyledPostItemTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
`
const StyledPostItemBody = styled.p`
    font-size: 1rem;
    color: #000;
`

const StyledPostItemAuthor = styled(Link)`
    font-size: 0.8rem;
    color: #000;
`

const StyledPostItemAuthorSkeleton = styled.span`
    width: 100px;
    height: 1.2rem;
    background-color: #e0e0e0;
    border-radius: 0.5rem;
`

export const PostItem = ({ post }: { post: Post }) => {
    const { data: user, isPending } = useQuery<User, Error>({
        queryKey: ["user", post.userId],
        queryFn: () => getUser(post.userId),
    })

    return (
        <StyledPostItem>
            <StyledPostItemTitle>{post.title}</StyledPostItemTitle>
            <StyledPostItemBody>{post.body}</StyledPostItemBody>
            {isPending && <StyledPostItemAuthorSkeleton />}
            {user && <StyledPostItemAuthor to={`/users/${post.userId}`}>{user.name}</StyledPostItemAuthor>}
        </StyledPostItem>
    )
}