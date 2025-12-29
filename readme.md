# Alex Tacescu - Personal Website

My personal website, project showcase, and blog! Built with Astro, TailwindCSS, and TypeScript.

**Live Site:** [alextac.com](https://alextac.com)

## About

This website showcases my work as a Lead Flight Software Engineer at Inversion Space, with 14+ years of experience in robotics and 5+ years in the space industry. The site includes:

- **Projects** - Showcasing robotics and software projects including Project Maverick, SmallKat, and more
- **Awards** - Recognition including appearances on The Tonight Show, Intel ISEF awards, and NASA competitions
- **Blog** - Technical articles on development tools, 3D printing, and operating systems
- **About** - My background, experience, and journey in engineering

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [React](https://reactjs.org/) - For interactive components
- [MDX](https://mdxjs.com/) - Markdown with JSX support

## Getting Started

### Prerequisites

- Node.js v20.10+
- pnpm or npm

### Development Commands

```bash
pnpm run dev      # Start dev server with hot reload
pnpm run build    # Build for production
pnpm run preview  # Preview production build
pnpm run check    # Type check Astro files
pnpm run format   # Format code with Prettier
pnpm install    # Install dependencies

# Or use npm instead of pnpm for all commands
```

## Project Structure

```
website/
├── public/
│   └── images/         # Static images
├── src/
│   ├── config/         # Site configuration (menu, social, etc.)
│   ├── content/        # Content collections (blog, projects, awards)
│   ├── layouts/        # Layout components
│   ├── pages/          # Page routes
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro configuration
└── package.json
```

## Content Management

Content is managed through Markdown/MDX files in the `src/content/` directory:

- `blog/` - Blog posts
- `projects/` - Project showcases
- `awards/` - Award and recognition entries
- `about/` - About page content
- `homepage/` - Homepage content

## Configuration

Site configuration is stored in `src/config/`:

- `config.json` - Site metadata, settings, and SEO
- `menu.json` - Navigation structure
- `social.json` - Social media links

## License

MIT License - See [LICENSE](./LICENSE) for details.

## Contact

- **Twitter/X:** [@alextac98](https://twitter.com/alextac98)
- **GitHub:** [alextac98](https://github.com/alextac98)
- **LinkedIn:** [Alex Tacescu](https://www.linkedin.com/in/alex-tacescu/)
- **YouTube:** [Alex Tacescu](https://www.youtube.com/alextacescu)
