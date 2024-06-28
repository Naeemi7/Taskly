import { useState } from "react";
import Icon from "@reusable/Icon";
import dropdownData from "@data/dropdownData";
import DropdownItems from "./DropdownItems";

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
      <Icon
        library="pi"
        name="PiUserCircleGearFill"
        size={24}
        className="profile-icon"
      />

      {showDropdown && (
        <div className="profile-dropdown">
          <ul>
            {dropdownData.map((item, index) => (
              <DropdownItems item={item} key={index} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
