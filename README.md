# Vektra — Software Engineering Portfolio

<p align="center">
  <strong>A modern, responsive portfolio website for a Software Engineer</strong>
</p>

<p align="center">
  Showcasing projects, technical expertise, services, workflow, and contact information through a clean and interactive user experience.
</p>

---


## 📖 About The Project

**Vektra** is a modern personal portfolio website designed to present my work, technical skills, services, and software engineering experience in a professional and interactive way.

The project focuses on:

- Clean and modern UI
- Responsive design
- Reusable React components
- Data-driven sections
- Dark / Light theme
- Smooth user experience
- Project showcase
- Services presentation
- Technical stack visualization
- Development process section
- Contact form with backend email integration

The project is built with a clear separation between the frontend and backend.

---

## ✨ Features

### 🎨 Modern UI

- Clean and minimal interface
- Modern visual design
- Responsive layout
- Interactive hover effects
- Consistent design system
- Mobile-friendly navigation

### 🌓 Dark / Light Mode

Vektra supports both:

- Light Mode
- Dark Mode

The selected theme is stored in `localStorage`, allowing the preference to persist between sessions.

The theme is managed using:

- React Context API
- Custom `useTheme` hook

This allows different components and pages to access the same global theme state.

---

### 📱 Responsive Design

The website is designed to work across different screen sizes:

- 📱 Mobile
- 📲 Tablet
- 💻 Laptop
- 🖥️ Desktop

The layout adapts dynamically using Tailwind CSS responsive utilities.

---

### 🧩 Component-Based Architecture

The frontend is structured around reusable React components.

Examples include:

- Header
- Services
- Stack
- Process
- Projects
- Connection / Contact
- Footer
- Policy

This makes the project easier to maintain and extend.

---

### 📊 Data-Driven Sections

Several sections are separated from the UI components and stored as data.

For example:

```text
src/
├── data/
│   ├── services.js
│   ├── projects.js
│   ├── stack.js
│   ├── process.js
│   └── Policy.js


# 💼 Services Section

The Services section presents the development services offered through reusable cards.

Services are stored as structured data and rendered dynamically using React.

This makes it easy to:

- Add services
- Remove services
- Update descriptions
- Change layouts
- Reuse the same component

---

# 🛠️ Technical Stack Section

The Stack section presents the technologies used throughout the development ecosystem.

### Languages

- JavaScript
- TypeScript
- SQL

### Frontend

- React.js
- Next.js
- Redux Toolkit
- React Router
- TanStack Query
- React Hook Form
- Zod
- Axios
- HTML5
- CSS3
- Tailwind CSS
- SASS
- Material UI
- Framer Motion

### Backend

- Node.js
- Express.js

### Databases

- MongoDB
- Mongoose
- PostgreSQL
- SQL

### API & Authentication

- REST APIs
- JWT
- Middleware
- API Integration

### Infrastructure & Development

- Docker
- Kubernetes
- Terraform
- AWS
- Prisma

---

# 🔄 Development Process

The portfolio contains a dedicated development process section describing the workflow used for projects.

The process consists of four stages:

### 01 — Discovery

Understanding the project requirements, technical challenges, architecture, and development roadmap.

### 02 — Prototype

Validating the main ideas and creating functional versions of the required features.

### 03 — Scale

Building the application and preparing the architecture for larger workloads and continued development.

### 04 — Optimize

Improving the application after implementation through optimization, refinement, and continuous improvements.

---

# 🏗️ Project Structure

VektraPortfolio/
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Stack.jsx
│   │   │   ├── Process.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Connection.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── data/
│   │   │   ├── services.js
│   │   │   ├── projects.js
│   │   │   ├── stack.js
│   │   │   ├── process.js
│   │   │   └── Policy.js
│   │   │
│   │   ├── pages/
│   │   │   └── Policy.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   │
│   ├── package.json
│   └── ...
│
├── backend/
│   │
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── ...
│
├── .gitignore
└── README.md


# 👨‍💻 Author

## Taha Al-Qalyubiy

Software Engineering Student & Frontend Developer

### Profiles

- 💼 **LinkedIn:**  
  [https://linkedin.com/in/taha-al-qalyubiy](https://linkedin.com/in/taha-al-qalyubiy)

- 🐙 **GitHub:**  
  [https://github.com/TahaAl-Qalyubiy](https://github.com/TahaAl-Qalyubiy)

- 🌐 **Portfolio:**  
  [https://tahaal-qalyubiy.github.io/Portfolio](https://tahaal-qalyubiy.github.io/Portfolio)


