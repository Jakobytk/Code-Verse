const NavBar = ({ onPageChange }) => {
    return (
        <nav>
            <ul>
                <li onClick={() => onPageChange('homepage')}>HomePage</li>
                <li onClick={() => onPageChange('login')}>Login</li>
                <li onClick={() => onPageChange('profile')}>ProfilePage</li>
            </ul>
        </nav>
    );
}

export default NavBar;