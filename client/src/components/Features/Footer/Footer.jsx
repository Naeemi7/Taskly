import { useNavigate } from "react-router-dom";
import Icon from "@reusable/Icon";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add-task");
  };
  return (
    <div className="footer-container">
      <Icon
        library="ri"
        name="RiAddCircleFill"
        className="add-task-button"
        onClick={handleClick}
      />
    </div>
  );
};

export default Footer;
