import PropTypes from "prop-types";
import Icon from "@reusable/Icon";

const SidebarNavItems = ({ item }) => {
  return (
    <li>
      <Icon library={item.library} name={item.name} />
      <span>{item.label}</span>
    </li>
  );
};

export default SidebarNavItems;

SidebarNavItems.propTypes = {
  item: PropTypes.object,
};
