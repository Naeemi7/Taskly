import PropTypes from "prop-types";
import Icon from "@Reusable/Icon";

const DropdownItem = ({ item }) => {
  return (
    <li>
      <Icon
        library={item.library}
        name={item.name}
        size={item.size}
        color={item.color}
      />
      {item.label}
    </li>
  );
};

DropdownItem.propTypes = {
  item: PropTypes.object,
};

export default DropdownItem;
