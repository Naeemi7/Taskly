import { useNavigate } from "react-router-dom";
import ReusableIcon from "@reusable/ReusableIcon";
import useUserContext from "@hooks/useUserContext";

const Footer = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useUserContext();

  const handleClick = () => {
    navigate("/add-task");
  };

  return (
    <div className="footer-container">
      <footer className={isLoggedIn ? "authorized" : "unauthorized"}>
        {isLoggedIn ? (
          <ReusableIcon
            library="ri"
            name="RiAddCircleFill"
            className="add-task-button"
            onClick={handleClick}
          />
        ) : (
          <div className="unauthorized-footer">
            <a href="https://github.com/Naeemi7" target="_black">
              <ReusableIcon
                library="fa"
                name="FaGithub"
                className="social-icons"
                size={35}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/abdulwase-naeemi/"
              target="_black"
            >
              <ReusableIcon
                library="fa"
                name="FaLinkedin"
                className="social-icons"
                size={35}
              />
            </a>
          </div>
        )}
      </footer>
    </div>
  );
};

export default Footer;
