# Portfolio Redesign - Agent Instructions

This file defines rules and conventions for AI agents working on the portfolio redesign project.

## Project Context

**Project:** John P Vajda Portfolio Website
**Tech Stack:** R
 - React 19.2.3,
 - Typscript 5.9.2,
 - Tailwind, 4.1.19
 - Jest 30.2.0
 - Vite  7.3.1
**Deployment:** GitHub Pages
**Repository:** https://github.com/jpvajda/portfolio
**Live Site:** https://jpvajda.github.io/portfolio

## Primary Objectives

1. Modernize React app 19+
2. Replace node-sass with tailwind
3. Improve responsive design and UX
4. Enhance accessibility (WCAG 2.1 AA)
5. Optimize performance (Lighthouse 90+)
6. Maintain GitHub Pages compatibility

## Code Style and Standards

### React/JavaScript
- Use React 19+ best practices (hooks, concurrent features)
- Prefer functional components over class components
- Use modern ES6+ syntax (arrow functions, destructuring, spread operators)
- Follow React Hooks rules (no hooks in conditions/loops)
- Use prop-types or TypeScript for type safety when possible
- Keep components small and focused (Single Responsibility)
- Extract reusable logic into custom hooks
- Use semantic HTML elements

### CSS/Styling
- Use modern Sass (Tailwind)
- Follow BEM naming convention for CSS classes
- Mobile-first responsive design approach
- Use CSS Grid and Flexbox for layouts
- Maintain dark/light mode compatibility
- Ensure WCAG AA color contrast compliance
- Use CSS custom properties (variables) for theming
- Avoid inline styles unless absolutely necessary

### File Organization
```
src/
├── components/     # Reusable components
├── assets/         # Images, icons, fonts
├── styles/         # Global styles and variables
├── hooks/          # Custom React hooks
├── utils/          # Helper functions
└── index.js        # Entry point
```

