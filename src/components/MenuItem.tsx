import { MenuItemProps } from "~/interfaces/item";

function MenuItem({ data }: { data: MenuItemProps }) {
  return (
    <a className="menu-item" href="#">
      {data.icon}
      <span style={{ color: data.active ? "#1FCB4F" : "#A9A9A9" }}>
        {data.label}
      </span>
    </a>
  );
}

export default MenuItem;
