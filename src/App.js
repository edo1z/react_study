import React, { Component } from 'react';
import SideMenu from './layouts/SideMenu';
import TopMenu from './layouts/TopMenu';
import Contents from './contents/Contents';
import './css/App.css';
import { Sidebar } from 'semantic-ui-react'

class App extends Component {
  state = { visible: false }

  toggleSideMenu = () => {
    console.log("visible" + this.state.visible)
    this.setState({ visible: !this.state.visible })
  }
  
  render() {
    return (
      <div className="App">
        <Sidebar.Pushable>
          <SideMenu visible={this.state.visible} />
          <Sidebar.Pusher>
            <TopMenu />
            <Contents onClick={ () => this.toggleSideMenu() } />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