### Naming Conventions
- Components: PascalCase (e.g., `ProjectCard.js`)
- Hooks: camelCase with 'use' prefix (e.g., `useTheme.js`)
- Utilities: camelCase (e.g., `formatDate.js`)
- CSS files: kebab-case (e.g., `project-card.scss`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_URL`)

## Testing Requirements

### Unit Tests (Jest/React Testing Library)
- Write tests for all new components
- Test user interactions and state changes
- Mock external dependencies
- Use descriptive test names: `test('should render project cards correctly')`
- Maintain or improve existing test coverage
- Run tests before committing: `yarn test --watchAll=false`

### E2E Tests (Cypress)
- Remove all Cypress Tests


### Test Coverage Goals
- Overall coverage: 80%+
- Critical components: 90%+
- New features: 100%

## Git Workflow

### Branch Strategy
```bash
# Always start from main
git checkout main
git pull origin main

# Create descriptive feature branch with semantic version best practices. (Conventional Commits)
git checkout -b feat/project-card-redesign
# or
git checkout -b fix/dark-mode-toggle
# or
git checkout -b chore/update-dependencies
# or
git checkout -b test/update-tests
# or
git checkout -b style/update-styles
# or
git checkout -b docs/update-styles
```

### Commit Messages
Follow Conventional Commits format:
```
<type>(<scope>): <description>

```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `style:` Formatting, missing semi-colons, etc.
- `test:` Adding tests
- `chore:` Maintenance tasks, dependency updates
- `docs:` Adds or updates documentation


**Examples:**
```
feat(projects): add filtering by technology tags
fix(navbar): resolve mobile menu overlap issue
refactor(deps): upgrade React to v18 and update hooks
style(cards): improve hover animation performance
a11y(footer): add ARIA labels to social links
```

### Before Committing
1. Run linter: `pnpm lint` (if available)
2. Run tests: `pnpm test`
3. Build check: `pnpm build`
4. Review changes: `git diff`

## Accessibility (a11y) Requirements

### Mandatory Practices
- Use semantic HTML5 elements (`<nav>`, `<main>`, `<article>`, etc.)
- Add ARIA labels to interactive elements without text
- Ensure all images have descriptive `alt` attributes
- Maintain keyboard navigation support (Tab, Enter, Escape)
- Ensure focus indicators are visible
- Test with screen readers when possible
- Respect `prefers-reduced-motion` for animations
- Maintain color contrast ratios (WCAG AA: 4.5:1 for normal text, 3:1 for large text)
- Form inputs must have associated labels
- Don't rely on color alone to convey information

### ARIA Best Practices
```jsx
// Good examples:
<button aria-label="Close modal">×</button>
<nav aria-label="Main navigation">...</nav>
<img src="..." alt="John Vajda's portfolio website" />
<section aria-labelledby="projects-heading">
  <h2 id="projects-heading">Projects</h2>
</section>
```

## Performance Optimization

### Image Handling
- Optimize all images before committing
- Use lazy loading for images: `loading="lazy"`
- Provide proper width and height attributes
- Consider WebP format with fallbacks
- Use responsive images with `srcset` where appropriate

### Code Splitting
- Use React.lazy() for route-based splitting
- Lazy load heavy components (e.g., modals, carousels)
- Keep initial bundle size under 300KB (gzipped)

### Performance Checks
- Run Lighthouse audit before major changes
- Target scores: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+
- Monitor bundle size with each build
- Check for unused dependencies

## Content Requirements

### Project Cards (18 total)
Keep all existing projects with:
- Project title
- Brief description
- Link to live demo or code
- Technology tags (add if missing)
- Thumbnail image

**Technology Categories:**
- Frontend: HTML, CSS, JavaScript, React
- Backend: Node.js, APIs, Microservices
- Python: Python, Machine Learning, TensorFlow
- Testing: Cypress, Jest, QA

### Certifications (7 total)
Maintain all certifications with:
- Issuing organization
- Certification name
- Link to credential
- Badge or icon

### External Links
Keep all profile links:
- GitHub: https://github.com/jpvajda
- LinkedIn: https://www.linkedin.com/in/johnpvajda
- FreeCodeCamp: https://www.freecodecamp.org/jpvajda
- X: https://x.com/johnpvajda
- BlueSky: https://bsky.app/profile/johnpvajda.bsky.social

## Responsive Design

### Breakpoints
```scss
// Mobile First
$mobile: 320px;
$tablet: 768px;
$desktop: 1024px;
$large-desktop: 1440px;

// Media queries
@media (min-width: $tablet) { ... }
@media (min-width: $desktop) { ... }
@media (min-width: $large-desktop) { ... }
```

### Testing Viewports
Test at these widths:
- 320px (iPhone SE)
- 375px (iPhone 12/13)
- 768px (iPad)
- 1024px (Desktop)
- 1920px (Large Desktop)

## Dark/Light Mode

### Implementation
- Maintain existing ModeToggle component
- Use CSS custom properties for theme colors
- Store preference in localStorage
- Respect system preference initially
- Smooth transitions between modes
- Ensure all colors work in both modes

### Color Variables Example
```scss
:root {
  --color-background: #ffffff;
  --color-text: #333333;
  --color-primary: #007bff;
  --color-card-bg: #f8f9fa;
}

[data-theme="dark"] {
  --color-background: #1a1a1a;
  --color-text: #e0e0e0;
  --color-primary: #66b3ff;
  --color-card-bg: #2a2a2a;
}
```

## Dependencies Management

### Update Strategy
1. Read CHANGELOG before updating major versions
2. Test thoroughly after dependency updates
3. Update one major dependency at a time
4. Keep peer dependencies compatible
5. Remove unused dependencies

### Pin Dependencies
 - React 19.2.3
 - Typscript 5.9.2
 - Tailwind, 4.1.19
 - Jest 30.2.0

## Error Handling

### Best Practices
- Always handle async errors (try/catch)
- Provide user-friendly error messages
- Log errors for debugging (remove before commit)
- Use Error Boundaries for React components
- Handle network errors gracefully
- Validate user input

### Example
```jsx
// Good error handling
const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch');
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    setError('Unable to load data. Please try again.');
  }
};
```

## Documentation

### Code Comments
- Write self-documenting code (clear names, simple logic)
- Add comments for complex logic only

### README Updates
- Document the sites architecture only
- Document it was build using Cursor agents
- Document the process how it was built

## Deployment & Build

### GitHub Pages
- Must maintain `homepage` field in package.json
- Build output must go to `build/` directory
- Keep `yarn deploy` command working
- Test build before pushing: `yarn build`
- Verify deployment: https://jpvajda.github.io/portfolio

### Pre-Deployment Checklist
- [ ] All tests passing
- [ ] Build succeeds without warnings
- [ ] Lighthouse scores meet targets
- [ ] All links work
- [ ] Images load properly
- [ ] Dark/light mode works
- [ ] Responsive on all breakpoints
- [ ] No console errors

## Common Patterns

### Creating New Components
```jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ComponentName.scss';

