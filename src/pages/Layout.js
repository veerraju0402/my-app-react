import { Outlet, Link } from "react-router-dom";

const MyLayoutFun = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/*">noPage</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default MyLayoutFun