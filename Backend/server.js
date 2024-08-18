const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path'); 

// Load environment variables from .env file
dotenv.config();

// console.log('EMAIL_USER:', process.env.EMAIL_USER);
// console.log('EMAIL_PASS:', process.env.EMAIL_PASS);
// console.log('EMAIL_TO:', process.env.EMAIL_TO);

const app = express();
const port = 5000;

app.use(cors({
    origin: 'https://soorajmurugaraj.netlify.app', // Replace with your actual domain
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

// Basic route for testing server is running
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        console.error('Validation error: All fields are required');
        return res.status(400).send('All fields are required');
    }

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions1 = {
        from: email,
        to: process.env.EMAIL_TO,
        subject: `Message from ${name}`,
        text: `***Sender Details***\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const mailOptions2 = {
        from: process.env.EMAIL_TO,
        to: email,
        subject: `Thank you ${name}`,
        text: `Thank you for reaching out through my website. ` +
            `I appreciate your interest and look forward to building a strong professional relationship with you.\n\n` +
            `Best regards,\nSooraj Murugaraj`,
    };

    // Log mailOptions for debugging
    // console.log('mailOptions:', mailOptions1);
    // console.log('mailOptions:', mailOptions2);

    transporter.sendMail(mailOptions1, (error, info) => {
        if (error) {
            console.error('Error:', error);
            return res.status(500).send('Failed to send email');
        }
        res.status(200).send('Email sent: ' + info.response);
    });

    transporter.sendMail(mailOptions2, (error, info) => {
        if (error) {
            console.error('Error sending thank you email:', error);
        } else {
            console.log('Thank you email sent:', info.response);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
