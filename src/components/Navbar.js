import './css/Navbar.css';

export default function Navbar () {
    return (
        <header className='header'>
            <h3>LOGO</h3>
            <ul className='header__nav'>
                <li>Shop</li>
                <li>Contact</li>
                <li>About</li>
                <li>Log in</li>
            </ul>
        </header>
    )
}