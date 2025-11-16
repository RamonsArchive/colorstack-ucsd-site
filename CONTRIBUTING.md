# Contributing to ColorStack @ UCSD Website

Thank you for contributing to the ColorStack @ UCSD website! This document outlines the process for contributing changes.

## Getting Started

1. **Fork the repository** (if you don't have write access)
2. **Clone your fork** or the main repository
3. **Create a new branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

## Development Workflow

### Before You Start

1. Make sure you're on the latest `main` branch:

   ```bash
   git checkout main
   git pull origin main
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Making Changes

1. **Follow the code style**:
   - Run `npm run format` before committing to auto-format your code
   - Follow existing patterns and conventions in the codebase
   - Use TypeScript types properly

2. **Test your changes**:
   - Run `npm run dev` to test locally
   - **Run all checks before committing**: `npm run check`
     - This runs: lint + format check + type check
   - Or run individually:
     - `npm run lint` - Check code quality
     - `npm run format:check` - Check formatting
     - `npm run type-check` - Check TypeScript types (catches missing imports!)
   - Verify build works: `npm run build`

3. **Data updates** (for board members, events, etc.):
   - Update the appropriate file in `src/constants/`
   - Follow the existing data structure
   - Ensure all required fields are present
   - Use proper TypeScript types

### Committing Changes

1. **Stage your changes**:

   ```bash
   git add .
   ```

2. **Format your code**:

   ```bash
   npm run format
   ```

3. **Commit with a clear message**:

   ```bash
   git commit -m "feat: add new board member"
   # or
   git commit -m "fix: correct typo in footer"
   # or
   git commit -m "docs: update README with new features"
   ```

   **Commit message format:**
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting)
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

## Pull Request Process

### Before Submitting

1. **Ensure all checks pass**:
   - ✅ Linting passes (`npm run lint`)
   - ✅ Formatting is correct (`npm run format`)
   - ✅ TypeScript compiles (`npm run build`)
   - ✅ No console.logs in production code
   - ✅ All new code follows existing patterns

2. **Update documentation** if needed:
   - README.md for major changes
   - Code comments for complex logic

3. **Test thoroughly**:
   - Test on different screen sizes (mobile, tablet, desktop)
   - Check that all links work
   - Verify images load correctly

### Creating the Pull Request

1. **Push your branch**:

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request** on GitHub:
   - Use a clear, descriptive title
   - Fill out the PR template (if available)
   - Describe what changes you made and why
   - Reference any related issues

3. **Wait for review**:
   - At least one reviewer (preferably the maintainer) must approve
   - Address any feedback or requested changes
   - All CI checks must pass before merging

### PR Requirements

- ✅ All CI checks must pass
- ✅ At least one approval from a maintainer
- ✅ No merge conflicts with `main`
- ✅ Code follows project conventions
- ✅ No breaking changes (or clearly documented)

## Code Style Guidelines

### TypeScript

- Use TypeScript types for all props and functions
- Avoid `any` types - use proper types or `unknown`
- Export types from `src/lib/GlobalTypes.ts` when reusable

### React Components

- Use functional components with hooks
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks or utilities
- Use meaningful prop and variable names

### Styling

- Use Tailwind CSS classes
- Follow the existing design system
- Use consistent spacing (gap, padding)
- Maintain responsive design (mobile-first)

### File Organization

- Components in `src/components/`
- Constants/data in `src/constants/`
- Utilities in `src/lib/utils.ts`
- Types in `src/lib/GlobalTypes.ts`

## Adding New Data

### Board Members

Edit `src/constants/board_index.tsx`:

- Add member to appropriate board section
- Include all required fields (name, title, image, etc.)
- Use `createMemberId()` utility for the `id` field

### Events

Events are fetched from Google Calendar API. For manual events, update the calendar directly.

### Partners/Companies

Edit `src/constants/home_index.tsx`:

- Add to `WhereWeGoneData.logos` or `PartnersData.logos`
- Include logo file in appropriate `public/` folder
- Update `logoPaths` mapping

## Questions?

- Open an issue for bugs or feature requests
- Contact the maintainer: clutchdev.apps@gmail.com
- Check existing issues before creating new ones

Thank you for contributing! 🎉
