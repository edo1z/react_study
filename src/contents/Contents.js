import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react'

class Contents extends Component {
  render() {
    return (
      <div>
        <Button animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
        <Button animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
      </div>
    );
  }
}

export default Contents;
