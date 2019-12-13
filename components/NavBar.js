import { Menu } from "antd";
import Link from "next/link";

const { SubMenu } = Menu;

const NavBar = () => (
  <Menu mode="horizontal">
    <Menu.Item>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </Menu.Item>
    <SubMenu title={<span>SubMenu</span>}>
      <Menu.Item>Submenu one</Menu.Item>
      <Menu.Item>Submenu two</Menu.Item>
      <Menu.Item>Submenu three</Menu.Item>
    </SubMenu>
  </Menu>
);
export default NavBar;
