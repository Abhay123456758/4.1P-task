import React from "react";
import { Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu>
      <Menu.Item name="home">DEV@Deakin</Menu.Item>
      <Menu.Item name="articles">Articles</Menu.Item>
      <Menu.Item name="tutorials">Tutorials</Menu.Item>
    </Menu>
  );
};

export default Header;
