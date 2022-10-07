
import { getDefaultNormalizer } from '@testing-library/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MovieCard.css';

function Movie(props) {
    var cardTitle = props.title;
    var cardText = props.description;
    var cardImage = props.imagePath;
    var cardRating = props.rating;
  return (
    <Card style={{ width: '18rem' }} className='Card'>
        <Card.Img variant="top" src={cardImage}/>
        <Card.Body className='CardText'>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Text>{cardText} </Card.Text>
            <Card.Text>Rating: {cardRating}</Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
    </Card>
  );
}

export default Movie;

//default prop value

Movie.defaultProps = {
    title: 'No title',
    description: 'No description',
    rating: '?',
    imagePath: 'https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8='
}