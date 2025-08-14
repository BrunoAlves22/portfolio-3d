import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Contact() {
  return (
    <section className="flex flex-col w-full px-5 py-10 my-20">
      <h2 className="font-bold font-poppins text-3xl md:text-4xl text-white">
        Contato
      </h2>
      <div className="flex items-center justify-center gap-10 mt-20">
        <FontAwesomeIcon icon={faGithub} className="github-icon" />

        <FontAwesomeIcon icon={faLinkedin} className="github-icon" />
      </div>
    </section>
  );
}
