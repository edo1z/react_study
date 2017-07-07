import React, { Component } from 'react';
import SideMenu from './layouts/SideMenu';
import TopMenu from './layouts/TopMenu';
import Contents from './contents/Contents';
import './css/App.css';
import { Sidebar, Dimmer } from 'semantic-ui-react'

class App extends Component {
  state = {
    sideMenu: false,
    page: "top"
  }

  chSideMenu = () => {
    this.setState({ sideMenu: !this.state.sideMenu })
  }
  
  chPage = (page) => {
    this.setState({ page: page })
  }
  
  actions = {
    chSideMenu: this.chSideMenu,
    chPage: this.chPage
  }
  
  render() {
    return (
      <div className="App">
        <Sidebar.Pushable>
          <SideMenu visible={this.state.sideMenu} {...this.actions} />
          <Dimmer.Dimmable blurring dimmed={this.state.sideMenu} style={{ height:'100%' }}>
            <Sidebar.Pusher>
              <Dimmer active={this.state.sideMenu} inverted onClick={() => this.chSideMenu()} />
              <TopMenu {...this.actions} />
              <Contents page={ this.state.page } chPage={this.chPage} />
            </Sidebar.Pusher>
          </Dimmer.Dimmable>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
