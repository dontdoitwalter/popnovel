import React, {Component} from 'react';
import {Button, Container, Row, Col, Form, FormGroup, Input} from 'reactstrap';

class Story extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <p>This will be where the current story goes.</p>
                    </Col>
                    <Col>
                        <Form>
                            <FormGroup>
                                <Input id="storysubmit"type="textarea"name="storysubmit"placeholder="Start your submission here"/>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Story;