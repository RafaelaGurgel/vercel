import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import ContactLinks from "../components/ContactLinks";
import { FaGraduationCap, FaRocket } from "react-icons/fa";

export default function Home() {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
  ];

  const otherSkills = [
    "Responsive Design",
    "API REST",
    "Git & GitHub",
  ];

  return (
    <main className="home">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-card">
          <img
            src="https://github.com/rafaelagurgel.png"
            alt="Foto de perfil de Rafaela Gurgel"
          />

          <h1>Rafaela Gurgel</h1>
          <h2>Desenvolvedora Frontend</h2>

          <p>
            Desenvolvedora Frontend focada em{" "}
            <strong>React, JavaScript e TypeScript</strong>, com experiência em
            criação de interfaces modernas, responsivas e consumo de APIs.
          </p>

          <a href="#projects" className="hero-cta">
            Ver projetos
          </a>
        </div>
      </section>

      {/* ================= SOBRE ================= */}
      <section id="about" className="about-section">
        <header className="section-header">
          <h3>
            <FaGraduationCap /> Sobre
          </h3>
        </header>

        <div className="section-content">
          <p>
            Formação em <strong>Desenvolvimento Full Stack pela Infinity School</strong>,
            com inglês avançado. Atuação focada em Frontend, priorizando código
            limpo, reutilização de componentes e boa experiência do usuário.
          </p>

          <div className="skills">
            <h4>Frontend</h4>
            <div className="skills-grid">
              {frontendSkills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            <h4>Outros conhecimentos</h4>
            <div className="skills-grid">
              {otherSkills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <p>
            Buscando oportunidade como{" "}
            <strong>Desenvolvedora Frontend Júnior</strong>, com interesse em
            projetos reais, aprendizado contínuo e crescimento técnico.
          </p>
        </div>
      </section>

      {/* ================= PROJETOS ================= */}
      <section id="projects" className="projects-section">
        <header className="section-header">
          <h3>
            <FaRocket /> Projetos
          </h3>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      {/* ================= CONTATO ================= */}
      <section id="contact" className="contact-section">
        <header className="section-header">
          <h3>Contato</h3>
        </header>

        <div className="section-content">
          <p>
            Disponível para oportunidades, freelas ou colaborações em projetos
            Frontend.
          </p>

          <ContactLinks />
        </div>
      </section>
    </main>
  );
}
