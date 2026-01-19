# Portfolio Redesign Requirements

## 🎯 Primary Goals
- Modern design using latest React practices
- Improved responsive design and mobile experience
- Better performance and load times
- Accessibility improvements (WCAG 2.1 AA compliance)
- Maintain and enhance dark/light mode toggle

## 🔧 Technical Updates

Follow instructions in AGENTS.MD

### Build & Tooling

Follow instructions in AGENTS.MD

## 🎨 Design Requirements

### Overall Aesthetic
- Modern, clean, professional design
- Consistent color scheme and typography
- Smooth animations and transitions
- White space and visual hierarchy improvements

### Layout Improvements
- Responsive grid or masonry layout for projects
- Better section organization
- Sticky/fixed navigation (optional)
- Improved hero section with better visual impact

### Component Updates
- Enhanced project cards with hover effects
- Better certification showcase
- Improved footer design
- Enhanced carousel or hero section

### Mobile Experience
- Touch-friendly interactions
- Optimized layout for small screens
- Performance optimizations for mobile
- Hamburger menu improvements (if applicable)

## 📦 Content Structure

### Keep Existing Content
- All 18 existing projects with links
- All certifications (7 total)
- External profile links (GitHub, LinkedIn, FCC, etc.)
- Current navbar and footer structure
- About/bio information from carousel

### Content Enhancements
- Add technology/skill tags to each project
- Project categories or filtering
- Timeline or chronological organization
- Better project descriptions
- Add project screenshots if available

## ⚡ Performance & Best Practices

### Performance
- [ ] Optimize images (WebP format, compression)
- [ ] Implement lazy loading for images
- [ ] Code splitting for better initial load
- [ ] Minimize CSS and JavaScript bundles

### Accessibility
- [ ] Semantic HTML elements
- [ ] Proper ARIA labels and roles
- [ ] Keyboard navigation support
- [ ] Screen reader optimization
- [ ] Color contrast compliance

### SEO
- [ ] Update meta tags and descriptions
- [ ] Add Open Graph tags
- [ ] Fix canonical URL
- [ ] Add structured data (JSON-LD)
- [ ] Optimize page titles

## 🚫 Out of Scope
- Backend changes or API development
- Database integration
- User authentication
- Blog functionality (unless easy to add)
- Content Management System (CMS)

## ✅ Definition of Done
- [ ] All tests passing
- [ ] Site builds successfully
- [ ] Responsive on mobile, tablet, desktop
- [ ] Lighthouse score: 90+ in all categories
- [ ] Dark/light mode working
- [ ] All links functional
- [ ] Deploys successfully to GitHub Pages
- [ ] PR created with detailed description

## 📝 Notes
- Current site: https://jpvajda.github.io/portfolio
- GitHub repo: https://github.com/jpvajda/portfolio
- Current Node requirement: Node 14 (due to node-sass)
- Deployment: GitHub Pages via gh-pages package

## 🎨 Design Inspiration & Style Guidelines

### Primary Design Reference
**Inspiration:** https://adamslaker.dev/
**Aesthetic:** Terminal/CLI Developer Theme

This portfolio should embrace a modern terminal/command-line aesthetic similar to the reference site, creating a unique developer-focused experience.

### Color Palette - Terminal Theme

**Dark Mode (Primary):**
```css
--bg-primary: #0d0d0d;           /* Main dark background */
--bg-secondary: #1a1a1a;         /* Card/section backgrounds */
--bg-tertiary: #262626;          /* Hover states, borders */
--text-primary: #e0e0e0;         /* Main text color */
--text-secondary: #a0a0a0;       /* Muted text, descriptions */
--text-tertiary: #6b6b6b;        /* Very muted, labels */
--accent-green: #7FFF00;         /* Primary accent (terminal green) */
--accent-green-dim: #4a9b00;     /* Dimmed green for hover/inactive */
--accent-green-glow: #7FFF0033;  /* Glow effect */
--terminal-red: #ff5555;         /* Error states, stop indicator */
--terminal-yellow: #ffff55;      /* Warning states, pause indicator */
--terminal-blue: #5555ff;        /* Info states, links */
```

