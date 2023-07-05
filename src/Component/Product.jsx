import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Product({product}) {
  return (
  
<Card style={{ width: '18rem' }}>
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  
    <Card.Text>
      {product.FirstName}
    </Card.Text>
    
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
      
  )
}
