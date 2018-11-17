import React, {Component} from 'react';
import {Container, Row, Col, Form, FormGroup, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './story.css'
import APIURL from '../../helpers/environment';

class Story extends Component{
    constructor(props){
        super(props)
        this.state={
                story:'',
                modal:false
        }
        this.toggle=this.toggle.bind(this);
    }
    toggle(){
        this.setState({
            modal:!this.state.modal
        });
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    componentDidMount(){
        // this.fetchStory()
    }
    // fetchStory = () =>{
    //     fetch(`${APIURL}/authuser/read`,{
    //         method:'GET',
    //         headers:new Headers({
    //             'Content-Type':'application/json',
    //             'Authorization':this.props.sessionToken
    //         })
    //     }).then(
    //         (res)=>res.json()
    //     ).then((story)=>{
    //         this.setState({story:story})
    //         console.log(story)
    //     })
    // }
    submitStory = (event) => {
        fetch(`${APIURL}/user/story`,{
            method:'POST',
            body:JSON.stringify({storysubmit:this.state}),
            headers:new Headers({
                'Content-Type':'application/json',
                'Authorization':this.props.sessionToken
            })
        }).then(
            (res)=>res.json()
            ).then((data)=>{
                this.setState({story:data})
                console.log(data)
            })
    }
    render(){
        return(
            <div id="story-background">
            <Container id="story-container">
                <Row>
                    <Col id="story-divider">
                        <p>This will be where the current story goes.</p>
                    </Col>
                    <Col>
                        <Form>
                            <FormGroup>
                                <Input id="storysubmit"type="textarea"name="story"placeholder="Start your submission here"onChange={this.handleChange}/>
                            </FormGroup>
                        </Form>
                        <Button color="secondary" onClick={this.toggle}>Submit Story</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Are you sure?</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.submitStory}>
                            <FormGroup>
                                <p>
                                    Hey! <br></br>Thank you for your submission.<br></br> 
                                    Just a quick heads up before your submission is final; 
                                    all submission are final and there is no going back to 
                                    edit once submissions have been made. That being said be
                                    sure that there aren't any spelling errors and your content 
                                    is exactly how you want it before proceeding.
                                </p>
                            </FormGroup>
                            <Button color="primary" type="submit">Submit my part!</Button>
                        </Form>
                   </ModalBody>
                  <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Go Back</Button>
                  </ModalFooter>
                </Modal>          

                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
export default Story;