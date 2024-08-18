import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import './hero.css';

const Hero = () => {
    const [currentText, setCurrentText] = useState("Software Developer");
    const texts = ["Software Developer", "Web Developer", "Game Developer"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        gsap.to(".tiles", {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3,
        });

        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % texts.length;

            const outgoingText = document.querySelector(".outgoingText");
            const incomingText = document.querySelector(".incomingText");

            // Set the incoming text content
            incomingText.textContent = texts[nextIndex];

            // Animate out the old text and animate in the new text with delay
            const tl = gsap.timeline();
            tl.to(outgoingText, { opacity: 0, y: -20, duration: 1, ease: "power2.out" })
                .fromTo(incomingText, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "easeInOutQuad" }, "-=0.5")
                .call(() => {
                    // After the animation, swap the roles of outgoing and incoming texts
                    setCurrentIndex(nextIndex);
                    outgoingText.classList.remove("outgoingText");
                    outgoingText.classList.add("incomingText");
                    incomingText.classList.remove("incomingText");
                    incomingText.classList.add("outgoingText");
                    // Update the current text state to keep it in sync
                    setCurrentText(texts[nextIndex]);
                });
        }, 2000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, [currentIndex, texts]);

    return (
        <div className="hero">
            <div className="tiles" id="tile1"></div>
            <div className="tiles" id="tile2"></div>
            <div className="tiles" id="tile3">
                <h1 className="name">Sooraj Murugaraj</h1>
            </div>
            <div className="tiles" id="tile4">
                <h1 className="rotatingText outgoingText">{currentText}</h1>
                <h1 className="rotatingText incomingText" style={{ opacity: 0, y: 20 }}>{currentText}</h1>
            </div>
            <div className="tiles" id="tile5"></div>
        </div>
    );
};

export default Hero;
