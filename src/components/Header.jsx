import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  function toggleTheme() {
    document.body.classList.toggle("light");
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <h1 className="logo">Portfólio</h1>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Alternar tema"
      >
        🌙 / ☀️
      </button>
    </header>
  );
}
