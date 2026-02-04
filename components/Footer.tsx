export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-2xl font-light tracking-widest text-white">
            NAWID<span className="font-bold">H</span>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-amber-500 transition-colors text-sm uppercase tracking-wider"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-amber-500 transition-colors text-sm uppercase tracking-wider"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-neutral-600 text-sm">
            &copy; {currentYear} Nawid Haidari
          </p>
        </div>
      </div>
    </footer>
  )
}
