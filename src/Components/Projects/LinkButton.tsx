import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LinkButton(props: { iconName: string; link: string }) {
  return (
    <button className="w-10 h-10 border-[3px] border-black rounded-full flex justify-center items-center">
      <a href={props.link} target="_blank" rel="noreferrer" className="">
        {props.iconName === "github" ? (
          <FontAwesomeIcon icon={faGithub} />
        ) : (
          <FontAwesomeIcon icon={faLink} />
        )}
      </a>
    </button>
  );
}

export default LinkButton;
