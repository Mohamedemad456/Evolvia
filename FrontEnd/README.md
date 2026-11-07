# Evolvia HR - HR Consulting & Services Website

A modern, responsive website for Evolvia HR, a consulting and services company specializing in HR solutions. Built with React, TypeScript, and Tailwind CSS, featuring a clean design with blue color palette and modern animations.

## 🚀 Features

### Pages
- **Landing Page** - Comprehensive homepage with hero section, features, statistics, services, process, testimonials, and CTA
- **About Us** - Company mission, values, and why choose us section
- **Contact Us** - Contact form with company information and social media links

### Design Features
- ✨ Modern animated background with floating shapes
- 🎨 Blue color palette throughout the design
- 🎯 Outlined icons using Lucide React
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎭 Smooth animations and transitions
- 🎪 Hover effects and interactive elements
- 🔗 Social media integration in footer

### Key Sections
- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **Features** - Four main service offerings
- **Statistics** - Key metrics and achievements
- **Services** - Detailed service cards with descriptions
- **How It Works** - Step-by-step process visualization
- **Testimonials** - Client reviews and feedback
- **Call-to-Action** - Final conversion section

## 🛠️ Tech Stack

### Core Technologies
- **React 19.1.1** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.1.7** - Build tool and dev server

### Styling & UI
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Lucide React 0.553.0** - Icon library (outlined icons)

### Routing
- **React Router DOM 7.9.5** - Client-side routing

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS** - CSS processing

## 📦 Installation

### Prerequisites
- Node.js (v20.19.0 or higher recommended)
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd evolvia
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📜 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 📁 Project Structure

```
evolvia/
├── src/
│   ├── components/
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   ├── Navigation.tsx      # Navigation bar
│   │   └── Footer.tsx          # Footer with social links
│   ├── pages/
│   │   ├── Landing.tsx         # Homepage
│   │   ├── About.tsx           # About us page
│   │   └── Contact.tsx         # Contact page
│   ├── App.tsx                 # Main app component with routing
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles and Tailwind imports
├── public/                     # Static assets
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1e40af`
- **Accent Blue**: `#2563eb`
- **Light Blue**: `#60a5fa`
- **Sky Blue**: `#0ea5e9`
- **Dark Blue**: `#1e3a8a`
- **Navy Blue**: `#1e293b`

### Icons
All icons use Lucide React with outlined style (`strokeWidth={2}`) and are displayed in circular borders for a consistent, modern look.

### Animations
- Fade-in animations for content sections
- Floating background shapes
- Hover effects on cards and buttons
- Smooth transitions throughout

## 🌐 Routing

The application uses React Router for client-side routing:

- `/` - Landing page (home)
- `/about` - About Us page
- `/contact` - Contact Us page

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

### Deploy

The site is deployed on **Netlify**. Every push to `main` triggers a build using the settings in [`netlify.toml`](../netlify.toml) at the repo root (base directory `FrontEnd`, command `npm run build`, publish `dist`). Client-side routes are handled by `public/_redirects`.

## 🔧 Configuration

### Tailwind CSS
Tailwind CSS v4 is configured via the `@tailwindcss/vite` plugin. Custom colors are defined in `src/index.css` using the `@theme` directive.

### Vite
Vite configuration is in `vite.config.ts`. The React plugin and Tailwind plugin are already configured.

## 📝 Development Guidelines

### Code Style
- Use TypeScript for all components
- Follow React best practices
- Use functional components with hooks
- Maintain consistent naming conventions
- Keep components modular and reusable

### Styling
- Use Tailwind utility classes for styling
- Use arbitrary values for custom colors (e.g., `text-[#1e40af]`)
- Maintain consistent spacing and sizing
- Use outlined icons from Lucide React

### Component Structure
- Keep components in appropriate folders
- Use TypeScript interfaces for props
- Export components as default exports
- Keep components focused and single-purpose

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📧 Contact

For inquiries about the project, please contact:
- Email: info@evolviahr.com
- Website: [Evolvia HR](https://evolviahr.com)

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icon library
- [Vite](https://vite.dev/) - Build tool
- [React Router](https://reactrouter.com/) - Routing library

---

Built with ❤️ for Evolvia HR
