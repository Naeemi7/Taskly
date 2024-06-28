import { useLocation } from "react-router-dom";
import useNavigation from "@hooks/useNavigation";
import Icon from "@reusable/Icon";
import useUserContext from "@hooks/useUserContext";

const Footer = () => {
  const { isLoggedIn } = useUserContext();
  const { goTo } = useNavigation();
  const location = useLocation();

  return (
    <footer>
      <div className={isLoggedIn ? "authorized" : "unauthorized"}>
        {isLoggedIn ? (
          location.pathname !== "/home" ? (
            <Icon
              library="ri"
              name="RiAddCircleFill"
              className="add-task-button"
              onClick={() => goTo("/add-task")}
            />
          ) : null
        ) : (
          <div className="unauthorized-footer">
            <a href="https://github.com/Naeemi7" target="_blank">
              <Icon
                library="fa"
                name="FaGithub"
                className="social-icons"
                size={35}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/abdulwase-naeemi/"
              target="_blank"
            >
              <Icon
                library="fa"
                name="FaLinkedin"
                className="social-icons"
                size={35}
              />
            </a>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
