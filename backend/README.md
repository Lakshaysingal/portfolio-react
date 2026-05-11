# Portfolio Backend - Contact Form API

Express.js backend server for handling contact form submissions with email notifications and data storage.

## Features

✨ **Contact Form Handling**
- Validate form submissions
- Store contacts in JSON file
- Send emails to both user and admin

📧 **Email Notifications**
- Confirmation email to user
- Admin notification email
- Formatted HTML emails

💾 **Data Storage**
- JSON file-based storage
- Automatic contact ID generation
- Timestamp tracking

🔐 **API Endpoints**
- POST `/api/contact` - Submit contact form
- GET `/api/contacts` - View all contacts
- GET `/api/contact/:id` - View single contact
- GET `/api/health` - Health check

## Installation

```bash
npm install
```

## Configuration

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update `.env` with your settings:
```env
MAIL_SERVICE=gmail
MAIL_USER=your-email@gmail.com
MAIL_PASSWORD=your-app-password
ADMIN_EMAIL=your-email@gmail.com
PORT=5000
```

## Usage

**Development** (with auto-reload):
```bash
npm run dev
```

**Production**:
```bash
npm start
```

Server runs on `http://localhost:5000`

## API Examples

### Submit Contact Form
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello!"
  }'
```

### Get All Contacts
```bash
curl http://localhost:5000/api/contacts
```

### Get Single Contact
```bash
curl http://localhost:5000/api/contact/1710169200000
```

## File Structure

```
backend/
├── server.js              # Main application file
├── package.json           # Dependencies
├── .env                   # Environment variables (create this)
├── .env.example           # Template
└── data/
    └── contacts.json      # Auto-generated contact storage
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `MAIL_SERVICE` | ✅ Yes | Email service (gmail, outlook, etc) |
| `MAIL_USER` | ✅ Yes | Your email address |
| `MAIL_PASSWORD` | ✅ Yes | App-specific password |
| `ADMIN_EMAIL` | ✅ Yes | Notification recipient |
| `PORT` | ❌ No | Server port (default: 5000) |

## Gmail Setup

To use Gmail for sending emails:

1. Enable 2-Factor Authentication
2. Go to https://myaccount.google.com/apppasswords
3. Select "Mail" and your device
4. Copy the generated password
5. Paste into `.env` as `MAIL_PASSWORD`

## Stored Data Format

Contacts are saved in `backend/data/contacts.json`:

```json
[
  {
    "id": 1710169200000,
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Your message here",
    "timestamp": "2024-03-11T10:20:00.000Z"
  }
]
```

## Error Handling

- Server validates all required fields
- Returns descriptive error messages
- Handles email sending failures
- Logs errors to console

## Troubleshooting

**Port already in use:**
```bash
lsof -i :5000  # Find process
kill -9 <PID>  # Kill it
```

**Emails not sending:**
- Verify Gmail app password
- Check 2FA is enabled
- Ensure correct email addresses

**CORS issues:**
- CORS is enabled for all origins in development
- Update in `server.js` for production

## API Response Examples

### Success
```json
{
  "success": true,
  "message": "Contact form submitted successfully!",
  "contactId": 1710169200000
}
```

### Error
```json
{
  "success": false,
  "message": "All fields are required"
}
```

## Security Notes

- Add authentication to `/api/contacts` endpoint in production
- Implement rate limiting
- Validate email addresses properly
- Never commit `.env` file
- Use HTTPS in production
- Consider database instead of JSON for large-scale use

## Dependencies

- **express** - Web framework
- **cors** - CORS handling
- **nodemailer** - Email sending
- **dotenv** - Environment variables
- **nodemon** - Dev server with hot reload

## Future Enhancements

- Add database (MongoDB, PostgreSQL)
- Implement admin authentication
- Add request logging
- Rate limiting
- Email template system
- File upload support
