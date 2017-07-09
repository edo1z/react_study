import React, { Component } from 'react'
import request from 'superagent'
import { Container, Form, Button } from 'semantic-ui-react'

class Signup extends Component {
  state = {
    num: '',
    loading: false,
    disabled: false
  }
  change = (e) => {
    this.setState({num:e.target.value})
  }
  post = (e) => {
    this.submit_disable()
    let that = this
    request
      .post('http://localhost:1323/number')
      .type('form')
      .send({ number: this.state.num})
      .set('Accept', 'application/json')
      .end(function(err, res){
        if(!err){
          console.log(res)
        }
        that.submit_able()
      })
    e.preventDefault()
  }
  submit_disable = () => {
    this.setState({
      loading: true,
      disable: true
    })
  }
  submit_able = () => {
    this.setState({
      loading: false,
      disable: false
    })
  }
  
  render() {
    return (
      <Container>
        <h2>新規登録</h2>
        
        <p>APIにPOST送信します</p>
        
        <Form onSubmit={(e) => this.post(e)}>
          <Form.Field>
            <label>Number</label>
            <input placeholder='Number' onChange={(e) => this.change(e)} />
          </Form.Field>
          <Button loading={this.state.loading} disabled={this.state.disabled} type='submit'>Submit</Button>
        </Form>
        
      </Container>
    );
  }
}

export default Signup;
