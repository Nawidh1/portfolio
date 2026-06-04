# Setup Guide

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SITE_URL=https://werk-nawid-dev.nl
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

See `.env.example` for a full template.

### How to get your Supabase credentials:

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to **Settings** > **API**
4. Copy the **Project URL** and **anon/public key**
5. Paste them into your `.env.local` file

## Database Setup

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy and paste the contents of `supabase-schema.sql`
3. Click **Run** to create the tables and set up Row Level Security

## Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel + custom domain

### 1. Push code to GitHub

```bash
git add .
git commit -m "Add Brasserie Hama project and prepare Vercel deploy"
git push origin main
```

### 2. Import on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. **Add New** → **Project** → import `Nawidh1/portfolio`
3. Framework preset: **Next.js** (auto-detected)
4. Under **Environment Variables**, add (for Production, Preview, and Development):

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://werk-nawid-dev.nl` (your domain, no trailing `/`) |
| `NEXT_PUBLIC_SUPABASE_URL` | From Supabase → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | From Supabase → Settings → API |

5. Click **Deploy**

### 3. Connect your domain in Vercel

1. Open the project → **Settings** → **Domains**
2. Add `werk-nawid-dev.nl` and `www.werk-nawid-dev.nl`
3. Set one as primary; Vercel will redirect the other automatically

### 4. DNS at your domain registrar

Where you bought the domain (e.g. TransIP, Namecheap, Cloudflare), add:

| Type | Name | Value |
|------|------|--------|
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

**Or** use Vercel nameservers (shown in Domains settings) if your registrar supports changing NS records.

DNS can take up to 24–48 hours; often it works within an hour.

### 5. Verify

- Vercel dashboard shows **Valid Configuration** for the domain
- Visit `https://werk-nawid-dev.nl` — portfolio loads with HTTPS
- Check `/projects` and `/sitemap.xml`

