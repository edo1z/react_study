import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react'

class TopMenu extends Component {
  render() {
    return (
      <Menu secondary={true}>
        <Menu.Item header>Our Company</Menu.Item>
        <Menu.Item onClick={ () => this.props.onClick() }>
          <Icon name="sidebar"></Icon> メニュー
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopMenu;
