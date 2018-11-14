import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import './sample.css';

const Sample = ()=>{
    return(
        <Container>
            <Row>
                <Col>
                This is there the sample story for the month will go.
                </Col>
                <Col>
                <h2>How it Works</h2>
                <p>
                    Remember as a kid when you went to summer camp? Those terrible stories you owuld tell around the campfire,
                    where each person contributed one word to the story? That is what this is except not horrible.
                </p>
                <p>
                    Each month there will be a new genre and a new prompt. You the user will then submit your submissions based
                    on the prompt and previous users submissions. 
                </p>
                <p>The goal at the end of the month is to basically have a novel. Written by ALL OF YOU! How cool is that?!
                    Whether you submit once or dozens of times, whether your submissions are 250 words or 1000. You submission
                    is part of a friggin book dude!
                </p>
                <Button><Link to="/home">Sign me up!</Link></Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Sample;