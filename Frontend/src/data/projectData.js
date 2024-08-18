import image1 from '../assets/images/train1.png';
import image2 from '../assets/images/flappyBird1.png';
import image3 from '../assets/images/finance2.jpeg';
import image4 from '../assets/images/password1.jpeg';

const projects = [
    {
        title: 'Train eTicket',
        description: 'An app for train ticket booking, food orders, train tracking, and PNR checks.',
        image: image1,
        fullDescription: 'Train eTicket is a comprehensive app that allows users to book train tickets, order food, track trains in real-time, and check PNR status. It features a user-friendly interface and integrates with various APIs to provide accurate information.',
        technologies: ['Python3', 'MySQL'],
        link: '#',
    },
    {
        title: 'Flappy Bird',
        description: 'A game where you guide a bird through pipes, aiming for high scores and avoiding obstacles.',
        image: image2,
        fullDescription: 'Flappy Bird is a simple yet addictive game where players navigate a bird through a series of pipes by tapping the screen. The goal is to achieve the highest score possible by avoiding obstacles and successfully passing through pipes.',
        technologies: ['Unity', 'C#'],
        link: '#',
    },
    {
        title: 'Finance Tracker',
        description: 'An app for tracking expenses, managing budgets, and analyzing financial data.',
        image: image3,
        fullDescription: 'Finance Tracker helps users manage their personal finances by tracking expenses, setting budgets, and analyzing financial data. The app provides insightful charts and reports to help users make informed financial decisions.',
        technologies: ['Python3', 'Google API'],
        link: '#',
    },
    {
        title: 'Password Manager',
        description: 'An app for securely storing and managing passwords, with easy access and encryption.',
        image: image4,
        fullDescription: 'Password Manager securely stores and manages user passwords. It includes features such as password generation, encryption, and easy access. Users can store multiple passwords and retrieve them securely as needed.',
        technologies: ['Python3', 'Hashing', 'MySQL'],
        link: '#',
    },
];

export default projects;
