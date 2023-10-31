import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="justify-center hidden w-full md:flex md:sticky bg-DarkGray">
      <ul className="flex gap-2 py-4 text-white md:w-96 justify-evenly">
        <li>
          <Link
            className="px-6 py-2 rounded-md hover:bg-Yellow hover:text-DarkGray active:bg-Yellow"
            to="home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="px-6 py-2 rounded-md hover:bg-Yellow hover:text-DarkGray active:bg-Yellow"
            to="skills"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="px-6 py-2 rounded-md hover:bg-Yellow hover:text-DarkGray active:bg-Yellow"
            to="projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="px-6 py-2 rounded-md hover:bg-Yellow hover:text-DarkGray active:bg-Yellow"
            to="contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
