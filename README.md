# Portfolio React

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern and responsive design
- 🎨 Dark mode support
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-friendly
- 🚀 Fast performance with Vite
- 🎯 Fully customizable

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Customization

### Personal Information

Update your information in these files:

- `src/data/socialLinks.js` - Your social media links
- `src/data/projects.js` - Your projects
- `src/data/skills.js` - Your skills
- `src/data/experiences.js` - Your work experience
- `src/data/services.js` - Services you offer

Update your name in:
- `src/components/navbar/Navbar.jsx` - Logo text
- `src/components/home/Section1.jsx` - Hero section
- `src/components/home/Section6.jsx` - Footer

## Build

To build for production:
```bash
npm run build
```

The build output will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── home/              # Page sections
│   ├── navbar/            # Navigation bar
│   ├── common/            # Shared components
│   └── core/              # Layout components
├── data/                  # Data files
├── styles/                # CSS files
├── types/                 # TypeScript types
├── utils/                 # Utility functions
├── App.jsx
└── main.jsx
```

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **FontAwesome** - Icons
- **React Router** - Routing

## License

This project is open source and available under the MIT License.

## Support

For support, email your.email@example.com or create an issue in the repository.
