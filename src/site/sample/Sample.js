import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import './sample.css';
import Results from './SampleResults'

const Sample = (props)=>{
    return(
        <div id="sample-background">
        <Container id="sample-container">
            <Row>
                <Col>
                    <Results />
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
                <Link to="/"><Button>Sign me up!</Button></Link>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Sample;