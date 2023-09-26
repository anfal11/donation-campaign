import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to='/'>
      <img src="/src/assets/Logo.png" alt="logo" className="" />
      </Link>
    </div>
  );
};

export default Logo;
