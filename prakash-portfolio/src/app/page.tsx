import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import { About } from "../Components/About";
import { Skills } from "../Components/Skills";
import { Experience } from "../Components/Experience";
import { Projects } from "../Components/Projects";
import { Contact } from "../Components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/30 text-slate-200">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="bg-gradient-to-r from-blue-800 via-blue-850 to-purple-800">
        <div className="mx-auto max-w-5xl px-4 py-6 text-[11px] text-white">
          © {new Date().getFullYear()} Prakash Maddi · Portfolio design inspired by LookOut AI.
        </div>
      </footer>
    </main>
  );
}

