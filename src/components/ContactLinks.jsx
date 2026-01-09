import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; // ícone de email do Material Icons

export default function ContactLinks() {
  return (
    <div className="contact-links" style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/rafaela-gurgel/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/rafaelagurgel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      {/* Email */}
      <a
        href="mailto:raffy.gurgel@gmail.com"
        aria-label="Email"
      >
        <MdEmail />
      </a>
    </div>
  );
}
