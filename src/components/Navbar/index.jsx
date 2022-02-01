import '../Navbar/style.css';
import CartWidget from '../CartWidget/index.jsx';
import logo from './logo.png';

export default function Navbar () {
    return (
        <header className='header'>
            <img src={logo} alt='logo' className='header__nav--logo'/>
            <ul className='header__nav'>
                <li>Shop</li>
                <li>Contact</li>
                <li>About</li>
                <li>Log in</li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </header>
    )
}