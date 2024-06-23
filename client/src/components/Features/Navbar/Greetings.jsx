import DisplayGreeting from "@utils/DisplayGreeting";
const Greetings = () => {
  return <span className="greeting">👋 {DisplayGreeting()}</span>;
};

export default Greetings;
