# AGENTS.md

Guidelines for agentic coding agents working in this Astro 5 + React + TypeScript + Tailwind CSS personal blog + website.

## Commands

- `pnpm dev` - Development server with theme watching and JSON generation
- `pnpm build` - Production build (includes theme generation and JSON generation)
- `pnpm check` - Astro type checking
- `pnpm format` - Code formatting with Prettier
- `pnpm generate-json` - Generate JSON files from content (run before dev/build)

## Code Style

### Imports

Use path aliases: `@/components/*`, `@/shortcodes/*`, `@/helpers/*`, `@/partials/*`, `@/*`
Group: third-party libraries first, then internal imports

### TypeScript

- Strict mode enabled
- Use interfaces for component props
- Type all parameters and return values
- Zod schemas for content validation (`src/content.config.ts`)

### Naming

- Components: PascalCase (`BlogCard.astro`, `SearchModal.tsx`)
- Files: kebab-case for content, PascalCase for components
- Variables/Functions: camelCase
- Constants: UPPER_SNAKE_CASE

### Formatting

- 2 spaces indentation
- No semicolons preferred
- LF line endings

## Astro Components

```astro
---
import config from "@/config/config.json";

export interface Props {
  title?: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<div class="bg-body dark:bg-darkmode-body">
  <h1>{title}</h1>
  <p>{description}</p>
</div>
```

## Content Structure

- Location: `src/content/` with Zod validation
- Required frontmatter: `title`, `description`, `draft`
- Optional: `meta_title`, `date`, `image`, `author`, `categories`, `tags`
- File naming: kebab-case `.md`/`.mdx`

## Common Patterns

### Data Fetching

```typescript
const posts = await getCollection("blog", ({ data }) => !data.draft);
```

### Images

```astro
<ImageMod src={image} alt={title} width={445} height={230} format="webp" />
```

### Dates

```typescript
{
  dateFormat(date);
} // Uses @/lib/utils/dateFormat
```

## Styling

- Tailwind CSS utility classes
- Dark mode with `dark:` prefix
- Custom CSS in `src/styles/`
- Mobile-first responsive design

## Performance

- Optimize images with Astro Image component
- Use `format="webp"` for compression
- Lazy load with `client:*` directives
- Import only needed components

## Development Workflow

1. Run `pnpm generate-json` after content changes
2. Use `pnpm dev` for development
3. Run `pnpm check` before committing
4. Use `pnpm format` for code style
5. Test with `pnpm build` before deployment

## Notes

- Uses pnpm package manager
- Theme generation runs automatically
- JSON generation required for content availability
- Dark mode via CSS classes and localStorage
