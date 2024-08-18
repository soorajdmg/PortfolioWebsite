import './footer.css';
import githubIcon from '../assets/icons/github-fill.svg';
import instagramIcon from '../assets/icons/instagram-fill.svg';
import linkedinIcon from '../assets/icons/linkedin-box-fill.svg';

const Footer = () => {
    return (
        <div className="footer">
            <h1 className='footerDivider'></h1>
            <div className="footer-content">
                <div className="contact-section">
                    <h2>Contact</h2>
                    <p className='emailText'>Email: soorajmurugaraj@gmail.com</p>
                    <p className='phoneText'>Phone: (+91) 9846249930</p>
                </div>
                <div className="social-section">
                    <h2>Follow</h2>
                    <div className="social-icons">
                        <a href="https://github.com/soorajdmg" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/sooraj-murugaraj-284b23285" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://www.instagram.com/sooraj.dmg" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Sooraj Murugaraj. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
