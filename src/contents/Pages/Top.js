import React, { Component } from 'react';
import { Container, Icon, Button } from 'semantic-ui-react'

class Top extends Component {
  render() {
    return (
      <Container>
        <Button color="teal" onClick={ () => this.props.chPage("signin") }>
          <Icon name='sign in' />
          ログイン
        </Button>
        <Button color="blue" onClick={() => this.props.chPage("signup") }>
          <Icon name='add user' />
          新規登録
        </Button>
      </Container>
    );
  }
}

export default Top;
