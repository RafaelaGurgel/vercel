export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}) {
  return (
    <article className="project-card" role="article">
      <header className="project-header">
        <h4 className="project-title">{title}</h4>
      </header>

      <p className="project-description">{description}</p>

      <ul className="tech-list" aria-label="Tecnologias utilizadas">
        {technologies.map((tech) => (
          <li key={tech} className="tech-item">
            {tech}
          </li>
        ))}
      </ul>

      <footer className="project-links">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Repositório do projeto ${title}`}
        >
          GitHub
        </a>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Versão online do projeto ${title}`}
          >
            Demo
          </a>
        )}
      </footer>
    </article>
  );
}
