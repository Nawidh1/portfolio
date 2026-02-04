export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-lg">
                  JD
                </div>
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl" />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m a passionate full-stack developer with a love for
                creating innovative web applications. With expertise in modern
                frameworks and technologies, I bring ideas to life through clean
                code and thoughtful design.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in web development started with a curiosity about how
                things work on the internet. Over the years, I&apos;ve honed my
                skills in both frontend and backend development, always staying
                up-to-date with the latest trends and best practices.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    5+ Years
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Experience
                  </p>
                </div>
                <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">
                    50+ Projects
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Completed
                  </p>
                </div>
                <div className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                  <span className="text-pink-600 dark:text-pink-400 font-semibold">
                    Full Stack
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
