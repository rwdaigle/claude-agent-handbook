# Claude Agent Handbook

A comprehensive guide to building agentic systems with the Claude Agent SDK.

**[Read the handbook →](https://claudeagenthandbook.com)**

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/rwdaigle/claude-agent-handbook.git
cd claude-agent-handbook

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

This starts both the Eleventy development server and Tailwind CSS watcher. The site will be available at `http://localhost:8080` with live reload enabled.

## Contributing Content

We welcome contributions! Here's how to add or update content.

### Adding a New Page

1. **Create a Markdown file** in the appropriate section folder:

   ```bash
   # Example: adding a page to the basics section
   touch src/basics/my-new-page.md
   ```

2. **Add frontmatter** with title and navigation:

   ```markdown
   ---
   title: My New Page
   eleventyNavigation:
     key: My New Page
     parent: Basics
     order: 2
   ---

   Your content here...
   ```

Submit a PR with your changes to be considered for inclusion. It is always best to raise a GH issue first for discussion before contributing a large amount of content in case there are philosphical differences that should be considered before commencing the writing process.

### Content Guidelines

- Write in clear, concise language
- Include practical code examples where relevant
- Keep pages focused on a single topic

## Tech Stack

- [Eleventy](https://www.11ty.dev/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Nunjucks](https://mozilla.github.io/nunjucks/) - Templating

## License

MIT
