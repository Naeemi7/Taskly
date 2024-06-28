import profile from "@images/navbar/profile.png";
import dashboardData from "@data/dashboardData";
import Icon from "@reusable/Icon";

const Dashboard = () => {
  return (
    <>
      <nav className="sidebar-container">
        <header className="avatar">
          <img src={profile} alt="User Avatar" />
          <h4>Abdulwase Naeemi</h4>
          <p>abdulwasenaeemi7@gmail.com</p>
        </header>
        <ul>
          {dashboardData.map((item, index) => (
            <li key={index}>
              <Icon library={item.library} name={item.name} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Dashboard;
