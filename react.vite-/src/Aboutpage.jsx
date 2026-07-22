
function AboutPage() {
  return (
    <main className="bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

          {/* Left Side */}
          <div className="flex-1">

            <span className="text-cyan-400 uppercase tracking-widest">
              About Me
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
              Hi, I'm Ahmed
            </h1>

            <p className="mt-8 text-gray-300 leading-8 text-lg">
              I'm currently learning Web Development with React and
              Tailwind CSS. I enjoy building clean, responsive websites
              while improving my JavaScript skills every day.

              My goal is to become a Full Stack Web Developer and build
              modern applications that provide great user experiences.
            </p>

            <button className="mt-10 bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl font-semibold">
              Download CV
            </button>

          </div>

          {/* Right Side */}

          <div className="flex-1 flex justify-center">

            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800"
                alt="Profile"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Skills */}

      <section className="bg-slate-900 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            My Skills
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Git",
              "Responsive Design",
              "UI Design"
            ].map((skill) => (

              <div
                key={skill}
                className="bg-slate-800 rounded-xl py-6 text-center hover:bg-cyan-500 hover:text-black transition duration-300 font-semibold"
              >
                {skill}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-900 rounded-2xl p-10 text-center">

              <h2 className="text-5xl font-bold text-cyan-400">
                10+
              </h2>

              <p className="mt-4 text-gray-400">
                Projects Completed
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-10 text-center">

              <h2 className="text-5xl font-bold text-cyan-400">
                1+
              </h2>

              <p className="mt-4 text-gray-400">
                Years Learning
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-10 text-center">

              <h2 className="text-5xl font-bold text-cyan-400">
                ∞
              </h2>

              <p className="mt-4 text-gray-400">
                Passion for Coding
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 text-lg">
            I'm continuously learning and looking for opportunities
            to create modern and responsive web applications.
          </p>

          <button className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Contact Me
          </button>

        </div>

      </section>

    </main>
  );
}

export default AboutPage;