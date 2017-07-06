import React, { Component } from 'react';
import SideMenu from './layouts/SideMenu';
import TopMenu from './layouts/TopMenu';
import Contents from './contents/Contents';
import './css/App.css';
import { Sidebar, Dimmer } from 'semantic-ui-react'

class App extends Component {
  state = { sideMenu: false }

  toggleSideMenu = () => {
    this.setState({ sideMenu: !this.state.sideMenu })
  }
  
  render() {
    return (
      <div className="App">
        <Sidebar.Pushable>
          <SideMenu visible={this.state.sideMenu} />
          <Dimmer.Dimmable blurring dimmed={this.state.sideMenu} style={{ height:'100%' }}>
            <Sidebar.Pusher>
              <Dimmer active={this.state.sideMenu} inverted onClick={ () => this.toggleSideMenu() } />
              <TopMenu onClick={ () => this.toggleSideMenu() } />
              <Contents />
            </Sidebar.Pusher>
          </Dimmer.Dimmable>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
