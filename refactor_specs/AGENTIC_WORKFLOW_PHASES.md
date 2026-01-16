# Agentic Development Workflow - Multi-PR Strategy

This document outlines the phased approach for the portfolio redesign, with each phase resulting in a separate PR to simulate autonomous agentic development.

## 🎯 Overview

**Goal:** Simulate an agentic development workflow where an AI agent works autonomously, creating incremental, reviewable PRs for different aspects of the redesign.

**Strategy:** Break the redesign into 6-8 logical phases, each with its own feature branch and PR.

---

## 📦 Phase 1: Foundation - Dependencies & Build Modernization

**Branch:** `feat/modernize-dependencies`
**Estimated Commits:** 3-5
**Risk Level:** Medium (breaking changes possible)

### Tasks:
- [ ] Update React 17 → React 19.2.3
- [ ] Remove node-sass, install Tailwind CSS 4.1.19
- [ ] Update all dependencies to latest compatible versions
- [ ] Update TypeScript to 5.9.2
- [ ] Update Jest to 30.2.0
- [ ] Update build scripts and configurations
- [ ] Fix any breaking changes from upgrades
- [ ] Run tests to ensure everything passes
- [ ] Update package.json scripts if needed

### Success Criteria:
- ✅ All dependencies updated
- ✅ `pnpm install` works without errors
- ✅ `pnpm build` succeeds
- ✅ `pnpm test` passes
- ✅ No console errors on `pnpm start`

### PR Title:
```
feat(deps): modernize dependencies to React 19, Tailwind CSS, and TypeScript 5
```

### PR Description Template:
```markdown
## 🎯 Objective
Modernize the project dependencies to use latest stable versions of React, Tailwind, TypeScript, and Jest.

## 📦 Changes
- Upgraded React 17 → 19.2.3
- Replaced node-sass with Tailwind CSS 4.1.19
- Updated TypeScript to 5.9.2
- Updated Jest to 30.2.0
- Updated all peer dependencies

## 🧪 Testing
- [x] All tests passing
- [x] Build succeeds
- [x] Dev server runs without errors
- [x] No breaking changes detected

## 📝 Notes
- Removed Node 14 requirement (no longer needed without node-sass)
- Updated build scripts for new dependencies
- All existing functionality preserved
```

---

## 🎨 Phase 2: Design System - Terminal Theme Foundation

**Branch:** `feat/terminal-design-system`
**Estimated Commits:** 4-6
**Risk Level:** Low (additive changes)

### Tasks:
- [ ] Create design system CSS variables (colors, typography)
- [ ] Add monospace font imports (JetBrains Mono or Fira Code)
- [ ] Set up Tailwind config with custom theme
- [ ] Create terminal color palette CSS variables
- [ ] Implement base typography styles
- [ ] Create utility classes for terminal aesthetic
- [ ] Add global styles and resets
- [ ] Test dark/light mode compatibility
- [ ] Document design tokens

### Success Criteria:
- ✅ Design system CSS variables defined
- ✅ Terminal color palette implemented
- ✅ Monospace fonts loaded
- ✅ Tailwind config customized
- ✅ Dark mode works with new colors

### PR Title:
```
feat(design): implement terminal/CLI design system with color palette and typography
```

---

## 🧩 Phase 3: Core Components - Modernization & Refactoring

**Branch:** `refactor/modernize-components`
**Estimated Commits:** 5-8
**Risk Level:** Medium (structural changes)

### Tasks:
- [ ] Refactor all class components to functional components
- [ ] Update to React 19 hooks patterns
- [ ] Modernize NavBar component with terminal aesthetic
- [ ] Update ModeToggle component (keep dark mode as default)
- [ ] Refactor Footer component with terminal styling
- [ ] Update MyCarousel/Hero component
- [ ] Add proper TypeScript types to all components
- [ ] Ensure accessibility (ARIA labels, semantic HTML)
- [ ] Update component tests

### Success Criteria:
- ✅ All components use React 19 patterns
- ✅ No class components remain
- ✅ TypeScript types properly defined
- ✅ All component tests passing
- ✅ Accessibility improved

### PR Title:
```
refactor(components): modernize components to React 19 with terminal aesthetic
```

---

## 🎴 Phase 4: Project Cards - Terminal Window Redesign

**Branch:** `feat/terminal-project-cards`
**Estimated Commits:** 4-6
**Risk Level:** Low (focused feature)

