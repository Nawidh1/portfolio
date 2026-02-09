'use client'

export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-neutral-950 via-emerald-950/15 to-neutral-950 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Title */}
          <div className="reveal text-center lg:text-left">
            <p className="text-emerald-500 uppercase tracking-[0.3em] text-sm font-medium mb-4">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Passionate about
              <br />
              <span className="font-bold">software</span>
              <br />
              <span className="font-bold">development</span>
            </h2>

            {/* Profile Photo - Mobile/Tablet */}
            <div className="mt-8 lg:hidden flex justify-center">
              <img
                src="/profile2.jpg"
                alt="Nawid Haidari"
                className="max-w-[85vw] max-h-[50vh] w-auto h-auto object-contain border-4 border-neutral-600 rounded-lg block"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="border-t border-neutral-800 pt-6">
                <div className="text-4xl font-light text-emerald-500">MBO 4</div>
                <div className="text-sm text-neutral-500 mt-2 uppercase tracking-wider">Year 3</div>
              </div>
              <div className="border-t border-neutral-800 pt-6">
                <div className="text-4xl font-light text-emerald-500">SD</div>
                <div className="text-sm text-neutral-500 mt-2 uppercase tracking-wider">Software Dev</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 reveal text-center lg:text-left">
            {/* Profile Photo - Desktop */}
            <div className="hidden lg:block mb-8">
              <img
                src="/profile.png"
                alt="Nawid Haidari"
                className="max-w-sm max-h-[60vh] w-auto h-auto object-contain border-4 border-neutral-600 rounded-lg block"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
            </div>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Hi, I&apos;m Nawid Haidari — a Software Development student at MBO 4, 
              currently in my third year. I&apos;m focused on becoming a skilled 
              application developer.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              I&apos;m learning to build web applications using modern technologies 
              and frameworks. Every project is an opportunity to improve my skills 
              and learn something new.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              I enjoy solving problems through code and creating applications that 
              are both functional and user-friendly. I&apos;m always eager to take on 
              new challenges and expand my knowledge.
            </p>

            <div className="pt-8 border-t border-neutral-800">
              <p className="text-neutral-500 text-sm uppercase tracking-wider mb-4">Currently Learning</p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-neutral-800 text-neutral-400 text-sm hover:border-emerald-600 hover:text-emerald-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
