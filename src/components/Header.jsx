import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="cyan lighten-4">
            <div className="nav-wrapper">
                <Link
                    to="/"
                    className="brand-logo blue-grey-text text-darken-2"
                >
                    Our recipes
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/" className="blue-grey-text text-darken-2">
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export { Header };
