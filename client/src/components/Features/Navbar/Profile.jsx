import { useState } from "react";
import profile from "@images/navbar/profile.png";
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
      <img src={profile} alt="Profile" className="profile-image" />

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
