import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link className= "btn btn-lg btn-primary m-2" to="/HomePage">Home Page</Link>
                </li>
                <li>
                    <Link className= "btn btn-lg btn-primary m-2" to="/Login">Login</Link>
                </li>
                <li>
                    <Link className= "btn btn-lg btn-primary m-2" to= "/SignUp">Sign Up</Link>
                </li>
                <li>
                    <Link className= "btn btn-lg btn-primary m-2" to="Profile/:profileId">Profile Page</Link>
                </li>
                <a href="https://github.com/Jakobytk">Jacob's GitHub</a>
                <a href="https://github.com/KKBellew">KKBellew's GitHub</a>
                <a href="https://github.com/KristoferVickers">Kristofer's GitHub</a>
            </ul>
        </nav>
    );
}

export default NavBar;