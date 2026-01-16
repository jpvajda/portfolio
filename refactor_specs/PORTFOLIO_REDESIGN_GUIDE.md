# Portfolio Redesign with Cursor Agent - Complete Guide

**Date Created:** January 16, 2026
**Project:** jpvajda-portfolio
**Current Version:** 0.2.0

---

## 📋 Table of Contents

1. [GitHub Setup (Required for Auto-PR)](#1-github-setup-required-for-auto-pr)
2. [Create a New Branch](#2-create-a-new-branch-for-the-redesign)
3. [Define Requirements Document](#3-define-your-requirements-document)
4. [Update Node Version](#4-update-your-node-version)
5. [Backup Current State](#5-backup-current-state)
6. [Prepare Cursor Agent Prompt](#6-prepare-your-cursor-agent-prompt)
7. [Configure Agent Mode Settings](#7-configure-agent-mode-settings)
8. [Testing Setup](#8-testing-setup)
9. [What to Expect](#9-what-to-expect)
10. [Post-Redesign Checklist](#10-post-redesign-checklist)

---

## 1. GitHub Setup (Required for Auto-PR)

You'll need to configure GitHub authentication in Cursor for automatic PR creation:

Reference:  https://www.bishoylabib.com/posts/cursor-agents-workflow-setup

### Steps:
1. Open **Cursor Settings** (Cmd/Ctrl + ,)
2. Navigate to **Features** → **Composer**
3. Enable **"Auto-commit and PR"** option
4. Connect your GitHub account via the GitHub integration
5. Grant necessary permissions for Cursor to:
   - Create branches
   - Create pull requests
   - Commit changes

### Verify Connection:
- Check that your GitHub account shows as connected in Cursor
- Ensure repository access is granted for `jpvajda/portfolio`

---

## 2. Choose Your Workflow Strategy

You have two options for how to structure the work:

### Option A: Single Large PR (Simple)
Create one feature branch for all changes:

```bash
git checkout main
git pull origin main
git checkout -b portfolio-redesign-2026
git push -u origin portfolio-redesign-2026
```

**Pros:** Simple, straightforward
**Cons:** Large PR, harder to review, all-or-nothing approach

### Option B: Multi-PR Agentic Workflow (Recommended)
Break work into 6-8 phases, each with its own PR:

```bash
# Phase 1: Dependencies
git checkout -b feat/modernize-dependencies

# After PR merged, Phase 2: Design System
git checkout main && git pull
git checkout -b feat/terminal-design-system

# Continue for each phase...
```

**Pros:** Incremental progress, easier reviews, simulates autonomous agents, safer rollback
**Cons:** More PRs to manage

**📋 See `AGENTIC_WORKFLOW_PHASES.md` for the complete multi-PR strategy breakdown.**

**Why multi-PR?** This simulates how an autonomous agentic development workflow would operate - breaking down complex tasks into manageable, reviewable chunks.

---

## 3. Define Your Requirements Document

Create a file called `REDESIGN_REQUIREMENTS.md` in your project root with clear specifications.

**See the `REDESIGN_REQUIREMENTS.md` file in this repository for the complete requirements.**

---

## 4. Update Your Node Version

Your current setup requires Node 14 for node-sass compatibility. Update before starting:

```bash
# Check current Node version
node --version

# If using nvm, install and use latest LTS
nvm install --lts
nvm use --lts

# Verify version (should be 18+ or 20+)
node --version

# Update npm to latest
npm install -g npm@latest
```

**Important:** The agent will likely replace node-sass with modern sass, removing the Node 14 requirement.

---

## 5. Backup Current State

Always backup before major changes:

```bash
# Ensure all changes are committed
git status

# Commit any uncommitted changes
git add .
git commit -m "Backup before portfolio redesign"

# Push to remote
git push origin main

# Create a backup tag
git tag v0.2.0-pre-redesign
git push origin v0.2.0-pre-redesign

# Optional: Create a backup branch
git checkout -b backup-original-portfolio
git push origin backup-original-portfolio
git checkout main
```

**Restore if needed:**
```bash
git checkout v0.2.0-pre-redesign
# or
git checkout backup-original-portfolio
```

---

## 6. Prepare Your Cursor Agent Prompt

### For Multi-PR Agentic Workflow (Recommended):

Use phase-specific prompts from `AGENTIC_WORKFLOW_PHASES.md`.

**Example for Phase 1:**
```
Begin Phase 1: Dependencies & Build Modernization

Branch: feat/modernize-dependencies

Read AGENTS.md for coding standards and REDESIGN_REQUIREMENTS.md for complete requirements.

Tasks:
1. Update React 17 → 19.2.3
2. Remove node-sass, add Tailwind CSS 4.1.19
3. Update TypeScript to 5.9.2
4. Update Jest to 30.2.0
5. Update all dependencies to latest stable
6. Fix any breaking changes
7. Test everything (pnpm test && pnpm build)

Create incremental commits with conventional commit messages.
Ensure all tests pass before creating PR.
```

**After Phase 1 PR is merged, continue with Phase 2, Phase 3, etc.**

### For Single Large PR:

Use a comprehensive prompt that covers all requirements at once (refer to AGENTS.md and REDESIGN_REQUIREMENTS.md).

---

## 7. Configure Agent Mode Settings

Before starting the agent, verify these settings in Cursor:

### Composer Settings:
- ✅ **Terminal access enabled** - Allow agent to run commands
- ✅ **Auto-commit enabled** - Automatic commits for changes
- ✅ **PR creation enabled** - Automatic PR when complete
- ✅ **File read/write permissions** - Allow editing project files

### GitHub Settings:
- ✅ **Branch protection** - Ensure main branch has protection rules
- ✅ **Required reviews** - Consider requiring PR reviews before merge
- ✅ **Status checks** - Enable if you have CI/CD

### Cursor General Settings:
- ✅ **Auto-save** - Recommended to enable
- ✅ **Format on save** - Optional but helpful

---

## 8. Testing Setup

Verify your current setup works before starting:

```bash
# Navigate to project
cd /Users/jvajda/Documents/Github/portfolio

# Install dependencies
yarn install

# Run tests (should pass)
yarn test --watchAll=false

# Build project (should succeed)
yarn build

# Optional: Test local server
yarn start
# Visit http://localhost:3000

# Optional: Run Cypress tests
npx cypress run
```

**Fix any errors before starting the redesign!**

---

## 9. What to Expect

### Agent Will:
✅ Read through your entire codebase
✅ Make incremental changes file by file
✅ Commit changes with descriptive messages
✅ Run tests to verify changes work
✅ Build the project to ensure no errors
✅ Create a PR with detailed description when complete
✅ Run in the background while you do other work

### You Should:
👀 Monitor progress periodically
👀 Watch for any errors or questions from agent
👀 Review commits as they happen
👀 Test locally when major changes complete
👀 Provide feedback if direction needs correction
👀 Be ready to answer clarifying questions

### Timeline:
- **Small updates:** 10-30 minutes
- **Full redesign:** 1-3 hours (depending on scope)
- **Complex changes:** May take longer, agent works systematically

### If Something Goes Wrong:
```bash
# Stop the agent (Esc or Stop button)
# Revert changes
git reset --hard HEAD
# Or revert to specific commit
git reset --hard <commit-hash>
```

---

## 10. Post-Redesign Checklist

After the agent completes, follow this checklist:

### ✅ Review Phase

```bash
# Pull latest changes if agent pushed to remote
git pull origin portfolio-redesign-2026

# Review all changed files
git log --oneline
git diff main...portfolio-redesign-2026
```

### ✅ Testing Phase

```bash
# Install any new dependencies
yarn install

# Run all tests
yarn test --watchAll=false

# Run Cypress tests
npx cypress run

# Build production version
yarn build

# Test production build locally
npx serve -s build
# Visit http://localhost:3000
```

### ✅ Code Review

1. **Review the Pull Request on GitHub:**
   - Read the description
   - Check all changed files
   - Look for any security concerns
   - Verify no sensitive data was committed

2. **Code Quality Checks:**
   - No console.log statements left behind
   - No commented-out code blocks
   - Consistent code style
   - Proper error handling

3. **Functionality Checks:**
   - All links work
   - All images load
   - Dark/light mode toggle works
   - Responsive design on all screen sizes
   - Smooth animations
   - No console errors

### ✅ Performance Testing

```bash
# Run Lighthouse audit
# In Chrome DevTools:
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Generate report for:
#    - Performance
#    - Accessibility
#    - Best Practices
#    - SEO

# Target scores: 90+ in all categories
```

### ✅ Cross-Browser Testing

Test on:
- [ ] Chrome (desktop & mobile)
- [ ] Firefox (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Edge

### ✅ Deployment Phase

```bash
# If everything looks good, deploy to GitHub Pages
yarn deploy

# Visit your live site
# https://jpvajda.github.io/portfolio

# Test live site thoroughly
```

### ✅ Merge the PR

1. Request review from colleague (optional)
2. Approve and merge PR on GitHub
3. Delete feature branch (optional)
4. Pull main branch locally

```bash
git checkout main
git pull origin main
git branch -d portfolio-redesign-2026
```

### ✅ Post-Deploy Verification

- [ ] Live site loads correctly
- [ ] All functionality works on production
- [ ] No broken links
- [ ] Images load properly
- [ ] Analytics tracking works (if applicable)
- [ ] Social share previews look good

### ✅ Documentation

- [ ] Update README.md if needed
- [ ] Document any new environment variables
- [ ] Update version number in package.json
- [ ] Tag the release

```bash
git tag v0.3.0
git push origin v0.3.0
```

---

## 🆘 Troubleshooting

### Agent Gets Stuck
- Press **Esc** to pause
- Review what it's trying to do
- Provide clarifying instruction
- Resume or start over

### Build Fails
```bash
# Check Node version
node --version

# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### Tests Fail
- Review test failures
- Update tests if needed
- Ask agent to fix specific test

### Deployment Issues
```bash
# Check gh-pages branch exists
git branch -a

# Verify homepage in package.json
# Should be: "homepage": "https://jpvajda.github.io/portfolio"

# Redeploy
yarn deploy
```

### Rollback Needed
```bash
# Option 1: Revert to backup tag
git checkout v0.2.0-pre-redesign
git checkout -b emergency-rollback
git push origin emergency-rollback
yarn deploy

# Option 2: Revert specific commits
git revert <commit-hash>
```

---

## 📚 Additional Resources

- [Cursor Documentation](https://docs.cursor.com)
- [React 18 Upgrade Guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 📝 Notes & Observations

Use this section to document your experience:

### What Worked Well:
-

### Challenges Encountered:
-

### Lessons Learned:
-

### Future Improvements:
-

---

## ✅ Quick Start Checklist

Before switching to Agent mode:

- [ ] GitHub connected in Cursor
- [ ] Created new branch: `portfolio-redesign-2026`
- [ ] Created `REDESIGN_REQUIREMENTS.md` file
- [ ] Backed up current state with git tag
- [ ] Updated Node version
- [ ] Verified tests and build work
- [ ] Prepared agent prompt
- [ ] Ready to switch to Agent mode

**Ready to go!** Switch to Agent mode and paste your prompt.

---

**Document Version:** 1.0
**Last Updated:** January 16, 2026
**Author:** Portfolio Redesign Planning Session
