import useNavigator from "@hooks/useNavigator";
import Icon from "@reusable/Icon";
import useUserContext from "@hooks/useUserContext";

const Footer = () => {
  const { isLoggedIn } = useUserContext();
  const goTo = useNavigator();

  return (
    <div className="footer-container">
      <footer className={isLoggedIn ? "authorized" : "unauthorized"}>
        {isLoggedIn ? (
          <Icon
            library="ri"
            name="RiAddCircleFill"
            className="add-task-button"
            onClick={() => goTo("/add-task")}
          />
        ) : (
          <div className="unauthorized-footer">
            <a href="https://github.com/Naeemi7" target="_black">
              <Icon
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
              <Icon
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
