import styled from "styled-components";

const StyledPostItemSkeleton = styled.div`
    width: 100%;
    height: 200px;
    background-color: #e0e0e0;
    border-radius: 0.5rem;
    animation: pulseAnimation 1s infinite;

        @keyframes pulseAnimation {
            0% {
                opacity: 0.5;
            }
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0.5;
            }
        }
`

export const PostItemSkeleton = () => {
    return (
        <StyledPostItemSkeleton />
    )
}