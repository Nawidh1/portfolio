# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark mode support
- 📱 Mobile-friendly navigation
- 🚀 Fast performance with Next.js
- 💾 Supabase integration for dynamic content
- ✨ Smooth animations and transitions
- 📧 Contact form with Supabase storage
- 🎯 SEO optimized

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (free tier works)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up Supabase:
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to SQL Editor and run the SQL from `supabase-schema.sql`
   - Copy your project URL and anon key from Settings > API

4. Create environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Fill in your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   ├── Experience.tsx      # Experience section
│   └── Contact.tsx         # Contact form
├── lib/
│   └── supabase/
│       ├── client.ts       # Browser Supabase client
│       └── server.ts       # Server Supabase client
└── supabase-schema.sql     # Database schema
```

## Customization

### Update Personal Information

1. **Hero Section**: Edit `components/Hero.tsx`
2. **About Section**: Edit `components/About.tsx`
3. **Skills**: Edit `components/Skills.tsx`
4. **Experience**: Edit `components/Experience.tsx`
5. **Contact Email**: Edit `components/Contact.tsx`

### Add Projects

Projects can be added in two ways:

1. **Via Supabase Dashboard**: Add entries directly to the `projects` table
2. **Via Code**: The Projects component includes sample data that you can modify

### Styling

The project uses Tailwind CSS. You can customize:
- Colors in `tailwind.config.ts` (if needed)
- Animations in `app/globals.css`
- Component styles in individual component files

## Supabase Setup

### Database Tables

1. **projects**: Stores portfolio projects
   - Fields: id, title, description, image_url, technologies, github_url, live_url, created_at, updated_at

2. **contact_messages**: Stores contact form submissions
   - Fields: id, name, email, message, created_at

### Row Level Security (RLS)

- Projects: Public read, authenticated write
- Contact Messages: Public insert, authenticated read

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to add these in your deployment platform:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## License

MIT License - feel free to use this portfolio for your own projects!

## Support

If you have any questions or need help, feel free to open an issue or contact me.
