import '../Navbar/style.css';
import CartWidget from '../CartWidget/index.jsx';

export default function Navbar () {
    return (
        <header className='header'>
            <h3>LOGO</h3>
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