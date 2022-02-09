import '../Navbar/style.css';
import CartWidget from '../CartWidget/index.jsx';
import logo from './logo.png';
import { Link } from 'react-router-dom';

export default function Navbar () {

    return (
        <header className='header'>
            <Link to="/"><img src={logo} alt='logo' className='header__nav--logo'/></Link>
            <ul className='header__filters'>
                <li>
                    <Link to="category/parlantes">Parlantes</Link>
                </li>
                <li>
                    <Link to="category/auriculares">Auriculares</Link>
                </li>
            </ul>
            <ul className='header__nav'>
                <li>
                    <Link to="/">Shop</Link>
                </li>
                <li>Log in</li>
                <li>
                    <Link to="cart"><CartWidget /></Link>
                </li>
            </ul>
        </header>
    )
}