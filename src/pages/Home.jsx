import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import GithubAvatar from "../components/GithubAvatar";
import ContactLinks from "../components/ContactLinks";
import { FaCode, FaGraduationCap, FaRocket } from "react-icons/fa";

export default function Home() {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Responsive Design",
  ];

  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-card">
          <img
            src="https://github.com/rafaelagurgel.png"
            alt="Rafaela Gurgel"
          />
          <h1>Rafaela Gurgel</h1>
          <h2>Desenvolvedora Frontend</h2>
          <p>
            Desenvolvo interfaces modernas com{" "}
            <strong>React, JavaScript e TypeScript</strong>, focada em
            performance, código limpo e experiência do usuário.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h3>
            <FaGraduationCap /> Sobre
          </h3>
        </div>

        <div className="section-content">
          <p>
            Formada em <strong>Full Stack pela Infinity School</strong> com
            inglês avançado. Apaixonada por criar soluções web intuitivas e
            eficientes.
          </p>

          <div className="skills">
            <h4>Tecnologias</h4>
            <div className="skills-grid">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <p>
            Buscando{" "}
            <strong>oportunidade como Desenvolvedora Frontend Júnior</strong>{" "}
            para contribuir com projetos reais e evoluir profissionalmente.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h3>
            <FaRocket /> Projetos
          </h3>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h3>Contato</h3>
        </div>

        <div className="section-content">
          <p>Disponível para oportunidades e colaborações.</p>
          <ContactLinks />
        </div>
      </section>
    </main>
  );
}
