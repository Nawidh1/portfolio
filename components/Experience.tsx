export default function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description:
        'Leading development of scalable web applications using React, Next.js, and Node.js. Collaborating with cross-functional teams to deliver high-quality products.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description:
        'Developed and maintained multiple web applications. Worked closely with designers and product managers to implement new features.',
      achievements: [
        'Built 10+ production applications',
        'Reduced load time by 50%',
        'Mentored junior developers',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2019 - 2020',
      description:
        'Created responsive and interactive user interfaces for various clients. Focused on user experience and modern design principles.',
      achievements: [
        'Delivered 20+ client projects',
        'Achieved 95% client satisfaction',
        'Learned modern React patterns',
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent reveal">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-12 reveal" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-4 border-emerald-500 dark:border-emerald-400 reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-emerald-500 dark:bg-emerald-400 rounded-full border-4 border-white dark:border-gray-900 animate-pulse-glow" />
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {exp.title}
                    </h3>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg text-teal-600 dark:text-teal-400 font-semibold mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
