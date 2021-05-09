import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../components/Cards/Cards";
import Header from "../../components/Header/Header";
import './Home.css';

const Home = () => {
    return (
        <>
            <Header />
            <Container className="cardCont">
                <Row>
                    <Col md={6} className="d-flex justify-content-end">
                        <Cards title={"BID ECOIN"} body={"Bid your ECOIN on the daily share of minted DECO tokens. At 00:00 GMT, the minted tokens of the day are distributed based on all the received bids of the day. The highest bidder receives the maximum share of tokens."} />
                    </Col>
                    <Col md={6} className="d-flex justify-content-start">
                        <Cards title={"STAKE DECO"} body={"Stake your DECO tokens to earn reward in form of ECOIN tokens. 95% of the received ECOIN in forms of bidding is distributed among the stakers. Also Staking earns DECO tokens in interest at a 5% APY. Penalty will be charged for withdrawing stake before maturity."} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;