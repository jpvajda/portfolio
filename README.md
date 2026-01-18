# John P. Vajda - Portfolio

A modern, terminal-themed portfolio website showcasing Developer Experience, Product Led Growth, and Engineering Leadership expertise.

**Live Site:** https://jpvajda.github.io/portfolio  
**Repository:** https://github.com/jpvajda/portfolio

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **pnpm** 8+ (package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/jpvajda/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:3000/portfolio/` in your browser.

---

## 🏗️ Architecture

### Tech Stack

- **React** 19.2.3 - Modern React with hooks and concurrent features
- **TypeScript** 5.9.3 - Type safety and developer experience
- **Tailwind CSS** 4.1.18 - Utility-first CSS framework
- **Vite** 5.4.21 - Fast build tool and dev server
- **Vitest** 3.2.4 - Fast unit test framework
- **Headless UI** 2.1.0 - Unstyled, accessible UI components
- **Heroicons** 2.1.5 - Beautiful hand-crafted SVG icons

### Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── GenericCard.jsx  # Reusable card component (competencies, skills, certs)
│   │   ├── Hero.jsx         # Hero section
│   │   ├── NavBar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer with social links
│   │   ├── ModeToggle.jsx   # Dark/light mode toggle
│   │   └── MyModal.jsx      # Contact modal
│   ├── data/                # Data files
│   │   ├── competencies.js  # Core competencies data
│   │   ├── skills.js         # Technical skills data
│   │   ├── certifications.js # Certifications data
│   │   └── references.js     # Social links data
│   ├── assets/              # Images and static assets
│   ├── index.css            # Global styles and CSS variables
│   └── App.jsx              # Main app component
├── public/                  # Static files
├── refactor_specs/          # Design and workflow documentation
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── vitest.config.js         # Vitest configuration
```

### Design System

This portfolio uses a **terminal/command-line interface aesthetic** inspired by [adamslaker.dev](https://adamslaker.dev/).

**Key Design Elements:**
- Dark background with monospace typography
- Terminal green (#7FFF00) accent color
- macOS window chrome on cards (🔴 🟡 🟢)
- Terminal syntax and command prompts
- Bracket notation for tags [React] [TypeScript]

**Complete design specifications:** See `refactor_specs/REDESIGN_REQUIREMENTS.md`

---

## 🧪 Testing

### Run Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Test Coverage Goals

- Overall coverage: 80%+
- Critical components: 90%+
- New features: 100%

### Testing Stack

- **Vitest** - Test runner
- **React Testing Library** - Component testing
- **@testing-library/user-event** - User interaction simulation
- **@testing-library/jest-dom** - DOM matchers

---

## 📦 Build & Deployment

### Build for Production

```bash
pnpm build
```

Build output goes to `dist/` directory.

### Deploy to GitHub Pages

```bash
# Build and deploy
pnpm deploy
```

This runs `pnpm build` then `gh-pages -d dist` to deploy to GitHub Pages.

**Note:** The `homepage` field in `package.json` must be set to `https://jpvajda.github.io/portfolio` for GitHub Pages to work correctly.

---

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start development server (Vite)
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm test` - Run tests once
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage report
- `pnpm deploy` - Build and deploy to GitHub Pages

### Code Style

- **Components:** PascalCase (e.g., `GenericCard.jsx`)
- **Hooks:** camelCase with 'use' prefix (e.g., `useTheme.js`)
- **Utilities:** camelCase (e.g., `formatDate.js`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `API_URL`)

### Git Workflow

This project uses **Conventional Commits** format:

```
<type>(<scope>): <description>
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `style:` Formatting, CSS changes
- `test:` Adding tests
- `chore:` Maintenance tasks
- `docs:` Documentation updates

---

## 🤖 Agentic Development Process

This portfolio was redesigned using **Cursor AI agents** following a multi-phase, multi-PR workflow.

### Development Phases

1. **Phase 1:** Modernize dependencies (React 19, Tailwind, TypeScript)
2. **Phase 2:** Terminal design system & CSS variables
3. **Phase 3:** Modernize core components to React 19
4. **Phase 4:** Terminal-style project cards redesign
5. **Phase 5:** Hero section & navigation
6. **Phase 6:** CSS improvements & visual polish
7. **Phase 7:** Accessibility & performance optimization
8. **Phase 8:** Testing & documentation

Each phase was developed on a separate feature branch with its own PR, simulating an autonomous agentic development workflow.

**See `refactor_specs/AGENTIC_WORKFLOW_PHASES.md` for complete workflow documentation.**

### How It Was Built

The redesign was completed using Cursor's agent mode with the following approach:

1. **Planning:** Created comprehensive requirements documents (`REDESIGN_REQUIREMENTS.md`, `AGENTS.md`)
2. **Phased Development:** Broke work into 8 logical phases, each with clear success criteria
3. **Incremental PRs:** Each phase resulted in a separate PR for review
4. **Agent Autonomy:** Agents worked autonomously on each phase, making commits and creating PRs
5. **Continuous Testing:** Tests run after each major change to ensure stability

**Key Documents:**
- `AGENTS.md` - Agent instructions and coding standards
- `refactor_specs/REDESIGN_REQUIREMENTS.md` - Complete design and technical requirements
- `refactor_specs/AGENTIC_WORKFLOW_PHASES.md` - Phase-by-phase breakdown
- `refactor_specs/PORTFOLIO_REDESIGN_GUIDE.md` - Step-by-step guide

---

## ♿ Accessibility

This portfolio follows **WCAG 2.1 AA** accessibility standards:

- ✅ Semantic HTML5 elements
- ✅ ARIA labels throughout
- ✅ Keyboard navigation support
- ✅ Skip-to-content link
- ✅ Screen reader compatibility
- ✅ `prefers-reduced-motion` support
- ✅ Proper color contrast ratios
- ✅ Focus indicators visible

**Target Lighthouse Scores:**
- Accessibility: 95+
- Performance: 90+
- Best Practices: 95+
- SEO: 95+

---

## 📱 Responsive Design

**Breakpoints:**
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1440px+

**Grid Layouts:**
- Competencies: 4 columns (desktop), 2 (tablet), 1 (mobile)
- Skills: 4 columns (desktop), 2 (tablet), 1 (mobile)
- Certifications: 3 columns (desktop), 2 (tablet), 1 (mobile)

---

## 🎨 Dark/Light Mode

The portfolio supports both dark and light modes:

- **Default:** Dark mode (terminal aesthetic)
- **Toggle:** Available in navigation bar
- **Persistence:** Preference saved to localStorage
- **System Preference:** Respects `prefers-color-scheme` on first visit

---

## 📄 License

This project is private and proprietary.

---

## 👤 Author

**John P. Vajda**

- GitHub: [@jpvajda](https://github.com/jpvajda)
- LinkedIn: [johnpvajda](https://www.linkedin.com/in/johnpvajda)
- X: [@johnpvajda](https://x.com/johnpvajda)
- BlueSky: [johnpvajda.bsky.social](https://bsky.app/profile/johnpvajda.bsky.social)

---

**Last Updated:** January 2026  
**Version:** 0.4.0