### Tasks:
- [ ] Design new ProjectCard component with terminal window style
- [ ] Add macOS window chrome (🔴 🟡 🟢 dots)
- [ ] Implement file path notation header (~/projects/name)
- [ ] Add project icons/logos
- [ ] Style with bracket notation tags [React] [Python]
- [ ] Implement hover effects (lift + glow)
- [ ] Add terminal cursor effect to titles (█)
- [ ] Implement responsive grid layout
- [ ] Add lazy loading for images
- [ ] Update all 18 project cards with new component
- [ ] Add proper accessibility attributes
- [ ] Write tests for ProjectCard component

### Success Criteria:
- ✅ ProjectCard component matches terminal aesthetic
- ✅ All 18 projects displayed correctly
- ✅ Hover effects smooth and performant
- ✅ Responsive on all breakpoints
- ✅ Accessibility maintained

### PR Title:
```
feat(projects): redesign project cards with terminal window aesthetic
```

---

## 🚀 Phase 5: Hero Section & Navigation

**Branch:** `feat/hero-navigation`
**Estimated Commits:** 3-5
**Risk Level:** Low (visual enhancement)

### Tasks:
- [ ] Redesign hero section with terminal theme
- [ ] Add terminal loading animation (> initializing portfolio...)
- [ ] Implement typing effect for name/title
- [ ] Add terminal cursor blink animation
- [ ] Update navigation with terminal styling (> adamslaker.dev style)
- [ ] Implement smooth scroll to sections
- [ ] Add mobile hamburger menu with terminal animation
- [ ] Optimize hero section for mobile
- [ ] Add proper semantic HTML
- [ ] Write tests for navigation interactions

### Success Criteria:
- ✅ Hero section visually impressive
- ✅ Terminal animations smooth (60fps)
- ✅ Navigation works on all devices
- ✅ Scroll behavior smooth
- ✅ Mobile menu functional

### PR Title:
```
feat(hero): implement terminal-themed hero section with animations and navigation
```

---

## 🎓 Phase 6: Certifications & References Redesign

**Branch:** `feat/terminal-certifications`
**Estimated Commits:** 2-4
**Risk Level:** Low (focused feature)

### Tasks:
- [ ] Redesign certification cards with terminal aesthetic
- [ ] Apply consistent styling with project cards
- [ ] Update references/external links section
- [ ] Add terminal window chrome to cert cards
- [ ] Implement hover effects
- [ ] Ensure all 7 certifications display correctly
- [ ] Add proper icons/badges
- [ ] Optimize images
- [ ] Test all external links
- [ ] Write tests for certification components

### Success Criteria:
- ✅ Certifications styled consistently
- ✅ All 7 certs display correctly
- ✅ External links work
- ✅ Visual consistency with project cards

### PR Title:
```
feat(certifications): redesign certifications with terminal window styling
```

---

## ♿ Phase 7: Accessibility & Performance Optimization

**Branch:** `feat/a11y-performance`
**Estimated Commits:** 3-5
**Risk Level:** Low (improvements only)

### Tasks:
- [ ] Audit and fix color contrast issues (WCAG AA)
- [ ] Add proper ARIA labels throughout
- [ ] Implement keyboard navigation for all interactive elements
- [ ] Add skip-to-content link
- [ ] Test with screen reader
- [ ] Optimize images (WebP, compression)
- [ ] Implement code splitting
- [ ] Add lazy loading for below-fold content
- [ ] Optimize bundle size
- [ ] Add loading states
- [ ] Run Lighthouse audit and fix issues
- [ ] Add prefers-reduced-motion support
- [ ] Update SEO meta tags

### Success Criteria:
- ✅ Lighthouse Accessibility score: 95+
- ✅ Lighthouse Performance score: 90+
- ✅ WCAG AA compliant
- ✅ Keyboard navigation works fully
- ✅ Bundle size optimized

### PR Title:
```
feat(a11y): improve accessibility and performance optimizations
```

---

## 🧪 Phase 8: Testing & Documentation

**Branch:** `test/comprehensive-testing`
**Estimated Commits:** 2-4
**Risk Level:** Low (testing only)

### Tasks:
- [ ] Remove Cypress tests (as per requirements)
- [ ] Write comprehensive Jest unit tests
- [ ] Test all components with React Testing Library
- [ ] Test dark/light mode toggle
- [ ] Test responsive behavior
- [ ] Update README.md with new architecture
- [ ] Document build process with Cursor Agents
- [ ] Add screenshots to README
- [ ] Document terminal design system
- [ ] Create component documentation
- [ ] Update deployment instructions

### Success Criteria:
- ✅ Test coverage: 80%+
- ✅ All tests passing
- ✅ README updated
- ✅ Documentation complete

