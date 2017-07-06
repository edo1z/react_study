import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	    <h1>Hello React</h1>
        <Icon name='home' size='large' />
		<a className="ui button teal">hoge</a>
      </div>
    );
  }
}

export default App;
