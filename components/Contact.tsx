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
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-emerald-500 uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Neem contact op
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
            Laten we <span className="font-bold">praten</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Interesse in samenwerken of heb je een vraag?
            Stuur gerust een bericht — ik hoor graag van je.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information */}
          <div className="reveal flex">
            <div className="bg-gradient-to-br from-neutral-900/50 via-emerald-950/10 to-neutral-900/50 border border-emerald-800/30 rounded-2xl p-8 backdrop-blur-sm flex flex-col w-full">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center lg:text-left">Contactgegevens</h3>
              
              <div className="space-y-6 flex-1">
                {/* Email */}
                <a
                  href="mailto:nawid@example.com"
                  className="flex flex-col lg:flex-row items-center lg:items-start gap-4 p-4 rounded-lg bg-neutral-800/30 hover:bg-neutral-800/50 border border-transparent hover:border-emerald-600/30 transition-all group text-center lg:text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-600/20 flex items-center justify-center group-hover:bg-emerald-600/30 transition-colors">
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">E-mail</p>
                    <p className="text-white group-hover:text-emerald-400 transition-colors">nawid@example.com</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 p-4 rounded-lg bg-neutral-800/30 border border-transparent text-center lg:text-left">
                  <div className="w-12 h-12 rounded-lg bg-emerald-600/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Locatie</p>
                    <p className="text-white">Nederland</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-neutral-800">
                  <p className="text-neutral-500 text-xs uppercase tracking-wider mb-4 text-center lg:text-left">Social media</p>
                  <div className="flex gap-4 justify-center lg:justify-start">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-neutral-800/30 hover:bg-emerald-600/20 border border-transparent hover:border-emerald-600/30 flex items-center justify-center transition-all group"
                    >
                      <svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal flex">
            <div className="bg-gradient-to-br from-neutral-900/50 via-emerald-950/10 to-neutral-900/50 border border-emerald-800/30 rounded-2xl p-8 backdrop-blur-sm flex flex-col w-full">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center lg:text-left">Stuur een bericht</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-neutral-400 text-sm font-medium mb-2"
                  >
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800/30 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    placeholder="Je naam"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-neutral-400 text-sm font-medium mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800/30 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    placeholder="jouw@email.nl"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-neutral-400 text-sm font-medium mb-2"
                  >
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-neutral-800/30 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-all resize-none"
                    placeholder="Vertel over je project of zeg gewoon hallo..."
                  />
                </div>

                <div className="mt-auto pt-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-emerald-600 text-white font-medium text-sm uppercase tracking-wider rounded-lg hover:bg-emerald-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30"
                  >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verzenden...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Bericht verzonden!
                    </>
                  ) : (
                    <>
                      Verstuur bericht
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                  </button>
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 text-sm text-center">
                      Er ging iets mis bij het verzenden. Probeer het opnieuw.
                    </p>
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                    <p className="text-emerald-400 text-sm text-center">
                      Bedankt! Je bericht is succesvol verzonden.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
