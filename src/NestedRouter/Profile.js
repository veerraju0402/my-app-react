import { Link, Outlet, useLocation } from "react-router-dom";

export function Profile() {
  const { pathname } = useLocation();

  return (
    <div>
      <div className="buttons">
        <Link
          to="/profile"
          className={pathname === "/profile" ? "activeBtn" : "navBtn"}
        >
          Details
        </Link>
        <Link
          to="/profile/followers"
          className={pathname === "/profile/followers" ? "activeBtn" : "navBtn"}
        >
          Followers
        </Link>
        <Link
          to="/profile/following"
          className={pathname === "/profile/following" ? "activeBtn" : "navBtn"}
        >
          Following
        </Link>
      </div>
      <Outlet />
    </div>
  );
}