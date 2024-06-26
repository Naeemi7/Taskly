import DisplayGreeting from "@utils/DisplayGreeting";
import useUserContext from "@hooks/useUserContext";

const Greetings = () => {
  const { user } = useUserContext();

  console.log(user);
  return (
    <h1 className="greeting">
      👋 {DisplayGreeting()}, {user.username}
    </h1>
  );
};

export default Greetings;
