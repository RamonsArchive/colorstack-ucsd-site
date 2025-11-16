# Branch Protection Setup Guide

This document explains how to set up branch protection for the `main` branch to ensure code quality and collaborative maintenance.

## GitHub Branch Protection Rules

### Required Settings

1. **Go to Repository Settings** → **Branches** → **Add rule** for `main` branch

2. **Enable these protections:**

   ✅ **Require a pull request before merging**
   - Require approvals: **1** (at least you as maintainer)
   - Dismiss stale pull request approvals when new commits are pushed
   - Require review from Code Owners (optional but recommended)

   ✅ **Require status checks to pass before merging**
   - Require branches to be up to date before merging
   - Required status checks:
     - `lint-and-format` (from CI workflow)
     - `build` (from CI workflow)

   ✅ **Require conversation resolution before merging**
   - All PR comments must be resolved

   ✅ **Do not allow bypassing the above settings**
   - Even admins must follow these rules

   ✅ **Require linear history** (optional but recommended)
   - Prevents merge commits, keeps history clean

### Optional but Recommended

- **Restrict who can push to matching branches**: Only maintainers
- **Allow force pushes**: ❌ Disabled
- **Allow deletions**: ❌ Disabled

## Code Owners

Create `.github/CODEOWNERS` file to automatically request reviews:

```
# Default owner for all files
* @your-github-username

# Specific owners for critical files
/src/app/layout.tsx @your-github-username
/src/lib/GlobalTypes.ts @your-github-username
package.json @your-github-username
```

## Vercel Deployment Protection

In Vercel dashboard:

1. **Go to Project Settings** → **Git**
2. **Production Branch**: Set to `main`
3. **Enable "Protect Production Deployment"**
   - Requires approval before deploying to production
   - Or: Only deploy from `main` branch (automatic)

## Workflow Summary

1. **Contributor** creates feature branch
2. **Contributor** makes changes and pushes
3. **Contributor** creates Pull Request
4. **CI runs automatically** (lint, format, build checks)
5. **Maintainer reviews** PR (you)
6. **If approved** → Merge to `main`
7. **Vercel automatically deploys** from `main`

This ensures:

- ✅ All code is reviewed
- ✅ All checks pass before merging
- ✅ No broken code reaches production
- ✅ Clean git history
