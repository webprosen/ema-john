import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogout = () => {
        console.log(user);
        logOut()
        .then()
        .catch(error => {
            console.log(error.message);
        });
    }

    return (
        <div className='header'>
            <div className='header-logo'>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className='header-nav'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                {
                    user && <span className='text-white ms-4'>{user.email} <button onClick={handleLogout}>Logout</button></span>
                }
            </div>
        </div>
    );
};

export default Header;