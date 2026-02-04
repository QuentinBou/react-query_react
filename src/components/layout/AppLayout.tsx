import { Fragment } from "react/jsx-runtime"
import { Header } from "./Header"
import styled from "styled-components"

const StyledMain = styled.main`
    width: 100%;
    height: 100%;
`

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Fragment>
            <Header />
            <StyledMain>
                {children}
            </StyledMain>
        </Fragment>
    )
}