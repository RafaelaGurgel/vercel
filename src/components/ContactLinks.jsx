import { FaLinkedin, FaGithub, FaYoutube, FaTwitch } from "react-icons/fa";

export default function ContactLinks() {
  return (
    <div className="contact-links">
      <a
        href="https://www.linkedin.com/in/rafaela-gurgel/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/rafaelagurgel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    

    </div>
  );
}
