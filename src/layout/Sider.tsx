import Logo from "~/components/Logo";
import MenuItem from "~/components/MenuItem";
import { MenuItemProps } from "~/interfaces/item";
import DashboardIcon from "~/icons/dashboard";
import TransactionIcon from "~/icons/transaction";
import WalletIcon from "~/icons/wallet";
import AnalyticIcon from "~/icons/analytic";
import PersonalIcon from "~/icons/personal";
import MessageIcon from "~/icons/message";
import SettingIcon from "~/icons/setting";

import "../styles/sider.css";

function Sider() {
  const menuData: MenuItemProps[] = [
    {
      icon: <DashboardIcon active />,
      label: "Dashboard",
      active: true,
    },
    { icon: <TransactionIcon />, label: "Transactions" },
    { icon: <WalletIcon />, label: "Wallet" },
    { icon: <AnalyticIcon />, label: "Analytics" },
    { icon: <PersonalIcon />, label: "Personal" },
    { icon: <MessageIcon />, label: "Message" },
    { icon: <SettingIcon />, label: "Setting" },
  ];

  return (
    <div className="sider">
      <Logo />
      <div className="menu">
        {menuData &&
          menuData.map((item: MenuItemProps, index: number) => (
            <MenuItem key={`menuItem-${index}`} data={item} />
          ))}
      </div>
    </div>
  );
}

export default Sider;
