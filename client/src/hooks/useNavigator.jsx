import { useNavigate } from "react-router-dom";

const useNavigator = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return goTo;
};

export default useNavigator;
