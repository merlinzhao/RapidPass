import React, {useState, useEffect} from 'react';
//import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Container, Row, Col, Button, Card, Table} from 'react-bootstrap'

export default function Dashboard() {
    let url = 'https://rapidpass-express.herokuapp.com/user/email/Johnappleseed@email.com';
    let urlTrips = 'https://rapidpass-express.herokuapp.com/trip/all/10001';
    const [data, setData] = useState({})
    const [tripData, setTripData] = useState([])

    async function grabData(url) {
        let response = await fetch(url); 
        let jsonResponse = await response.json();
        //const jsonStr = JSON.stringify(jsonResponse);

        //console.log(Object.entries(jsonResponse));
        setData(jsonResponse);
    }
    async function grabTripData(url) {
      let response = await fetch(url); 
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      setTripData(jsonResponse);
    }

    const renderTrip = (client, index) => {
      
      if (client.station == "test")
        return null
      else 
      {
        return (
          <tr key={index}>
            <td>{client.station}</td>
            <td>{client.travelTime ? (client.travelTime).slice(0, 19) : null}</td>
            <td>{"TTC Bus"/*client.vehicle*/}</td>
            <td>{client.fareCost == 0 ? "Transfer" : "Paid" }</td>
          </tr>
        )
    }
  }
    useEffect( () => {grabData(url)}, [])
    useEffect( () => {grabTripData(urlTrips)}, [])
    return ( 
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Row> 
           <Col md>
            <Card className="mb-3">
              <Card.Img src=""/>
              <Card.Body>
                <Card.Title> <h2> Dashboard </h2> </Card.Title>
                <Card.Text> <h4> Hello, {data.firstName}! </h4></Card.Text>
              </Card.Body>
              </Card>
           </Col> 
           <Col md>
            <Card>
              <Card.Img />
              <Card.Body>
                <Card.Title> <p> Balance: ${data.balance}</p> </Card.Title>
                <Card.Text> <p> Member Since: {data.dateCreated? (data.dateCreated).slice(0, 10): null}</p></Card.Text>
                <Button variant="success"> Add Funds </Button>
                <Button variant="warning" href="/"> Log Out </Button>  
              </Card.Body>
            </Card>
           </Col>
          </Row>
          <Row>
            <Table striped bordered hover>
              <thead>
                <th> Station </th>
                <th> Travel Time </th>
                <th> Vehicle </th>
                <th> Fare Cost </th>
              </thead>
              <tbody>
                {tripData.map(renderTrip)}
              </tbody>

            </Table>
          </Row>
        </Container>  
      </header>
    </div>      
    )
}

/*
<Alert variant="success"> Long Alert </Alert>
async function getUser() {
  try {
    const response = await fetch('https://rapidpass-express.herokuapp.com/user/email/testuser@email.com', {
     
    method: 'GET',
      headers: {
       'Content-Type': 'application/json',
        accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}
*/