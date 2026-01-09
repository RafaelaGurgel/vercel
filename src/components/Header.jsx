export default function Header() {
  function toggleTheme() {
    document.body.classList.toggle("light");
  }

  return (
    <header className="header">
      <div className="logo">
        <h1>Portfólio</h1> {/* só suas iniciais ou nome curto */}
      </div>

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
