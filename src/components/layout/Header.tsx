import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export const Header = () => {
    const navigate = useNavigate()

    const handleClickOnLogo = () => {
        navigate("/")
    }
    return (
        <header>
            <h1 onClick={handleClickOnLogo}>Fake Admin</h1>

            <nav>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
            </nav>
        </header>
    )
}