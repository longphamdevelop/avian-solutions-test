import Avatar from "~/components/Avatar";
import Searchbox from "~/components/Searchbox";
import NotifyIcon from "~/icons/notify";

import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="page-title">Dashboard</h1>
      <div className="header-right">
        <Searchbox />
        <div className="notify">
          <NotifyIcon />
        </div>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
