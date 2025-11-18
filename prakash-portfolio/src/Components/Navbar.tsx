export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-white backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="text-sm font-semibold tracking-wide bg-linear-to-r from-blue-800 via-loAccent to-purple-800 bg-clip-text text-transparent">
          Prakash Maddi
        </div>
        <div className="flex gap-4 text-xs sm:text-sm font-semibold text-black ">
          <a href="#about" className="  hover:bg-linear-to-r hover:from-blue-800 hover:via-loAccent hover:to-purple-800 hover:bg-clip-text hover:text-transparent transition">About</a>
          <a href="#skills" className=" hover:bg-linear-to-r hover:from-blue-800 hover:via-loAccent hover:to-purple-800 hover:bg-clip-text hover:text-transparent transition">Skills</a>
          <a href="#experience" className=" hover:bg-linear-to-r hover:from-blue-800 hover:via-loAccent hover:to-purple-800 hover:bg-clip-text hover:text-transparent transition">Experience</a>
          <a href="#projects" className=" hover:bg-linear-to-r hover:from-blue-800 hover:via-loAccent hover:to-purple-800 hover:bg-clip-text hover:text-transparent transition">Projects</a>
          <a href="#contact" className=" hover:bg-linear-to-r hover:from-blue-800 hover:via-loAccent hover:to-purple-800 hover:bg-clip-text hover:text-transparent transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}