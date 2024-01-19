import "./navbar.scss";
import Logo from '../../assets/logoFix.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logoFix.svg" alt="" />
        <span>SAHABAR PASAR</span>
      </div>
      <div className="icons">
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>AHHA TEAM</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
