import Link from "next/link";
import { Menu, Icon } from "antd";

const { SubMenu } = Menu;
class SiderBar extends React.Component {
  render() {
    return (
      <Menu mode="inline">
        <SubMenu
          title={
            <span>
              <Icon type="github" />
              Submenu
            </span>
          }
        >
          <Menu.Item>
            <Link href="/">
              <a>
                <Icon type="github" />
                Home
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Icon type="github" />
          </Menu.Item>
          <SubMenu
            title={
              <span>
                <Icon type="github" />
                SubSubMenu
              </span>
            }
          >
            <Menu.Item>
              <Link href="/about">
                <a>
                  <Icon type="github" />
                  subsubsubmenuitem
                </a>
              </Link>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu title={<span>Submenu</span>}>
          <Menu.Item>one</Menu.Item>
          <Menu.Item>one</Menu.Item>
          <Menu.Item>one</Menu.Item>
          <Menu.Item>one</Menu.Item>
          <Menu.Item>one</Menu.Item>
          <Menu.Item>one</Menu.Item>
        </SubMenu>
        <SubMenu title={<span>Submenu</span>}>
          <Menu.Item>one</Menu.Item>
          <Menu.Item>one</Menu.Item>
          <Menu.Item>one</Menu.Item>
          <Menu.Item>one</Menu.Item>
          <Menu.Item>one</Menu.Item>
          <Menu.Item>one</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default SiderBar;
