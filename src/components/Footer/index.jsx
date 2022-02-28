import './style.css';

const year = new Date();

const Footer = () => {
    return (
        <div className="footer">
            <p>Audio Shop - {year.getFullYear()}</p>
        </div>
    )
}

export default Footer;