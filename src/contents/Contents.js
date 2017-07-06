import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class Contents extends Component {
  render() {
    return (
      <div>
        <Button onClick={ () => this.props.onClick() }>Menu</Button>
      </div>
    );
  }
}

export default Contents;