### PR Title:
```
test(all): add comprehensive testing and update documentation
```

---

## 🔄 Workflow Process

### For Each Phase:

1. **Start Phase:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b [branch-name]
   ```

2. **Development:**
   - Agent works on tasks for that phase
   - Makes incremental commits with conventional commit messages
   - Tests after each major change
   - Ensures build succeeds

3. **Pre-PR Checklist:**
   ```bash
   pnpm install
   pnpm lint
   pnpm test
   pnpm build
   ```

4. **Create PR:**
   - Push branch to remote
   - Create PR with descriptive title and body
   - Add screenshots/videos if applicable
   - Request review (optional)

5. **After PR Merged:**
   - Pull latest main
   - Start next phase

### Commit Message Format:

```
type(scope): description

[optional body]

[optional footer]
```

**Example Commits:**
```
feat(design): add terminal color palette CSS variables
feat(card): implement ProjectCard component with terminal window chrome
style(typography): add JetBrains Mono font import
test(card): add tests for ProjectCard hover states
fix(nav): resolve mobile menu z-index issue
docs(readme): update with terminal design system info
```

---

## 📊 Progress Tracking

### Overall Progress:
- [ ] Phase 1: Dependencies ✅
- [ ] Phase 2: Design System ✅
- [ ] Phase 3: Core Components ✅
- [ ] Phase 4: Project Cards ✅
- [ ] Phase 5: Hero & Navigation ✅
- [ ] Phase 6: Certifications ✅
- [ ] Phase 7: Accessibility & Performance ✅
- [ ] Phase 8: Testing & Documentation ✅

### PR Status:
- [ ] PR #1: Dependencies - Merged
- [ ] PR #2: Design System - Merged
- [ ] PR #3: Core Components - Merged
- [ ] PR #4: Project Cards - Merged
- [ ] PR #5: Hero & Navigation - Merged
- [ ] PR #6: Certifications - Merged
- [ ] PR #7: Accessibility & Performance - Merged
- [ ] PR #8: Testing & Documentation - Merged

---

## 🎯 Benefits of This Approach

### For Development:
- ✅ **Incremental progress** - Easy to track and review
- ✅ **Reduced risk** - Smaller changes are easier to test
- ✅ **Parallel review** - Can review early PRs while later work continues
- ✅ **Easy rollback** - If something breaks, revert one PR

### For Agentic Workflow:
- ✅ **Simulates autonomous agents** - Each phase is self-contained
- ✅ **Clear task boundaries** - Agent knows exactly what to do
- ✅ **Measurable progress** - Clear completion criteria
- ✅ **Realistic workflow** - How real dev teams work

### For Learning:
- ✅ **See incremental changes** - Understand how each piece fits
- ✅ **Review process** - Practice PR reviews
- ✅ **Git workflow** - Learn branching strategies
- ✅ **Documentation** - See how agents document work

---

## 🚀 Getting Started

To begin the agentic workflow:

1. **Review this document** and approve the phase breakdown
2. **Ensure prerequisites** are met:
   - Git configured
   - GitHub connected in Cursor
   - Branch protection rules set (optional)
3. **Start Phase 1** by running:
   ```bash
   git checkout -b feat/modernize-dependencies
   ```
4. **Give agent the prompt** for Phase 1
5. **Review and merge** PR when complete
6. **Move to Phase 2** and repeat

---

## 📝 Agent Prompt Templates

### Phase 1 Prompt:
```
Begin Phase 1: Dependencies & Build Modernization

Branch: feat/modernize-dependencies

Tasks:
1. Update React 17 → 19.2.3
2. Remove node-sass, add Tailwind CSS 4.1.19
3. Update TypeScript to 5.9.2
4. Update Jest to 30.2.0
5. Update all dependencies
6. Fix breaking changes
7. Test everything

Ensure all tests pass and build succeeds before creating PR.

Refer to AGENTS.md for coding standards.
```

### Phase 2 Prompt:
```
Begin Phase 2: Terminal Design System

Branch: feat/terminal-design-system

Tasks:
1. Create CSS variables for terminal color palette
2. Add monospace font imports (JetBrains Mono)
3. Configure Tailwind with custom theme
4. Implement base typography styles
5. Create terminal utility classes
6. Test dark/light modes

Refer to REDESIGN_REQUIREMENTS.md for complete design specifications.
```

*(Continue for each phase...)*

---

**Document Version:** 1.0
**Last Updated:** January 16, 2026
**Author:** Agentic Workflow Planning
