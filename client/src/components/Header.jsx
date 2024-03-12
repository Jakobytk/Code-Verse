import { Link } from 'react-router-dom';
 
import Auth from '../utils/auth';
import './Header.css';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().authenticatedPerson.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="logo" to="/login">
                Login
              </Link>
              <Link className="logo" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="h1-tag">Code Verse</h1>
          </Link>
          <p className="p-tag">Open your mind to Coding</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
