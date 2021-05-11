import { Button, Card } from "react-bootstrap";
import './Cards.css';

const Cards = (props) => {
    return (
        <>
            <Card className="cardStyle">
                <Card.Body>
                    <Card.Title style={{color: "skyblue"}}>{props.title}</Card.Title>
                    <hr style={{color: "skyblue"}} />
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
