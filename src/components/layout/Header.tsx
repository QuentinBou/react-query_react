import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { getUser } from "../../api/users.api"
import { useQuery } from "@tanstack/react-query"
import type { User } from "../../types/users"
import { USER_ID } from "../../api/http"

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`

const StyledLogo = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
    cursor: pointer;
`

const StyledUserName = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
    cursor: pointer;
`

const StyledUserNameSkeleton = styled.span`
    width: 100px;
    height: 1.2rem;
    background-color: #e0e0e0;
    border-radius: 0.5rem;
`

export const Header = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data: user, isPending, error } = useQuery<User, Error>({
        queryKey: ["user"],
        queryFn: () => getUser(USER_ID),
    })
    const handleClickOnLogo = () => {
        navigate("/")
    }

    const handleNavigateToProfile = () => {
        if (id === USER_ID.toString()) return
        navigate(`/users/${USER_ID}`)
    }
    return (
        <StyledHeader>
            <StyledLogo onClick={handleClickOnLogo}>Fake Posting Platform</StyledLogo>
            {(isPending || error) && <StyledUserNameSkeleton />}
            {user && <StyledUserName onClick={handleNavigateToProfile}>{user.name}</StyledUserName>}
        </StyledHeader>
    )
}