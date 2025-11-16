# Collaboration Setup Guide

This guide explains the complete setup for collaborative maintenance of the ColorStack @ UCSD website.

## Quick Answer Summary

### ✅ What You Need to Do

1. **Install Prettier**: `npm install` (already added to package.json)
2. **Set up GitHub Branch Protection** (see below)
3. **Enable GitHub Actions** (already configured)
4. **Configure Vercel** to deploy from `main` only

### ✅ What's Already Set Up

- ✅ ESLint (Next.js + TypeScript rules)
- ✅ Prettier configuration
- ✅ GitHub Actions CI workflow
- ✅ Pull Request template
- ✅ Contributing guidelines
- ✅ Code owners file

## Detailed Setup Instructions

### 1. GitHub Branch Protection

**Go to**: Repository → Settings → Branches → Add rule for `main`

**Enable these settings:**

```
✅ Require a pull request before merging
   - Required approvals: 1
   - ✅ Dismiss stale approvals when new commits are pushed
   - ✅ Require review from Code Owners

✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date
   - Required checks:
     - lint-and-format
     - build

✅ Require conversation resolution before merging

✅ Do not allow bypassing the above settings

✅ Require linear history (optional but recommended)
```

**Result**: No one (including you) can push directly to `main`. All changes must go through PRs with your approval.

### 2. GitHub Actions (Already Configured)

The `.github/workflows/ci.yml` file is ready. It will:

- Run on every PR to `main`
- Check linting (ESLint)
- Check formatting (Prettier)
- Check TypeScript compilation
- Build the project

**No action needed** - it works automatically once you push to GitHub.

### 3. Prettier Setup

**Already configured** with `.prettierrc` and `.prettierignore`.

**To use:**

```bash
# Format all code
npm run format

# Check formatting (used in CI)
npm run format:check
```

**Recommendation**: Add a pre-commit hook (optional):

```bash
npm install --save-dev husky lint-staged
```

Then add to `package.json`:

```json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx,json,css,md}": ["prettier --write", "eslint --fix"]
  }
}
```

### 4. Vercel Deployment Protection

In Vercel Dashboard:

1. Go to **Project Settings** → **Git**
2. Set **Production Branch** to `main`
3. Enable **"Protect Production Deployment"** (optional)
   - Or just rely on branch protection

**Result**: Only `main` branch deploys to production.

## Linting & Formatting

### Current Setup

- **ESLint**: ✅ Configured (Next.js + TypeScript)
  - File: `eslint.config.mjs`
  - Rules: Next.js core-web-vitals + TypeScript
  - **State of the art**: Yes, using latest ESLint 9 flat config

- **Prettier**: ✅ Configured
  - File: `.prettierrc`
  - **State of the art**: Yes, Prettier 3.x is current

### Why This Setup?

1. **ESLint 9 Flat Config**: Latest standard, cleaner than old `.eslintrc`
2. **Prettier**: Industry standard for formatting
3. **Separate concerns**: ESLint for code quality, Prettier for formatting
4. **CI enforcement**: Both checked automatically in PRs

## Testing Strategy

### Current Recommendation: **Skip Tests for Now**

**Why?**

- Most code is data display (low risk)
- TypeScript provides type safety
- Manual testing is sufficient
- Focus on features over tests

### Future Testing (When Needed)

**Unit Tests** (for utilities):

```bash
npm install --save-dev vitest @testing-library/react
```

**What to test:**

- `formatTime()`, `formatDate()` in `utils.ts`
- `createMemberId()` slug generation
- Data validation functions

**Component Tests** (for complex components):

- Button interactions
- Form submissions
- Conditional rendering

**E2E Tests** (for critical flows):

```bash
npm install --save-dev @playwright/test
```

**What to test:**

- Navigation flows
- Dynamic routes (`/board/[memberId]`)
- Form submissions

## Code Review Process

### For You (Maintainer)

1. **Review PRs**:
   - Check code quality
   - Verify data accuracy (for board members, etc.)
   - Ensure formatting is correct
   - Test locally if needed

2. **Approve or Request Changes**:
   - All CI checks must pass first
   - Review code for:
     - Type safety
     - Consistency with existing patterns
     - No console.logs
     - Proper error handling

3. **Merge**:
   - Only merge after approval
   - Use "Squash and merge" for clean history
   - Or "Rebase and merge" if you prefer

### For Contributors

1. Create feature branch
2. Make changes
3. Run `npm run format` before committing
4. Push and create PR
5. Wait for your review
6. Address feedback if needed
7. Merge after approval

## Data Updates Workflow

**For board members, partners, etc.:**

1. Contributor updates `src/constants/board_index.tsx` (or similar)
2. Creates PR with description: "Add new board member: [Name]"
3. You review:
   - ✅ All required fields present
   - ✅ Image file exists
   - ✅ TypeScript types correct
   - ✅ Follows existing format
4. Approve and merge

**This is safe because:**

- TypeScript catches type errors
- CI checks formatting
- You review before merge
- Easy to revert if needed

## Security Considerations

1. **Environment Variables**: Never commit `.env.local`
   - Already in `.gitignore`
   - Manage in Vercel dashboard

2. **API Keys**: Keep secure
   - Use Vercel environment variables
   - Rotate if exposed

3. **Dependencies**: Regular updates
   - Run `npm audit` periodically
   - Update dependencies carefully

## Best Practices Summary

✅ **Do:**

- Use feature branches
- Run `npm run format` before committing
- Write clear commit messages
- Test locally before PR
- Follow existing code patterns

❌ **Don't:**

- Push directly to `main`
- Commit console.logs
- Skip code review
- Break TypeScript types
- Ignore CI failures

## Troubleshooting

### CI Fails on Formatting

```bash
npm run format
git add .
git commit --amend --no-edit
git push --force-with-lease
```

### CI Fails on Linting

```bash
npm run lint:fix
git add .
git commit --amend --no-edit
git push --force-with-lease
```

### TypeScript Errors

```bash
npm run type-check
# Fix errors, then commit
```

## Next Steps

1. ✅ Install Prettier: `npm install`
2. ✅ Set up branch protection (follow `.github/BRANCH_PROTECTION.md`)
3. ✅ Test the workflow:
   - Create a test branch
   - Make a small change
   - Create PR
   - Verify CI runs
   - Approve and merge
4. ✅ Deploy to Vercel and protect production

---

**Questions?** Open an issue or contact: clutchdev.apps@gmail.com
