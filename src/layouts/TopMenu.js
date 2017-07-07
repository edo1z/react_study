import React, { Component } from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react'
import '../css/TopMenu.css';

class TopMenu extends Component {
  render() {
    return (
      <Container className="TopMenu">
        <Menu secondary={true}>
          <Menu.Item header onClick={()=>this.props.chPage("top")} className="brand">
            AuthTest
          </Menu.Item>
          <Menu.Item onClick={ () => this.props.chSideMenu() }>
            <Icon name="sidebar"></Icon> メニュー
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default TopMenu;
