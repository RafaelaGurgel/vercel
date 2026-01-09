import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import GithubAvatar from "../components/GithubAvatar";
import ContactLinks from "../components/ContactLinks";

export default function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <GithubAvatar username="rafaelagurgel" />

        <h1>Rafaela Gurgel</h1>
        <h2>Desenvolvedora Frontend</h2>

        <p>
          Crio interfaces modernas usando React, JavaScript, HTML e CSS.
          Focada em aprendizado contínuo e na construção de projetos
          bem estruturados e funcionais.
        </p>
      </section>

      {/* SOBRE */}
      <section id="about" className="about-section">
        <h3>Sobre mim</h3>
        <p>
          Olá! Sou a Rafaela, apaixonada por tecnologia e desenvolvimento Frontend.
          Estou em transição de carreira para a área de desenvolvimento web,
          com foco em React, JavaScript, HTML e CSS. Busco minha primeira
          oportunidade como Desenvolvedora Frontend Júnior, onde posso
          aplicar meus conhecimentos em projetos reais e continuar
          aprendendo com equipes experientes.
        </p>
      </section>

      {/* PROJETOS */}
      <section id="projects">
        <h3>Projetos</h3>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contact" className="contact-section">
        <h3>Contato & Redes</h3>
        <p>Você pode me encontrar nas redes abaixo:</p>
        <ContactLinks />
      </section>
    </main>
  );
}
