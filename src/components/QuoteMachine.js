import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '.././bootstrap-social.css'

class QuoteMachine extends React.Component{
  render(){
    return(
      <Card style={{width:'36rem'}} className="text-center">
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}{this.props.quote}{' '}
            </p>
          <footer className="blockquote-footer">
          {this.props.author}
          </footer>
          </blockquote><br />
          <Button variant="primary" active onClick={this.props.newQuote}>New Quote</Button>{' '}
          <a href={this.props.link} className="btn btn-social-icon btn-twitter"><span className="fa fa-twitter"></span></a>
          </Card.Body>
        </Card>
    )
  }
}

export default QuoteMachine;