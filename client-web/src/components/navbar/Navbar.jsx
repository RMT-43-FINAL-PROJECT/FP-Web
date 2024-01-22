import "./navbar.scss";
import Logo from "../../assets/logoFix.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logoFix.svg" alt="" />
        <span>SAHABAR PASAR</span>
      </div>
      <div className="icons">
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <button
          className="logout-btn"
          onClick={() => {
            navigate("/login");
            localStorage.removeItem("access_token")
            localStorage.removeItem("_id")
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