**Light Mode (Secondary):**
- Inverted palette with light backgrounds
- Maintain green accent for consistency
- Ensure WCAG AA contrast compliance

### Typography - Monospace Focus

**Font Stack:**
```css
font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
```

**Alternatives to Consider:**
- JetBrains Mono (recommended - excellent readability)
- Fira Code (ligatures support)
- Source Code Pro
- IBM Plex Mono

**Font Sizing:**
- H1 (Name): 4rem - 6rem (large, bold)
- H2 (Section Titles): 2rem - 3rem
- H3 (Project Titles): 1.25rem - 1.5rem
- Body: 1rem (16px)
- Small/Labels: 0.875rem (14px)
- Code/Terminal: 0.9rem

**Font Weights:**
- Regular: 400
- Medium: 500
- Bold: 700

### Terminal Aesthetic Elements

**1. Terminal Syntax Throughout:**
```
> initializing portfolio...
adam@portfolio:~/projects$ ls -la
cd ../projects
[Open Source] [AI/ML] [React]
```

**2. Terminal Window Chrome:**
- macOS-style window controls (🔴 🟡 🟢)
- File path notation in headers: `~/projects/ephemeris-iss...`
- Terminal prompt styling: `username@domain:~/path$`

**3. Command-Line Patterns:**
- Use ">" for prompts and section intros
- Use bracket notation for tags: `[React] [TypeScript] [Jest]`
- File path style navigation
- Terminal cursor block effect: `█` or `▋`

**4. Visual Effects:**
- Subtle background texture/noise (like CRT screen)
- Terminal cursor blink animation
- Typing animation for hero text
- Matrix-style text effects (optional, subtle)
- Scan line effect (subtle, optional)

### Component Design Patterns

**Hero Section:**
- Full viewport height with centered content
- Large monospace name display
- Terminal loading animation: `> initializing portfolio...`
- Subtitle in accent green with cursor block
- Minimal, focused design

**Project Cards - Terminal Window Style:**
```
╔════════════════════════════════════╗
║ 🔴 🟡 🟢 ~/projects/project-name   ║
╠════════════════════════════════════╣
║                                    ║
║  [Icon/Logo]                       ║
║                                    ║
║  > Project Name█                   ║
║                                    ║
║  Description text here...          ║
║                                    ║
║  [React] [TypeScript] [Jest]       ║
║                                    ║
╚════════════════════════════════════╝
```

**Design Specifications:**
- Dark card background with subtle border
- macOS window dots (red, yellow, green) at top
- File path notation in card header
- Project icon/logo centered at top
- Title with terminal cursor (█) effect
- Technology tags in square brackets
- Hover: Lift effect with glow
- Click: Expand or navigate

**Navigation:**
- Clean, minimal top nav
- Terminal prompt style: `> adamslaker.dev _`
- Right-aligned nav links
- Social icons with hover effects
- Optional: Font switcher toggle

**Section Headers:**
```
> cd ~/projects
adam@portfolio:~/projects$ ls -la
```

**Technology Tags:**
- Square bracket notation: `[Technology]`
- Green border with transparent background
- Hover: Filled green background
- Monospace font
- Consistent padding

**Buttons/CTAs:**
- Terminal style with border
- `> Button Text` with caret
- Hover: Background fill animation
- Focus: Green glow effect
- Active: Slightly darker

### Animation Guidelines

**Loading/Typing Effects:**
- Terminal cursor blink (1s interval)
- Typing animation for hero text
- Staggered fade-in for project cards
- Command execution simulation

**Hover States:**
- Subtle lift (translateY(-4px))
- Green glow shadow
- Border brightness increase
- Smooth transitions (200-300ms)

**Scroll Animations:**
- Fade in on scroll (subtle)
- Section transitions with terminal commands
- Respect `prefers-reduced-motion`

**Performance:**
- 60fps target
- Use `transform` and `opacity` for animations
- GPU-accelerated transforms
- No layout-shifting animations

### Interactive Elements

