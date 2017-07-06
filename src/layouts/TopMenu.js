import React, { Component } from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react'

class TopMenu extends Component {
  render() {
    return (
      <Container>
        <Menu secondary={true}>
          <Menu.Item header>Our Company</Menu.Item>
          <Menu.Item onClick={ () => this.props.onClick() }>
            <Icon name="sidebar"></Icon> メニュー
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default TopMenu;
