import React, {Component} from 'react';
import {Form, FormGroup, Input, Button, Container, Row, Col} from 'reactstrap'
import APIURL from '../../helpers/environment';
import './suggest.css'

class Suggest extends Component{
    constructor (props){
        super(props)
        this.state={
            suggest:'',
        };
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    makeSuggestion = (event) =>{
        fetch(`${APIURL}/user/suggest`,{
            method:'POST',
            body:JSON.stringify({submission:this.state}),
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization':this.props.sessionToken
            })
        }).then(
            (res)=>res.json())
            .then(
                (data)=>console.log(data)
            )
            alert("Thank you for your suggestion!")
    }
    render(){
        return(
            <div id="suggest-background">
                    <Container className="suggest-container">
                        <Row>
                            <Col>
                            <h3>If you would like to suggest either a future prompt or genre, enter it in the field below!</h3>
                                <Form onSubmit={this.makeSuggestion}>
                                    <FormGroup>
                                        <Input id="suggest"type="textarea"name="suggest"placeholder="Suggest Away!!"onChange={this.handleChange}/>
                                    </FormGroup>
                                    <Button id="suggest-button" type="submit">Submit Suggestion</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
            </div>
        )
    }
}
export default Suggest;