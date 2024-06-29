import sidebarData from "@data/sidebarData";
import SidebarNavItems from "./SidebarNavItems";
import SidebarAvatar from "./SidebarAvatar";

const Sidebar = () => {
  return (
    <nav className="sidebar-container">
      <SidebarAvatar />
      <ul>
        {sidebarData.map((item, index) => (
          <SidebarNavItems item={item} key={index} />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
