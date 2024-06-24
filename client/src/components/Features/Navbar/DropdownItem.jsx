import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "@reusable/Icon";

const DropdownItem = ({ item }) => {
  return (
    <li>
      <Link to={item.to}>
        <Icon
          library={item.library}
          name={item.name}
          size={item.size}
          className="dropdown-icon"
        />
      </Link>
      {item.label}
    </li>
  );
};

DropdownItem.propTypes = {
  item: PropTypes.object,
};

export default DropdownItem;
