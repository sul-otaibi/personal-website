import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <main id="contact" className="min-h-[24rem] px-28 p-5 pb-20 text-2xl">
      <h1 className="mt-5 mb-10 font-serif text-5xl tracking-wider">
        Contact Me
      </h1>
      <div className="flex justify-center gap-8">
        <button className="py-4 text-2xl bg-white rounded-md w-60 drop-shadow-xl hover:font-medium">
          <a href="" className="block w-full h-full">
            <FontAwesomeIcon icon={faLinkedin} /> linkedin
          </a>
        </button>

        <button className="py-4 text-2xl bg-white rounded-md w-60 drop-shadow-xl hover:font-medium">
          <a href="" className="block w-full h-full">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
        </button>

        <button className="py-4 text-2xl bg-white rounded-md w-60 drop-shadow-xl hover:font-medium">
          <a href="" className="block w-full h-full">
            <FontAwesomeIcon icon={faFilePdf} /> My resume
          </a>
        </button>
      </div>
    </main>
  );
}

export default Contact;
