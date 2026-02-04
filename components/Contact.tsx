'use client'

import { useState, FormEvent } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const supabase = createClient()
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ])

      if (error) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-32 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="reveal">
            <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
              Let&apos;s
              <br />
              <span className="font-bold">connect</span>
            </h2>
            
            <p className="text-neutral-400 mb-12 max-w-md">
              Interested in working together or have a question? 
              Feel free to reach out — I&apos;d love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="border-t border-neutral-800 pt-8">
                <p className="text-neutral-500 text-sm uppercase tracking-wider mb-2">Email</p>
                <a href="mailto:nawid@example.com" className="text-white text-xl hover:text-amber-500 transition-colors">
                  nawid@example.com
                </a>
              </div>
              <div className="border-t border-neutral-800 pt-8">
                <p className="text-neutral-500 text-sm uppercase tracking-wider mb-2">Location</p>
                <p className="text-white text-xl">Netherlands</p>
              </div>
              <div className="border-t border-neutral-800 pt-8">
                <p className="text-neutral-500 text-sm uppercase tracking-wider mb-4">Social</p>
                <div className="flex gap-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-neutral-500 text-sm uppercase tracking-wider mb-3"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-b border-neutral-800 text-white placeholder-neutral-600 focus:border-amber-600 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-neutral-500 text-sm uppercase tracking-wider mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-b border-neutral-800 text-white placeholder-neutral-600 focus:border-amber-600 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-neutral-500 text-sm uppercase tracking-wider mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-0 py-4 bg-transparent border-b border-neutral-800 text-white placeholder-neutral-600 focus:border-amber-600 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-5 bg-amber-600 text-neutral-950 font-medium text-sm uppercase tracking-wider hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading'
                  ? 'Sending...'
                  : status === 'success'
                    ? 'Message Sent!'
                    : 'Send Message'}
              </button>

              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">
                  There was an error. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
