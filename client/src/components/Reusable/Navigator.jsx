import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

export default function Navigator({ message, pathName, pathUrl }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(pathUrl);
  };
  return (
    <div className="navigator-container">
      <p>
        {message}{" "}
        <Link to={pathUrl} onClick={handleClick} className="link">
          {pathName}
        </Link>
      </p>
    </div>
  );
}

Navigator.propTypes = {
  message: PropTypes.string,
  pathName: PropTypes.string,
  pathUrl: PropTypes.string,
};
