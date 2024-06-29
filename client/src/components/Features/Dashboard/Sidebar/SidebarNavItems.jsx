import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "@reusable/Icon";

const SidebarNavItems = ({ item }) => {
  return (
    <Link className="sidebar-link" to={item.to}>
      <li>
        <Icon library={item.library} name={item.name} />
        <span>{item.label}</span>
      </li>
    </Link>
  );
};

SidebarNavItems.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SidebarNavItems;
