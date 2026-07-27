
function HomePage() {
  return (
    <>
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-r from-slate-900 to-slate-700 text-white px-6">

      <h1 className="text-6xl font-extrabold mb-5 text-center">
        Welcome to My Portfolio
      </h1>

      <p className="text-xl text-gray-300 max-w-2xl text-center mb-8">
        This homepage was built using React, Vite and Tailwind CSS.
        I'm learning modern web development one project at a time.
      </p>

      <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition duration-300">
        Explore
      </button>

    </section>

    
     <section className="py-20 bg-gray-100">

      <h2 className="text-4xl font-bold text-center mb-12">
        What I'm Learning
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-8">

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-4">
            React
          </h3>

          <p>
            Building reusable UI components with JSX.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-4">
            Tailwind CSS
          </h3>

          <p>
            Styling applications with utility classes.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-4">
            Responsive Design
          </h3>

          <p>
            Creating layouts that adapt to every screen.
          </p>
        </div>

      </div>

    </section>
    </>
  );
}

export default HomePage;