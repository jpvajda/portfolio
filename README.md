# John P. Vajda - Portfolio

A modern, terminal-themed portfolio website showcasing Developer Experience, Product Led Growth, and Engineering Leadership expertise.

**Live Site:** https://jpvajda.github.io/portfolio


## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **pnpm** 10+ (package manager)

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

## 🏗️ Architecture

### Tech Stack

- **React** - Modern React with hooks and concurrent features
- **JavaScript** - Modern JS practices
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Vitest** - Fast unit test framework
- **Headless UI** - Unstyled, accessible UI components
- **Heroicons** - Beautiful hand-crafted SVG icons

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

### Testing Stack

- **Vitest** - Test runner
- **React Testing Library** - Component testing
- **@testing-library/user-event** - User interaction simulation
- **@testing-library/jest-dom** - DOM matchers


## 📦 Build & Deployment

### Build for Production

```bash
pnpm build
```

Build output goes to `dist/` directory.

```bash
pnpm preview
```
Runs production build.

### Manual Deploy to GitHub Pages

```bash
# Build and deploy manually
pnpm deploy
```

This runs `pnpm build` then `gh-pages -d dist` to deploy to GitHub Pages.

> The `homepage` field in `package.json` must be set to `https://jpvajda.github.io/portfolio` for GitHub Pages to work correctly

### GitHub Actions CI/CD

This repository uses GitHub Actions for automated testing and deployment:

- **CI Workflow** (`.github/workflows/ci.yml`) - Runs tests on pull requests and pushes to `main`
- **Deploy Workflow** (`.github/workflows/deploy.yml`) - Automatically builds and deploys to GitHub Pages when changes are pushed to `main`

Both workflows run tests, install dependencies with pnpm, and use Node.js 20.

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
- `docs:` Documentation update

## 🤖 Agentic Development Process

This portfolio was redesigned using **Cursor AI agents** following a multi-phase, multi-PR workflow. Each phase was developed on a separate feature branch with its own PR, simulating an autonomous agentic development workflow.

**See `refactor_specs/AGENTIC_WORKFLOW_PHASES.md` for complete workflow documentation.**

### How It Was Built

The redesign was completed using Cursor's agent mode with the following approach:

1. **Planning:** Created comprehensive requirements documents (`REDESIGN_REQUIREMENTS.md`, `AGENTS.md`)
2. **Phased Development:** Broke work into 8 logical phases, each with clear success criteria
3. **Incremental PRs:** Each phase resulted in a separate PR for review
4. **Agent Autonomy:** Agents worked autonomously on each phase, making commits and creating PRs
5. **Continuous Testing:** Tests run after each major change to ensure stability

## 📄 License

Copyright (c) 2026 John P. Vajda. All rights reserved.

This project is private and proprietary. Unauthorized copying, modification,
distribution, or use of this project, via any medium, is strictly prohibited.

## 👤 Author

**John P. Vajda**

