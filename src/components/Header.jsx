import { Link } from "react-router-dom";

function Header() {

    return (
        <nav>

            <Link to="/">Home</Link>

            <Link to="/students">Students</Link>

            <Link to="/about">About</Link>

        </nav>
    );
}

export default Header;