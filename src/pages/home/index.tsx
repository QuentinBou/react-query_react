import { useQuery } from "@tanstack/react-query"
import styled from "styled-components"
import { getPosts } from "../../api/posts.api"
import type { Post } from "../../types/posts"
import { PostItem } from "../../components/posts/PostItem"
import { PostItemSkeleton } from "../../components/posts/PostItemSkeleton"
import { shuffleArray } from "../../utils"

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: #f0f0f0;
    width: 100%;
    height: 100%;
`

const StyledHomePageTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #000;
`

const StyledHomePagePostsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`

export const HomePage = () => {
    const { data: posts, isPending } = useQuery<Post[], Error>({
        queryKey: ["posts"],
        queryFn: () => getPosts(),
        select: (data) => shuffleArray(data),
    })

    return (
        <StyledHomePage>
            <StyledHomePageTitle>Current posts</StyledHomePageTitle>
            <StyledHomePagePostsGrid>
                {isPending ? Array.from({ length: 25 }).map((_, index) => (
                    <PostItemSkeleton key={index} />
                )) : posts?.map((post) => (
                    <PostItem key={post.id} post={post} />
                )) }
            </StyledHomePagePostsGrid>
      </StyledHomePage>
    );
  };