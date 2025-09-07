import { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="fixed w-[95%] top-3 left-1/2 -translate-x-1/2 z-50 mt-3">
      <div className="flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-md bg-white/30 shadow-md">
        <div className="font-bold text-xl text-gray-800">D9</div>

        <nav className="flex space-x-6">
          <a
            href="#home"
            className={`transition-colors ${
              activeSection === "home"
                ? "text-blue-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            Home
          </a>
          <a
            href="#skills"
            className={`transition-colors ${
              activeSection === "skills"
                ? "text-blue-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`transition-colors ${
              activeSection === "projects"
                ? "text-blue-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            Projects
          </a>
        </nav>

        <button className="p-2 rounded-full hover:bg-white/50 transition">
          <MessageSquare className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
        </button>
      </div>
    </header>
  );
}
