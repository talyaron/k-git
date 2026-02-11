# 🌳 Git Workflow Guide for Team Development

**A beginner-friendly guide to working together without merge conflicts!**

---

## 📚 Table of Contents

1. [Before You Start](#-before-you-start)
2. [The Golden Rule](#-the-golden-rule)
3. [Your First Day Checklist](#-your-first-day-checklist)
4. [Safe Workflow Steps](#-safe-workflow-steps)
5. [Common Scenarios](#-common-scenarios)
6. [Conflict Prevention Tips](#-conflict-prevention-tips)
7. [If Something Goes Wrong](#-if-something-goes-wrong)

---

## 🎯 Before You Start

### What You Need Installed

```bash
✅ Git (installed on your computer)
✅ GitHub account
✅ Text editor (VS Code recommended)
✅ Node.js & npm
```

### Verify Installation

```bash
git --version        # Should show version
node --version       # Should show v16+
npm --version        # Should show v8+
```

---

## 💎 The Golden Rule

### **One Feature = One Branch**

```
🌳 main (protected - do NOT commit here!)
  ├─ 🌿 feature/add-gallery (Dev A working here)
  ├─ 🌿 feature/update-colors (Dev B working here)
  ├─ 🌿 fix/hero-animation (Dev C working here)
  └─ 🌿 style/improve-typography (Dev D working here)
```

### Key Principles

| ✅ DO | ❌ DON'T |
|------|---------|
| Create a branch for each feature | Commit directly to `main` |
| Keep branches small & focused | Work on multiple features in one branch |
| Sync with `main` before starting | Start work without pulling latest |
| Test locally before pushing | Push untested code |
| Use clear branch names | Use `temp`, `test`, `stuff` |
| Review code before merging | Merge without review |

---

## ✨ Your First Day Checklist

### Step 1️⃣: Clone the Repository

```bash
git clone https://github.com/yourusername/beit-yerach-react.git
cd beit-yerach-react
```

**What it does:** 📥 Downloads the project to your computer

### Step 2️⃣: Install Dependencies

```bash
npm install
```

**What it does:** 📦 Installs all required packages

### Step 3️⃣: Create Your Own Branch

```bash
git checkout -b feature/your-feature-name
```

**What it does:** 🌿 Creates a new branch just for you

### Step 4️⃣: Start the Dev Server

```bash
npm run dev
```

**What it does:** 🚀 Runs the app at localhost:5173

### Step 5️⃣: Make a Change

```bash
# Edit any file (e.g., add a comment to About.jsx)
# Save the file
```

### Step 6️⃣: Test Your Change

- 👀 Look at the browser
- ✅ Make sure it works
- 📱 Test on mobile too

---

## 🔄 Safe Workflow Steps

### The Daily Workflow (ALWAYS Follow This!)

```
┌─────────────────────────────────────────────────────────────┐
│  START OF DAY                                               │
└─────────────────────────────────────────────────────────────┘

  1️⃣  Pull latest changes
       $ git checkout main
       $ git pull origin main

  2️⃣  Create your branch
       $ git checkout -b feature/your-feature

  3️⃣  Make your changes
       Edit files in your editor

  4️⃣  Test locally
       npm run dev

┌─────────────────────────────────────────────────────────────┐
│  READY TO COMMIT?                                           │
└─────────────────────────────────────────────────────────────┘

  5️⃣  Check what changed
       $ git status

  6️⃣  Stage your changes
       $ git add .

  7️⃣  Commit with a message
       $ git commit -m "feat: add new feature"

  8️⃣  Push to GitHub
       $ git push origin feature/your-feature

  9️⃣  Create a Pull Request
       Go to GitHub, click "Create Pull Request"

🔟  Wait for review
       A team lead reviews your code

1️⃣1️⃣  Merge when approved
       GitHub merges your branch to main
```

---

## 🎬 Common Scenarios

### Scenario 1: Starting Your Day

**You:** "I want to work on a new feature"

```bash
# Step 1: Make sure you have latest code
git checkout main
git pull origin main

# Step 2: Create your feature branch
git checkout -b feature/add-testimonials

# You're now in your own branch! 🌿
# Safe to make changes without affecting others
```

### Scenario 2: Making Changes & Committing

**You:** "I changed the color scheme, now I want to save it"

```bash
# Step 1: See what files changed
git status

# Shows something like:
# modified: src/constants/colors.js
# modified: src/components/common/Card.css

# Step 2: Stage the changes
git add .

# Step 3: Create a commit (a save point)
git commit -m "style: update primary color to ocean blue"

# Step 4: Push to GitHub
git push origin feature/add-testimonials
```

### Scenario 3: Pulling Latest Code While Working

**You:** "Dev B finished their feature and I want their changes"

```bash
# Make sure your changes are saved first!
git status  # Should show nothing, or "On branch feature/..."

# Now pull from main WITHOUT switching branches
git pull origin main

# If there are conflicts, VS Code will show them!
# Ask for help 🙋 (see Conflict Prevention below)
```

### Scenario 4: Creating a Pull Request

**You:** "I'm done with my feature, ready to merge"

```bash
# Go to GitHub.com

# You'll see a button:
# "Compare & pull request"

# Click it! Then:
# - Add title (same as your last commit)
# - Add description (what did you change?)
# - Click "Create Pull Request"

# Wait for review 👀
```

### Scenario 5: Someone Requested Changes

**Team Lead:** "Please make these 2 changes before merging"

```bash
# You're still in your branch
git checkout feature/your-feature

# Make the changes in your editor

# Commit again
git add .
git commit -m "fix: address review comments"

# Push again
git push origin feature/your-feature

# The PR automatically updates! ✨
```

---

## 🛡️ Conflict Prevention Tips

### 🎯 Tip 1: Assign One File Per Person

```
✅ GOOD:
Dev A: Works on Navigation.jsx & Navigation.css
Dev B: Works on Footer.jsx & Footer.css
Dev C: Works on AcademicCard.jsx & AcademicCard.css

❌ BAD:
Dev A & B both editing AcademicCard.jsx
  → CONFLICT! 💥
```

### 🎯 Tip 2: Keep Your Branch Updated

```bash
# Do this BEFORE starting work each day
git checkout main
git pull origin main

# Then switch to your branch
git checkout feature/your-feature

# Merge latest main into your branch
git merge main
```

### 🎯 Tip 3: Commit Often, Push Often

```bash
# Don't wait until end of day!
# Commit every 30 minutes

git add .
git commit -m "feat: add form validation"
git push origin feature/your-feature

# Small, frequent commits = easier to manage
```

### 🎯 Tip 4: Use Clear Branch Names

```bash
✅ GOOD:
feature/add-gallery
feature/update-navigation
fix/hero-animation-bug
style/improve-typography
docs/add-api-documentation

❌ BAD:
feature/new-stuff
fix/bug
temp/testing
my-branch
work-in-progress
```

### 🎯 Tip 5: Review Branch Naming Convention

```
feature/  → New feature
fix/      → Bug fix
style/    → CSS/styling changes
refactor/ → Code improvement
docs/     → Documentation
test/     → Testing code
```

---

## 🆘 If Something Goes Wrong

### ❌ Problem: "I committed to main by accident!"

```bash
# Don't panic! You can undo this.

# Step 1: See your recent commits
git log --oneline

# Step 2: Undo the last commit (keeps your changes)
git reset --soft HEAD~1

# Step 3: Create a proper branch
git checkout -b feature/your-feature

# Step 4: Commit properly
git add .
git commit -m "feat: your feature"
git push origin feature/your-feature

# ✅ Fixed! Your code is now in a proper branch
```

### ❌ Problem: "I see 'conflict' in my PR!"

```bash
# This means you and someone else edited the same file

# Step 1: Go to VS Code
# You'll see both versions highlighted

# Step 2: Choose the correct version
# OR combine them manually

# Step 3: Save the file

# Step 4: Commit and push
git add .
git commit -m "fix: resolve merge conflict"
git push origin feature/your-feature

# ✅ Conflict resolved! PR updates automatically
```

### ❌ Problem: "I deleted a file by accident!"

```bash
# Step 1: See what you changed
git status

# Step 2: Restore the file
git restore src/components/About.jsx

# ✅ File is back!
```

### ❌ Problem: "I want to undo my last commit"

```bash
# If you haven't pushed yet:
git reset --soft HEAD~1

# Then make the right change and commit again

# If you already pushed:
git revert HEAD
git push origin feature/your-feature

# ⚠️ Ask a team lead for help!
```

### ❌ Problem: "I'm lost and don't know what branch I'm on"

```bash
# Check your current branch
git branch

# Should show something like:
# * feature/your-feature (the * shows current)
#   main

# Switch to main
git checkout main

# List all branches (even ones on GitHub)
git branch -a
```

### ❌ Problem: "My code is broken and I want to start over"

```bash
# Step 1: Go back to main
git checkout main

# Step 2: Delete your broken branch (locally)
git branch -D feature/your-feature

# Step 3: Create a fresh branch
git checkout -b feature/your-feature

# ✅ Fresh start!
```

---

## 📋 Commit Message Guide

### How to Write Good Commit Messages

```bash
# ✅ GOOD examples:
git commit -m "feat: add testimonials section"
git commit -m "fix: hero animation lag on mobile"
git commit -m "style: update primary color"
git commit -m "docs: add git workflow guide"
git commit -m "refactor: simplify academic card component"

# ❌ BAD examples:
git commit -m "fixes stuff"
git commit -m "update"
git commit -m "asdf"
git commit -m "Work in progress"
git commit -m "Changes"
```

### Commit Message Format

```
<type>: <description>

Types:
  feat:     → New feature
  fix:      → Bug fix
  style:    → CSS/styling changes
  refactor: → Code improvement
  docs:     → Documentation
  test:     → Test code
  chore:    → Config changes
```

---

## 🎓 Cheat Sheet

### Commands You'll Use Most

```bash
# Starting work
git checkout main           # Go to main branch
git pull origin main        # Get latest code
git checkout -b feature/... # Create your branch

# During work
git status                  # See what changed
git add .                   # Stage changes
git commit -m "..."         # Create commit
git push origin feature/... # Push to GitHub

# Before merging
git pull origin main        # Get latest main
git merge main              # Merge into your branch

# After merging
git branch -d feature/...   # Delete local branch
# (GitHub shows delete button for remote branch)

# If you mess up
git reset --soft HEAD~1     # Undo last commit
git restore <file>          # Restore deleted file
git checkout main           # Go back to safe version
```

---

## 🎯 Workflow Summary

```
🌳 MAIN (Protected - Nobody commits here!)
   ↓
   └─→ 🌿 Your Branch (feature/your-feature)
        ↓
        Make changes ✏️
        Test locally 🧪
        Commit when ready 💾
        Push to GitHub 🚀
        ↓
        Create Pull Request 📝
        ↓
        Team reviews 👀
        ↓
        Merge to main ✅
        ↓
   ✅ Your code is LIVE!
```

---

## 📚 Need Help?

### Ask Your Team Lead If:
- You see a merge conflict ⚠️
- You accidentally committed to main
- You deleted something important
- Your push is rejected
- You don't understand an error message
- Anything feels confusing

### Good Questions to Ask:
- "How do I resolve this conflict?"
- "Is my branch name good?"
- "Can you review my PR?"
- "I think I broke something, help?"

### Resources:
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com)
- Ask your team lead! 🙋

---

## ✅ Remember!

| 🎯 DO | 😱 DON'T |
|------|---------|
| Create a branch for each feature | Commit to `main` directly |
| Pull before you start | Skip updating your code |
| Test locally first | Push broken code |
| Commit often | Wait until end of day |
| Use clear branch names | Use vague names |
| Ask for help | Panic and delete things |
| Review your PR before merging | Merge without reading |

---

## 🚀 You're Ready!

You now know:
- ✅ How to create branches safely
- ✅ How to commit changes properly
- ✅ How to push to GitHub
- ✅ How to create pull requests
- ✅ How to prevent conflicts
- ✅ How to fix things if they break

**Start with the "Safe Workflow Steps" section and follow it every time you work. You've got this! 💪**

---

## 🎉 Quick Reference Card

Print this out and keep it at your desk!

```
EVERY DAY:
1. git checkout main
2. git pull origin main
3. git checkout -b feature/your-name
4. Make changes
5. git add .
6. git commit -m "feat: description"
7. git push origin feature/your-name
8. Create Pull Request on GitHub
9. Wait for review
10. ✅ Merged!

IF CONFLICT:
- Open file in VS Code
- Choose correct version
- git add . && git commit -m "fix: resolve conflict"
- git push origin feature/your-feature

IF EMERGENCY:
- git status (see what's happening)
- git checkout main (go to safe place)
- Ask for help 🙋
```

---

**Last Updated**: 2026-02-11
**Beit Yerach Development Team**

🌳 Happy collaborating! 🚀
