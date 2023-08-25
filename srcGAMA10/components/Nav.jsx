import {Link} from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  );
}

export default Nav;