**Terminal Cursor:**
- Blinking block: `█`
- Color: accent-green
- Animation: 1s ease-in-out infinite

**Window Controls (macOS dots):**
- Red: #ff5555
- Yellow: #ffff55
- Green: #7FFF00
- Subtle hover effect on each dot
- Optional: Click red to minimize card

**Code/Terminal Blocks:**
- Slightly lighter background than card
- Green text for commands
- Gray text for output
- Proper syntax highlighting

### Accessibility Considerations

**While maintaining terminal aesthetic:**
- Ensure text contrast meets WCAG AA (4.5:1 minimum)
- Provide hover AND focus states
- Support keyboard navigation
- Screen reader friendly (hide decorative elements)
- Alternative text for all images
- Skip to content link
- Proper heading hierarchy

**Testing Contrast:**
- Green (#7FFF00) on dark (#0d0d0d): Check contrast
- May need slightly adjusted green for compliance
- Test with contrast checker tools

### Responsive Design Approach

**Mobile (< 768px):**
- Single column layout
- Simplified terminal chrome
- Larger touch targets
- Hamburger menu with terminal animation
- Reduced font sizes proportionally

**Tablet (768px - 1023px):**
- Two-column project grid
- Full terminal aesthetic maintained
- Touch-friendly hover states

**Desktop (1024px+):**
- Multi-column grid (2-3 columns)
- Full hover effects and animations
- Maximum terminal aesthetic
- Optimal reading width maintained

### Special Features to Consider

**Optional Enhancements:**
1. **Font Switcher** - Allow users to toggle between monospace fonts
2. **Theme Toggle** - While maintaining terminal aesthetic in both modes
3. **Terminal Easter Eggs** - Hidden commands in console
4. **Command History** - Show navigation as terminal commands
5. **ASCII Art** - Subtle use in headers or backgrounds
6. **Matrix Rain** - Very subtle background effect (optional)

### Things to Avoid

**Don't:**
- Overuse animations (keep it professional)
- Make text too small (readability first)
- Sacrifice accessibility for aesthetics
- Use harsh, eye-straining colors
- Ignore mobile experience
- Make it look like a 1990s site (keep it modern)

**Do:**
- Balance aesthetics with usability
- Maintain clean, readable typography
- Use green accent sparingly but effectively
- Keep animations subtle and purposeful
- Test on multiple devices
- Prioritize performance

## 📱 Responsive Breakpoints

Ensure design works well at these breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

## 🧪 Testing Requirements

### Unit Tests
- Test all new components
- Maintain existing test coverage
- Update tests for modified components

### E2E Tests (Cypress)
- All existing Cypress tests must pass
- Add tests for new interactive features
- Test responsive behavior
- Test dark/light mode toggle

### Manual Testing
- Test all links work
- Verify images load properly
- Check animations are smooth
- Validate forms (if any)
- Test keyboard navigation
- Test with screen reader

## 🚀 Deployment & CI/CD

### GitHub Pages Deployment
- Must maintain compatibility with GitHub Pages
- Keep `yarn deploy` command working
- Ensure proper build output to `build/` directory
- Verify `homepage` field in package.json is correct

### Build Optimization
- Minimize bundle size
- Code splitting where appropriate
- Tree shaking enabled
- Production build optimizations

## 📊 Success Metrics

Track these metrics to measure success:

### Performance
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Total Bundle Size: < 300KB (gzipped)

### Lighthouse Scores (Target: 90+)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### User Experience
- All interactions respond within 100ms
- Smooth 60fps animations
- No layout shifts (CLS < 0.1)
- Mobile-friendly (passes Mobile-Friendly Test)

## 🔄 Future Enhancements (Nice to Have)

Consider these for future iterations:
- Blog section with markdown support
- Contact form with backend
- Analytics integration (Google Analytics/Plausible)
- RSS feed for updates
- Progressive Web App (PWA) features
- Internationalization (i18n)
- Advanced filtering/search for projects
- Project detail pages with more info
- Testimonials section
- Skills visualization/progress bars
- Timeline view of career/education
