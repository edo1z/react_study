import React, { Component } from 'react';
import Top from './Pages/Top';
import NotFound from './Pages/NotFound';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';

class Contents extends Component {
  render() {
    if(this.props.page === "top"){
      return <Top chPage={ this.props.chPage } />
    }else if(this.props.page === "signup"){
      return <Signup />
    }else if(this.props.page === "signin"){
      return <Signin />
    }else{
      return <NotFound />
    }
  }
}

export default Contents;
