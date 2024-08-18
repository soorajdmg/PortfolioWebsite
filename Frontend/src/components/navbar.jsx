import './navbar.css';
import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
    const [isHorizontal, setIsHorizontal] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const navMenuRef = useRef(null);
    const progressRef = useRef(null);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const sections = ['hero', 'about', 'work', 'contact', 'footer'];
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Toggle horizontal layout based on scroll position
        const triggerPoint = window.innerHeight / 2;
        if (scrollPosition > triggerPoint) {
            setIsHorizontal(true);
        } else {
            setIsHorizontal(false);
        }

        // Highlight active section
        sections.forEach((section) => {
            const element = document.querySelector(`.${section}`);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setActiveSection(section);
                }
            }
        });

        // Update progress bar
        const progressWidth = (scrollPosition / totalHeight) * 100;
        if (progressRef.current) {
            progressRef.current.style.width = `${progressWidth}%`;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToSection = (sectionClass) => {
        const targetSection = document.querySelector(`.${sectionClass}`);
        if (targetSection) {
            const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                behavior: 'smooth',
                top: targetPosition,
            });
        }
    };

    return (
        <div className='navbar'>
            <ul ref={navMenuRef} className={`nav-menu ${isHorizontal ? 'horizontal' : 'vertical'}`}>
                <li onClick={() => handleScrollToSection('hero')} className={`nav-home ${activeSection === 'hero' ? 'active' : ''}`}>Home</li>
                <li onClick={() => handleScrollToSection('about')} className={`nav-about ${activeSection === 'about' ? 'active' : ''}`}>About</li>
                <li onClick={() => handleScrollToSection('work')} className={`nav-work ${activeSection === 'work' ? 'active' : ''}`}>Works</li>
                <li onClick={() => handleScrollToSection('contact')} className={`nav-contact ${activeSection === 'contact' ? 'active' : ''}`}>Contact</li>
            </ul>
            <div className='progress-indicator' ref={progressRef}></div>
        </div>
    );
};

export default Navbar;
