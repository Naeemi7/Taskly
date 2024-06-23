import DisplayGreeting from "@utils/DisplayGreeting";
const Greetings = () => {
  return <h1 className="greeting">👋 {DisplayGreeting()}, User</h1>;
};

export default Greetings;
