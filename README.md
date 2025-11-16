# ColorStack @ UCSD Website

Official website for the ColorStack chapter at UC San Diego, a student organization dedicated to supporting Black and Hispanic software engineering students.

## Mission

ColorStack at UCSD is one chapter of a national nonprofit dedicated to increasing the number of Black and Latinx Computer Science graduates entering top tech companies. Our campus community emphasizes **community, excellence, and impact**, giving students direction, support, and opportunities to grow so they can uplift others once they graduate.

We provide mentorship, technical workshops, career development resources, and a supportive community to help our members succeed in their academic and professional journeys.

## Affiliation

Part of the [ColorStack National organization](https://colorstack.org) - a nonprofit dedicated to increasing the number of Black and Latinx Computer Science graduates entering the tech industry.

## Developer

**Ramon Mitchell**  
📧 Email: [clutchdev.apps@gmail.com](mailto:clutchdev.apps@gmail.com)  
💼 LinkedIn: [linkedin.com/in/ramonmnm100](https://www.linkedin.com/in/ramonmnm100)

## Tech Stack

- **Framework**: Next.js 16 (App Router) with React 19
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript 5
- **Build Tool**: Turbopack
- **API Integration**: Google Calendar API (googleapis)
- **Font**: Kumbh Sans (Variable Font, WOFF2)

## Project Structure

```
colorstack_site/
├── public/
│   ├── Assets/
│   │   ├── Background/        # SVG backgrounds
│   │   ├── Icons/             # Social media icons
│   │   └── Logos/             # Organization logos
│   ├── Board/                 # Board member images
│   ├── Partners/              # Partner company logos
│   └── WhereWeGone/           # Company logos
│
├── src/
│   ├── app/
│   │   ├── (pages)/           # Route groups
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── about/         # About page
│   │   │   ├── board/         # Board page + dynamic member routes
│   │   │   ├── joinus/        # Join Us page
│   │   │   └── schedule/      # Schedule page
│   │   ├── fonts/             # Custom fonts
│   │   ├── globals.css        # Global styles & Tailwind config
│   │   └── layout.tsx         # Root layout
│   │
│   ├── components/            # React components
│   │   ├── BoardCard.tsx      # Board member card
│   │   ├── Button.tsx         # Reusable button component
│   │   ├── EventCard.tsx      # Calendar event card
│   │   ├── FAQCard.tsx        # FAQ card component
│   │   ├── Footer.tsx         # Site footer
│   │   ├── GenericHero.tsx    # Reusable hero section
│   │   ├── HomeHero.tsx       # Home page hero
│   │   ├── InfiniteScrollLogos.tsx  # Animated logo scroll
│   │   ├── MobileMenu.tsx     # Mobile navigation menu
│   │   ├── Navbar.tsx         # Navigation bar
│   │   └── Sidebar.tsx        # Desktop sidebar
│   │
│   ├── constants/             # Data & configuration
│   │   ├── about_index.tsx    # About page data
│   │   ├── board_index.tsx    # Board member data
│   │   ├── footer_index.tsx   # Footer data
│   │   ├── home_index.tsx     # Home page data
│   │   ├── joinus_index.tsx   # Join Us page data
│   │   └── sidebar_index.tsx  # Sidebar navigation data
│   │
│   └── lib/
│       ├── actions/
│       │   └── calander.ts    # Google Calendar API integration
│       ├── GlobalTypes.ts     # TypeScript type definitions
│       └── utils.ts           # Utility functions
│
└── convert-font.sh            # Font conversion script
```

## Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Dynamic Routing**: Next.js App Router with dynamic member profiles (`/board/[memberId]`)
- **Google Calendar Integration**: Server-side calendar event fetching
- **Animated Components**: Custom infinite scroll animations, wave backgrounds
- **Type Safety**: Full TypeScript implementation with custom types
- **Performance Optimized**: Next.js Image optimization, font optimization (WOFF2)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Variables

Create a `.env.local` file:

```env
GOOGLE_API_KEY=your_google_api_key
GOOGLE_CALENDAR_ID=your_calendar_id
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Design System

- **Colors**: Custom color palette defined in `globals.css` with primary (gold), secondary (gray), and background colors
- **Typography**: Kumbh Sans variable font
- **Spacing**: Consistent gap and padding system using Tailwind utilities
- **Components**: Reusable card components with consistent styling

## Project Assessment

### Scalability: 7/10

**Strengths:**

- Good component separation and reusability
- TypeScript types provide structure
- Constants-based data management
- Dynamic routing for member profiles

**Areas for Improvement:**

- Some components could be more generic (e.g., board-specific components)
- Data fetching could use React Query/SWR for better caching
- No state management library (may need one as app grows)
- Limited error boundaries

### Readability: 8/10

**Strengths:**

- Clear file structure and naming conventions
- Consistent component patterns
- Good use of TypeScript for type safety
- Comments where needed

**Areas for Improvement:**

- Some components are quite long (could be split)
- Magic numbers in styles (could use constants)
- Some repetitive code patterns

### Code Quality: 7/10

**Strengths:**

- TypeScript throughout
- Modern React patterns (hooks, server components)
- Good separation of concerns
- Custom utilities for common operations

**Areas for Improvement:**

- Some console.logs left in production code
- Error handling could be more robust
- Some type assertions that could be stricter
- Missing unit tests

### Professionalism: 8/10

**Strengths:**

- Clean, modern UI design
- Responsive and accessible
- Good use of Next.js features
- Professional component structure

**Areas for Improvement:**

- Missing error pages (404, 500)
- No loading states for async operations
- Limited accessibility features (ARIA labels, keyboard navigation)
- No testing infrastructure

### Advanced Techniques: 6/10

**Strengths:**

- Custom infinite scroll with dynamic calculations
- Server actions for API calls
- Custom CSS animations
- Dynamic routing patterns

**Areas for Improvement:**

- Could use more advanced React patterns (context, reducers)
- No performance monitoring/analytics
- Limited optimization techniques (code splitting, lazy loading)
- No CI/CD pipeline

## Overall Developer Level Assessment

**Level: Junior to Mid-Level Developer**

### Strengths:

- Solid understanding of React and Next.js fundamentals
- Good TypeScript usage
- Clean component architecture
- Modern tooling and practices

### Growth Areas:

- Testing (unit, integration, e2e)
- Performance optimization techniques
- Error handling and edge cases
- Advanced state management
- DevOps/CI-CD practices

### Honest Assessment:

This is **above average** for a junior developer and shows good progress toward mid-level. The codebase demonstrates:

- Understanding of modern React patterns
- Good project organization
- Type safety awareness
- Ability to implement complex UI features

However, it's not yet at a senior level due to:

- Missing testing infrastructure
- Limited error handling
- Some code duplication
- No performance monitoring

**Recommendation**: Focus on adding tests, improving error handling, and learning performance optimization techniques to move toward mid-level.

---

Built with ❤️ for the ColorStack @ UCSD community
