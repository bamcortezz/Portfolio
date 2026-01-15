# Portfolio Website - Francis Emil M. Cortez

A modern, responsive portfolio website showcasing my development expertise, projects, and professional background. Built with React and Tailwind CSS, featuring smooth animations and an intuitive user interface.

🔗 **Live Demo:** [https://francisemilcortez.vercel.app/](https://francisemilcortez.vercel.app/)

## ✨ Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Powered by Framer Motion for elegant page transitions
- **Single Page Application** - Seamless navigation with React Router
- **Project Showcase** - Dedicated pages for each project with image galleries
- **Lazy Loading** - Optimized performance with code splitting and lazy image loading
- **Contact Form** - Integrated with Web3Forms for direct communication
- **Dark Theme** - Modern glassmorphism design with custom scrollbar styling

## 🛠️ Tech Stack

### Frontend Framework

- **React 19.1.0** - Modern UI library with hooks and functional components
- **React Router DOM 7.6.1** - Client-side routing with URL-based navigation

### Styling

- **Tailwind CSS 4.1.8** - Utility-first CSS framework
- **Custom CSS** - Smooth scrolling, glassmorphism effects, and gradient dividers

### Animations & UI

- **Framer Motion 12.15.0** - Advanced animation library
- **React Icons 5.5.0** - Icon library with extensive collection
- **React Slick 0.30.3** - Carousel functionality
- **SweetAlert2 11.22.0** - Beautiful toast notifications

### Build Tools

- **Vite 6.3.5** - Fast build tool and dev server
- **ESLint 9.25.0** - Code quality and consistency

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── LazyImage.jsx          # Progressive image loading component
│   │   ├── layout/
│   │   │   └── Navbar.jsx             # Fixed navigation with active section tracking
│   │   └── pages/
│   │       ├── Home.jsx               # Hero section with intro
│   │       ├── Profile.jsx            # Education, goals, and certifications
│   │       ├── Skills.jsx             # Tech stack showcase
│   │       ├── Projects.jsx           # Project grid with cards
│   │       ├── ProjectDetails.jsx     # Individual project detail pages
│   │       └── Contact.jsx            # Contact form and social links
│   ├── data/
│   │   └── projectsData.js            # Centralized project information
│   ├── assets/
│   │   ├── cv/                        # Resume/CV files
│   │   └── img/                       # Project images
│   ├── App.jsx                        # Main app with routing
│   ├── main.jsx                       # React entry point
│   └── index.css                      # Global styles
├── public/                            # Static assets
├── index.html                         # HTML template
├── vite.config.js                     # Vite configuration
├── eslint.config.js                   # ESLint rules
├── package.json                       # Dependencies and scripts
└── README.md                          # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/bamcortezz/Portfolio.git
   cd Portfolio/frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   ```

   Get your access key from [Web3Forms](https://web3forms.com/)

4. **Start development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Sections

### 1. Home

Hero section with profile image, introduction, and downloadable CV

### 2. About

Personal background, educational achievements, career goals, and professional certifications including:

- IBM Skill Build (Cloud Computing Fundamentals)
- Cisco Networking Academy (IoT, JavaScript)
- TESDA Online Course (Computer System Servicing NCII)

### 3. Skills

Categorized tech stack display:

- **Frontend:** HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap
- **Backend:** PHP, MySQL, MongoDB, Node.js
- **Tools:** Git, GitHub, Discord, Trello

### 4. Projects

Featured projects with live demos:

#### Twitch Insight (Capstone Project)

Real-time sentiment analysis platform for Twitch streamers using RoBERTa NLP model

- **Tech:** React, Tailwind, MongoDB, Python, Flask
- **GitHub:** [View Repository](https://github.com/bamcortezz/Capstone)

#### Budget Tracker (Personal Project)

Personal finance management application with MVC architecture

- **Tech:** PHP, MySQL, Tailwind CSS, Chart.js
- **GitHub:** [View Repository](https://github.com/bamcortezz/BudgetTracker)
- **Live Demo:** [Visit Site](https://bloomtracker.free.nf/)

#### Portfolio (Personal Project)

This website - modern portfolio with smooth animations

- **Tech:** React, Tailwind CSS
- **GitHub:** [View Repository](https://github.com/bamcortezz/Portfolio)
- **Live Demo:** [Visit Site](https://francisemilcortez.vercel.app/)

### 5. Contact

Contact form integrated with Web3Forms and social media links:

- Facebook
- LinkedIn
- GitHub

## 🔧 Configuration

### Vite Configuration

- React plugin with Fast Refresh
- Tailwind CSS Vite plugin
- PDF asset support for CV downloads
- Path alias: `@` → `./src`

### ESLint Configuration

- React Hooks rules
- React Refresh for HMR
- Browser globals
- Custom rules for unused variables

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com/) with automatic deployments on push to main branch.

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Add environment variable: `VITE_WEB3FORMS_ACCESS_KEY`
4. Deploy

### Deploy to Other Platforms

Build the project:

```bash
npm run build
```

Deploy the `dist` folder to your hosting service.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🎯 Performance Optimizations

- ✅ Lazy loading for page components
- ✅ Progressive image loading with placeholder
- ✅ Code splitting with React.lazy
- ✅ Memoization with React.memo and useCallback
- ✅ Optimized animations with Framer Motion
- ✅ Vite's built-in asset optimization

## 📧 Contact

**Francis Emil M. Cortez (Bam)**

- Email: [Contact via website](https://francisemilcortez.vercel.app/)
- LinkedIn: [cortez-francis-emil-m](https://www.linkedin.com/in/cortez-francis-emil-m-957521369/)
- GitHub: [@bamcortezz](https://github.com/bamcortezz)
- Facebook: [bambam.m.cortez](https://www.facebook.com/bambam.m.cortez/)

## 📄 License

This project is open source and available for personal use. Please provide attribution if you use this code as a template for your own portfolio.

---

**Built with ❤️ by Francis Emil M. Cortez**
