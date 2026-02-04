-- Supabase Database Schema for Portfolio Website
-- Run this SQL in your Supabase SQL Editor

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  technologies TEXT[] DEFAULT '{}',
  github_url TEXT,
  live_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Policies for projects (public read, authenticated write)
CREATE POLICY "Projects are viewable by everyone" ON projects
  FOR SELECT USING (true);

CREATE POLICY "Projects are insertable by authenticated users" ON projects
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Projects are updatable by authenticated users" ON projects
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Projects are deletable by authenticated users" ON projects
  FOR DELETE USING (auth.role() = 'authenticated');

-- Policies for contact_messages (anyone can insert, authenticated can read)
CREATE POLICY "Contact messages are insertable by everyone" ON contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Contact messages are viewable by authenticated users" ON contact_messages
  FOR SELECT USING (auth.role() = 'authenticated');

-- Insert sample projects (optional)
INSERT INTO projects (title, description, technologies, github_url, live_url) VALUES
  (
    'E-Commerce Platform',
    'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
    ARRAY['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    'https://github.com',
    'https://example.com'
  ),
  (
    'Task Management App',
    'A collaborative task management application with real-time updates and team collaboration features.',
    ARRAY['React', 'Node.js', 'WebSocket', 'MongoDB'],
    'https://github.com',
    'https://example.com'
  ),
  (
    'Social Media Dashboard',
    'Analytics dashboard for social media metrics with data visualization and reporting features.',
    ARRAY['Next.js', 'Chart.js', 'Supabase', 'Tailwind CSS'],
    'https://github.com',
    'https://example.com'
  );
