import { Button, Card } from "react-bootstrap";
import './Cards.css';

const Cards = (props) => {
    return (
        <>
            <Card className="cardStyle">
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.body}
                    </Card.Text>
                    <Card.Link href="#">
                        <Button variant="light">Login</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
        </>
    );
}

export default Cards;