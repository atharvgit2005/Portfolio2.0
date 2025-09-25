// Import required packages
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

// Initialize Express app and Prisma client
const app = express();
const prisma = new PrismaClient();
// Determine the port. If .env specifies 5000 (conflicts with macOS Control Center), force 5001.
const envPort = process.env.PORT;
const PORT = envPort && envPort !== '5001' && envPort !== '0' && envPort !== ''
  ? (envPort === '5000' ? 5001 : Number(envPort))
  : 5001;

// Middleware setup
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Portfolio API is running smoothly!',
    timestamp: new Date().toISOString()
  });
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    // Extract form data from request body
    const { name, email, message } = req.body;
    
    // Basic validation - ensure all required fields are present
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields (name, email, message) are required'
      });
    }
    
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }
    
    // Save contact form submission to database using Prisma
    const contact = await prisma.contact.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim()
      }
    });
    
    // Log successful submission (helpful for debugging)
    console.log(`New contact form submission from ${contact.name} (${contact.email})`);
    
    // Send success response
    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.',
      submissionId: contact.id
    });
    
  } catch (error) {
    // Log error for debugging
    console.error('Error processing contact form:', error);
    
    // Send error response
    res.status(500).json({
      success: false,
      error: 'Something went wrong. Please try again later.'
    });
  }
});

// Get all contact submissions (optional admin endpoint)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    res.json({
      success: true,
      contacts: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contacts'
    });
  }
});

// Handle 404 for unknown routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio API server is running on port ${PORT}`);
  console.log(`🌊 Ready to catch some digital waves!`);
});

// Graceful shutdown handling
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down server gracefully...');
  await prisma.$disconnect();
  process.exit(0);
});
