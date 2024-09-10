import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <main
      id="contact"
      className="min-h-[24rem] px-4 lg:px-28 p-5 pb-20 text-2xl"
    >
      <h1 className="mt-5 mb-10 font-serif text-5xl tracking-wider">
        Contact Me
      </h1>
      <div className="flex justify-center gap-8 max-lg:px-8 max-lg:flex-col">
        <button className="px-10 py-4 text-2xl bg-white rounded-md drop-shadow-xl hover:font-medium">
          <a
            href="https://www.linkedin.com/in/sul-otaibi/"
            target="_blank"
            className="block w-full h-full"
          >
            <FontAwesomeIcon icon={faLinkedin} /> linkedin
          </a>
        </button>

        <button className="px-10 py-4 text-2xl bg-white rounded-md drop-shadow-xl hover:font-medium">
          <a
            href="mailto:sul.otaibi@outlook.sa"
            className="block w-full h-full"
          >
            <FontAwesomeIcon icon={faEnvelope} /> sul.otaibi@outlook.sa
          </a>
        </button>
      </div>
    </main>
  );
}

export default Contact;
