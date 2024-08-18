import './about.css';
import profileImage from '../assets/images/pfp.jpeg';
import { useState, useRef, useEffect } from 'react';

const About = () => {
    const [showMore, setShowMore] = useState(false);
    const [inView, setInView] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (aboutRef.current) {
                const rect = aboutRef.current.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    setInView(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`about ${inView ? 'animate' : ''}`} ref={aboutRef}>
            <div className="about-header">
                <div className="profile-container">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                    <div className="profile-info">
                        <h2><span>Hi, I'm Sooraj!</span></h2>
                        <p>
                            <span>I'm a B.Tech Computer Science student with a passion for software development and game creation.</span>
                        </p>
                        <div onClick={() => setShowMore(!showMore)}
                            className={`toggle-button ${showMore ? 'active' : 'inactive'}`}>
                            {showMore ? 'Show Less' : 'Read More'}
                            <div className="arrowIcon">
                                <i className="ri-arrow-right-s-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`about-details ${showMore ? 'show' : ''}`}>
                {showMore && (
                    <>
                        <h3>Experience & Skills</h3>
                        <p>I specialize in Python, C, C++, MySQL, HTML, CSS, and modern frameworks like React and Node.js. My projects range from necessity driven solutions to innovative game development.</p>
                        <h3>Achievements</h3>
                        <p>Certifications from IBM SkillsBuild and participation in notable hackathons like Xinnovate 2024 showcase my commitment to technology and innovation.</p>
                        <h3>Interests</h3>
                        <p>Beyond coding, I enjoy exploring new technologies, playing games, and diving into science fiction.</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default About;
