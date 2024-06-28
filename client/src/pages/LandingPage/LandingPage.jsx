import Button from "@reusable/Button";
import useNavigation from "@hooks/useNavigation";
import AuthLink from "@reusable/AuthLink";
import landingImage from "@images/main/taskly-landing.png";

const LandingPage = () => {
  const { goTo } = useNavigation();

  return (
    <main className="main-container">
      <div className="landing-page-container">
        <div className="landing-page-content">
          <h4>
            Taskly is your new go-to app for managing tasks efficiently.
            Organize your projects, collaborate with your team, and stay on top
            of your deadlines.
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

        <div className="landing-page-image">
          <img src={landingImage} alt="landing image" />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
