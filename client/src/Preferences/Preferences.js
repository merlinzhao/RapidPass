import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Preferences.css';
import ankur from '../Images/ankur1.jpg';
import hari from '../Images/hari1.jpg';
import merlin from '../Images/merlin1.jpg';
import jasleen from '../Images/jasleen2.jpg';
import {Container, Row, Col, Button, Card, Table} from 'react-bootstrap'

export default function Preferences() {
    return(
      <div>
          
      <Container fluid>
      <h2>About RapidPass</h2>

      <p> Rapid Pass aims to streamline fare payments for passengers on public transit systems. Our mission is to create a payment device that provides a seamless experience for passengers and allows transit authorities to gather key information on passenger riding habits. We utilize the latest in wireless technology in order to achieve out goals.</p>
      <p> To help with the automation in our transit systems, our team employs state-of-the-art technology and innovation to bring everyone a seamless experience.</p>
      <hr/>
      <Button variant="success"> Read More </Button>
      <div class="classWithPad">
          <h2> Our Team </h2>
      </div>
          <Row className="center"> 
           <Col md>
           <Card.Img className="img-resize" src={merlin}/>
            <Card className="mb-3">
              
              <Card.Body>
                <Card.Title> <h3> Merlin Zhao</h3> </Card.Title>
                <Card.Text> <p>  Full Stack Development </p></Card.Text>
              </Card.Body>
              </Card>
              
           </Col> 
           <Col md>
           <Card.Img className="img-resize" src={jasleen}/>
            <Card className="mb-3">
              
              <Card.Body>
                <Card.Title> <h3> Jasleen Deol </h3> </Card.Title>
                <Card.Text> <p> Project Management/Front-end Development </p></Card.Text>
              </Card.Body>
              </Card>
           </Col> 
          </Row>
          <Row className="center"> 
           <Col md>
           <Card.Img className="img-resize" src={hari}/>
            <Card className="mb-3">
              
              <Card.Body>
                <Card.Title> <h3> Hari Balentheran</h3> </Card.Title>
                <Card.Text> <p> Hardware and Systems Design </p></Card.Text>
              </Card.Body>
              </Card>
           </Col> 
           <Col md>
           <Card.Img className="img-resize" src={ankur}/>
            <Card className="mb-3">
             
              <Card.Body>
                <Card.Title> <h3> Ankur Verma</h3> </Card.Title>
                <Card.Text> <p> Embedded Software Development </p></Card.Text>
              </Card.Body>
              </Card>
           </Col> 
          </Row>
         
        </Container>  

      </div>

      
    

    )
  };