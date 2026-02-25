# PondokRejo Next - Modern Portfolio & Terminal Simulation

![Astro](https://img.shields.io/badge/Astro-5.0-orange?style=for-the-badge&logo=astro)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

A cutting-edge personal portfolio website built with **Astro**, **React**, and **TailwindCSS**. This project showcases a modern, responsive design with a unique "Hacker Terminal" simulation feature, bridging the gap between professional presentation and geek culture.

## 🌟 Key Features

### 🎨 Modern UI/UX
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Dark/Light Mode**: Seamless theme switching for better readability.
- **Glassmorphism Effects**: Modern visual aesthetics with backdrop blurs and gradients.
- **Interactive Components**: Smooth transitions and hover effects powered by TailwindCSS.

### 💻 Hacker Terminal Simulation (`/terminal`)
An immersive CLI experience embedded directly into the website:
- **Command System**:
  - `SCAN`: Visual vulnerability scanning simulation with HTML rendering.
  - `CONNECT [TARGET]`: Simulate encrypted connections to ISS, ROSCOSMOS, QUANTUM AI, or SATELLITE networks.
  - `DECRYPT`: File decryption simulation.
  - `MATRIX`: Toggle "Matrix Rain" visual effect.
  - `SATCOM`: Satellite command interface for orbit control and imaging.
- **Quantum AI Integration**: "Talk" to a simulated Quantum AI with philosophical outputs.
- **Real-time Feedback**: Typing sounds, dynamic logs, and state management.

### 📝 Content Management
- **Markdown/MDX Support**: Write articles and project details using standard Markdown.
- **Keystatic CMS**: Integrated headless CMS for easy content management without touching code.
- **Dynamic Collections**: Automated routing and page generation for projects and articles.

## 🛠️ Tech Stack

- **Framework**: [Astro 5.0](https://astro.build/) - The web framework for content-driven websites.
- **UI Library**: [React 19](https://react.dev/) - For complex interactive components.
- **Styling**: [TailwindCSS 4.0](https://tailwindcss.com/) - Utility-first CSS framework.
- **Icons**: [Iconify](https://iconify.design/) - Huge library of open-source icons.
- **CMS**: [Keystatic](https://keystatic.com/) - Git-based CMS for Astro.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed on your machine.
- Git for version control.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/diskonnekted/Portofolio-Sederhana-Simple-Portfolio.git
    cd Portofolio-Sederhana-Simple-Portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run development server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:4321` in your browser.

## 📂 Project Structure

```
/
├── public/             # Static assets (images, terminal HTML)
│   ├── supertrack.html # Core logic for Terminal Simulation
│   └── ...
├── src/
│   ├── components/     # Reusable UI components (Navbar, Hero, etc.)
│   ├── content/        # Markdown content (Articles, Projects)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Astro routes
│   └── styles/         # Global styles
├── package.json        # Dependencies and scripts
└── astro.config.mjs    # Astro configuration
```

## 🎮 Terminal Commands Cheat Sheet

| Command | Description |
| :--- | :--- |
| `HELP` | Show available commands |
| `SCAN [TARGET]` | Scan a target IP or domain |
| `CONNECT ISS` | Connect to International Space Station |
| `CONNECT QUANTUM` | Talk to the Singularity (AI) |
| `CONNECT SATELLITE`| Access SATCOM control grid |
| `MATRIX` | Toggle Matrix rain effect |
| `CLEAR` | Clear terminal screen |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👤 Author

**Arif Susilo**
- Email: arif.susilo@gmail.com
- GitHub: [@diskonnekted](https://github.com/diskonnekted)

---
*Built with ❤️ and ☕ by [diskonnekted](https://github.com/diskonnekted)*
