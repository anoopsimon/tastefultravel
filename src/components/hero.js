import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import Burgers from '../data/burgers.json'
const Hero = () => (
  <div style={{display: 'flex', flexDirection: 'row',flexWrap:'wrap'}}>
    {Burgers.map((burger, index) => (
      <div>
        <hr></hr>

        <Card style={{ width: '16rem' ,flex:2,margin:10}}>
          <Card.Img variant="top" src={burger.Image}/>
          <Card.Body>
            <Card.Title>{burger.Name}</Card.Title>
            <Card.Text>
              3000 Kcal
                </Card.Text>
            <Button variant="primary">Add To Cart</Button>
          </Card.Body>
        </Card>

      </div>
    ))}
  </div>
);

export default Hero;
