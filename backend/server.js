import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();

// Middleware
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:3000', // Local development
      'http://localhost:5173', // Vite default port
      process.env.FRONTEND_URL, // Production Frontend URL
    ].filter(Boolean);
    
    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`CORS blocked origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(express.json());



// Email configuration
const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});



// Helper function to send emails
const sendEmails = async (contactData, newContact) => {
  try {
    // Email to the submitter
    const userMailOptions = {
      from: `Lakshay Singal <${process.env.MAIL_USER}>`,
      to: contactData.email,
      subject: 'Thank You for Reaching Out!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">Thank You, ${contactData.name}!</h2>
          <p style="color: #666; font-size: 14px;">
            I've received your message and appreciate you reaching out. I'll get back to you as soon as possible.
          </p>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Best regards,<br/>
            Lakshay Singal
          </p>
        </div>
      `,
    };

    // Email to the portfolio owner
    const adminMailOptions = {
      from: `Lakshay Singal <${process.env.MAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${contactData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p style="margin: 0;"><strong>Contact ID:</strong> ${newContact.id}</p>
            <p style="margin: 10px 0;"><strong>Name:</strong> ${contactData.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${contactData.email}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="padding: 10px; background-color: white; border-left: 3px solid #007bff;">
              ${contactData.message}
            </p>
            <p style="margin: 10px 0;"><strong>Submitted at:</strong> ${new Date(newContact.timestamp).toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    return true;
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
};

// Routes

// POST: Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // Create new contact object
    const newContact = {
      id: Date.now(),
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    };

    // Send emails
    await sendEmails({ name, email, message }, newContact);

    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully!',
      contactId: newContact.id,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing request. Please try again later.',
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});




   // // <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          // //   <p style="margin: 0;"><strong>Your Message Details:</strong></p>
          // //   <p style="margin: 10px 0;">Name: ${contactData.name}</p>
          // //   <p style="margin: 10px 0;">Email: ${contactData.email}</p>
          // //   <p style="margin: 10px 0;">Message: ${contactData.message}</p>
       //   // </div>