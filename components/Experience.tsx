export default function Experience() {
  const education = [
    {
      title: 'Software Development',
      institution: 'MBO 4',
      period: '2022 — Present',
      description: 'Studying Application Development with focus on building web applications and software solutions.',
      highlights: ['Web Development', 'Database Design', 'Programming Fundamentals', 'Team Projects'],
    },
  ]

  const learning = [
    {
      title: 'Frontend Development',
      description: 'Building modern user interfaces with React, Next.js, and Tailwind CSS.',
    },
    {
      title: 'Backend Development',
      description: 'Learning server-side programming with Node.js and database management.',
    },
    {
      title: 'Version Control',
      description: 'Using Git and GitHub for code management and collaboration.',
    },
  ]

  return (
    <section
      id="education"
      className="py-32 bg-gradient-to-b from-neutral-950 via-emerald-950/15 to-neutral-950 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Education */}
        <div className="grid lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-4 reveal">
            <p className="text-emerald-500 uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Education
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              My
              <br />
              <span className="font-bold">Journey</span>
            </h2>
          </div>

          <div className="lg:col-span-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group reveal"
              >
                <div className="py-12 border-t border-neutral-800">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-500 transition-colors">
                        {edu.title}
                      </h3>
                      <p className="text-emerald-600 mt-1">{edu.institution}</p>
                    </div>
                    <span className="text-neutral-500 text-sm font-mono shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-neutral-400 mb-6 max-w-2xl">
                    {edu.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3 text-neutral-500 text-sm">
                        <span className="w-1 h-1 bg-emerald-600" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I'm Learning */}
        <div className="reveal">
          <div className="text-center mb-16">
            <p className="text-emerald-500 uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Growth
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              What I&apos;m <span className="font-bold">Focusing On</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learning.map((item, index) => (
              <div
                key={index}
                className="border-t border-neutral-800 pt-8 reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
