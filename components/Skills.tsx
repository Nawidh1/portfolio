export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      description: 'Building user interfaces and web pages',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      description: 'Server-side development and databases',
      skills: ['Node.js', 'Supabase', 'SQL', 'REST APIs', 'PHP'],
    },
    {
      title: 'Tools',
      description: 'Development tools and workflows',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'npm'],
    },
  ]

  return (
    <section
      id="skills"
      className="py-32 bg-neutral-900 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 reveal">
          <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
            What I&apos;m <span className="font-bold">Learning</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-neutral-950 border border-neutral-800 p-10 h-full hover:border-amber-600/50 transition-colors">
                <div className="text-6xl font-light text-neutral-800 group-hover:text-amber-600/30 transition-colors mb-8">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {category.title}
                </h3>
                <p className="text-neutral-500 mb-8 text-sm">
                  {category.description}
                </p>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between border-b border-neutral-800 pb-3 group/item"
                    >
                      <span className="text-neutral-400 group-hover/item:text-white transition-colors">
                        {skill}
                      </span>
                      <span className="w-2 h-2 bg-amber-600 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
