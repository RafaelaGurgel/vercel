export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl
}) {
  return (
    <article className="project-card">
      <h4>{title}</h4>
      <p>{description}</p>

      <ul className="tech-list">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={githubUrl} target="_blank">GitHub</a>
        {liveUrl && (
          <a href={liveUrl} target="_blank">Demo</a>
        )}
      </div>
    </article>
  );
}
