import useUserContext from "@hooks/useUserContext";
import Button from "@reusable/Button";
import AuthLink from "@reusable/AuthLink";
import useNavigation from "@hooks/useNavigation";
import landingImage from "@images/main/taskly-landing.png";

const Main = () => {
  const { isLoggedIn } = useUserContext();
  const { goTo } = useNavigation();

  return (
    <div className="main-container">
      {isLoggedIn ? (
        <div className="main-without-tasks">
          <h4>You don&apos;t have any tasks yet</h4>
          <p>
            Click on the <strong>+</strong> button to add one
          </p>
        </div>
      ) : (
        <div className="unprotected-main">
          <div className="unprotected-main-content">
            <h4>
              Taskly is your new go-to app for managing tasks efficiently.
              Organize your projects, collaborate with your team, and stay on
              top of your deadlines.
            </h4>
            <Button
              name="Register now!"
              width={250}
              onClick={() => goTo("user-registration")}
            />
            <AuthLink
              message="Already registered? "
              pathName="Login"
              pathUrl="/user-login"
              className="link"
            />
          </div>
          <div className="unprotected-main-image">
            <img src={landingImage} alt="landing image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
