


function Header() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-5 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-cyan-400">
        DevPortfolio
      </h1>

      <ul className="flex gap-8">
        <li className="hover:text-cyan-400 cursor-pointer">
          Home
        </li>

        <li className="hover:text-cyan-400 cursor-pointer">
          Projects
        </li>

        <li className="hover:text-cyan-400 cursor-pointer">
          Contact
        </li>
      </ul>

    </nav>
  )
}

export default Header
