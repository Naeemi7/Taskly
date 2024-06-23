import PropTypes from "prop-types";
import * as FaIcons from "react-icons/fa";
import * as FaIcons6 from "react-icons/fa6";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";

const ICON_LIBRARIES = {
  fa: FaIcons,
  fa6: FaIcons6,
  md: MdIcons,
  io: IoIcons,
  bs: BsIcons,
  ri: RiIcons,
};

const Icon = ({
  library = "fa",
  name,
  size = 24,
  color = "black",
  className = "",
}) => {
  const IconLibrary = ICON_LIBRARIES[library];
  const IconComponent = IconLibrary ? IconLibrary[name] : null;

  if (!IconComponent) {
    console.warn(`Icon ${name} not found in ${library} library.`);
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
};

Icon.propTypes = {
  library: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
