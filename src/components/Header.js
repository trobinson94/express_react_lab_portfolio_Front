import { Link } from "react-router-dom";

function Header (props) {
  

    return (
        <header>
        <h1>My Portfolio Page</h1>
        <nav>
          <Link to="/">
            <div className="nav">HOME</div>
          </Link>
          <Link to="/about">
            <div className="nav">ABOUT</div>
          </Link>
          <Link to="/projects">
            <div className="nav">PROJECTS</div>
          </Link>
        </nav>
      </header>
    );
}

export default Header