const ComponentName = ({ prop1, prop2 }) => {
  // Component logic here

  return (
    <div className="component-name">
      {/* Component JSX */}
    </div>
  );
};

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

ComponentName.defaultProps = {
  prop2: 0,
};

export default ComponentName;
```

### Project Card Pattern
```jsx
<Card className="project-card">
  <Card.Img
    variant="top"
    src={image}
    alt={title}
    loading="lazy"
  />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>{description}</Card.Text>
    <div className="tech-tags">
      {tags.map(tag => <span key={tag}>{tag}</span>)}
    </div>
    <Button href={link} aria-label={`View ${title} project`}>
      View Project
    </Button>
  </Card.Body>
</Card>
```

## Things to Avoid

### ❌ Don't
- Use deprecated React lifecycle methods (componentWillMount, etc.)
- Use node-sass (use Tailwind)
- Commit console.log statements
- Push directly to main branch
- Skip tests when making changes
- Use `!important` in CSS (unless absolutely necessary)
- Inline styles without good reason
- Hardcode values that should be configurable
- Break existing URLs or links
- Remove features without discussing first

### ✅ Do
- Use React Hooks (useState, useEffect, useCallback, useMemo)
- Write descriptive variable and function names
- Keep functions small and focused
- Test your changes locally before committing
- Run the full test suite before major commits
- Review your own code before requesting review
- Ask for clarification when requirements are unclear
- Document complex logic with comments
- Consider mobile users first

## Security Considerations

- Never commit API keys, tokens, or secrets
- Validate and sanitize user input
- Use HTTPS for all external resources
- Keep dependencies updated for security patches
- Review third-party library code when possible
- Use secure Content Security Policy headers
- Implement proper CORS if adding backend
- ALWAYS use pnpm not yarn not npm

## Questions to Ask

If unclear about any task, ask:
1. What is the expected user experience?
2. Should this work in both light and dark mode?
3. What browsers should this support?
4. Are there accessibility requirements?
5. Should this be tested with Cypress or unit tests?
6. Does this affect mobile layout?
7. Will this impact bundle size?

## Design System Reference

### Terminal/CLI Aesthetic
This portfolio uses a **terminal/command-line interface aesthetic** inspired by https://adamslaker.dev/

**Key Design Elements:**
- Dark background with monospace typography
- Terminal green (#7FFF00) accent color
- macOS window chrome on cards (🔴 🟡 🟢)
- Terminal syntax and command prompts throughout
- File path notation (~/projects/)
- Bracket notation for tags [React] [TypeScript]
- Terminal cursor block effects (█)

**Complete design specifications are in:**
`refactor_specs/REDESIGN_REQUIREMENTS.md` - See "Design Inspiration & Style Guidelines" section

**When implementing ANY component, always:**
1. Use monospace fonts (JetBrains Mono, Fira Code, or similar)
2. Apply terminal aesthetic patterns
3. Use accent green (#7FFF00) for highlights
4. Include terminal window chrome where appropriate
5. Use bracket notation for tags/categories
6. Maintain dark theme as primary (light as secondary)

## Reference Files

For detailed requirements, see:
- `refactor_specs/REDESIGN_REQUIREMENTS.md` - Complete redesign requirements & design system
- `refactor_specs/PORTFOLIO_REDESIGN_GUIDE.md` - Step-by-step guide
- `refactor_spects/AGENTIC_WORKFLOW_PHASES.md` - how to make PRs.
- `package.json` - Current dependencies and scripts
- `cypress/` - Existing E2E tests

## Success Criteria

A task is complete when:
1. ✅ Code follows all style guidelines above
2. ✅ All tests pass (unit + E2E)
3. ✅ Build succeeds without errors/warnings
4. ✅ Lighthouse scores meet targets (90+)
5. ✅ Works on mobile, tablet, and desktop
6. ✅ Accessible via keyboard and screen reader
7. ✅ Works in both light and dark mode
8. ✅ No console errors in browser
9. ✅ Git commit follows conventional format
10. ✅ Documentation updated if needed

---

**Last Updated:** January 16, 2026
**Version:** 1.0
**Maintained by:** jpvajda
