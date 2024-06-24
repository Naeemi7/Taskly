import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ReusableIcon from "@reusable/ReusableIcon";

const DropdownItem = ({ item }) => {
  return (
    <Link to={item.to} className="dropdown-link-items">
      <li>
        <ReusableIcon
          library={item.library}
          name={item.name}
          size={item.size}
          className="dropdown-icon"
        />

        {item.label}
      </li>
    </Link>
  );
};

DropdownItem.propTypes = {
  item: PropTypes.object,
};

export default DropdownItem;
