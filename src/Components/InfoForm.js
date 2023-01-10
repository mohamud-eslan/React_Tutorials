import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function InfoForm() {
  return (
    <div>
        <Container style={{background:'white', border:'1px solid lightBlue',width:'60%', marginTop:'10%', marginLeft:'10%'}}>
       <Form style={{margin:'20px'}}>
      <Form.Group>
        <Form.Label style={{ marginBottom:'10px'}}><h1>Book Your Travel</h1></Form.Label>
        <Form.Control type="text" placeholder="From" style={{background:'lightGray'}} />
       
      </Form.Group>

      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="To" style={{background:'lightGray'}} />
      </Form.Group>
      <Form.Group >
        <Form.Label ></Form.Label>
        <Form.Control type="text" placeholder="When:" style={{background:'lightGray'}}/>
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Passangers" style={{background:'lightGray'}}/>
      </Form.Group>
      
      <Button variant="danger" type="submit" style={{width:'100%', marginTop:'5%'}}>
        Search
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default InfoForm