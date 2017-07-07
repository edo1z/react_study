import React, { Component } from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

class SideMenu extends Component {
  chPage = (page) => {
    this.props.chSideMenu()
    this.props.chPage(page)
  }
  
  render() {
    return (
      <Sidebar as={Menu} animation='push' width='thin' visible={this.props.visible} icon='labeled' vertical inverted>
        <Menu.Item name='home' onClick={() => this.chPage("top")}>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item name='signin' onClick={() => this.chPage("signin")}>
          <Icon name='sign in' />
          ログイン
        </Menu.Item>
        <Menu.Item name='signup' onClick={() => this.chPage("signup")}>
          <Icon name='add user' />
          新規登録
        </Menu.Item>
      </Sidebar>
    );
  }
}

export default SideMenu;
