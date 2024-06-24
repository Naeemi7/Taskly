import { useState } from "react";
import ReusableIcon from "@reusable/ReusableIcon";
import reactIconsData from "@data/reactIconsData";
import DropdownItem from "./DropdownItem";

const Profile = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div
      className="profile-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ReusableIcon
        library="pi"
        name="PiUserCircleGearFill"
        size={24}
        className="profile-icon"
      />

      {showDropdown && (
        <div className="profile-dropdown">
          <ul>
            {reactIconsData.map((item, index) => (
              <DropdownItem item={item} key={index} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
