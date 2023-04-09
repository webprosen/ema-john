import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
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
            </div>
        </div>
    );
};

export default Header;