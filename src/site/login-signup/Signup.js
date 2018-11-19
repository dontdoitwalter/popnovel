import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import APIURL from '../../helpers/environment';
import '/signup.css'

class Signup extends Component{
    constructor(props){
        super(props)
        this.state={
            displayname:'',
            email:'',
            passwordhash:'',
            firstname:'',
            lastname:'',
            hometown:'',
            aboutme:'',
            modal:false     
        };
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
    });
}
handleSubmit = (event) =>{
    fetch(`${APIURL}/user/signup`, {
        method:'POST',
        body:JSON.stringify({user:this.state}),
        headers:new Headers({
            'Content-Type':'application/json'
        })
    }).then(
        (response)=>response.json()
    ).then((data)=>{
        
        this.props.setToken(data)
    })
    event.preventDefault()
}
render(){
        return(
            <div>
                <h3>Sign Up!</h3>
                    <h6>
                        Now that you have checked out the site and want to sign up, read over the following content
                        and click the "I Accept!" button to create an account.
                    </h6>
                <h3>Open Source</h3>
                    <h6>
                        All of the user content produced from this application will be considered open source.
                        This means that you, as the user, can use any of the content found here, in your own work
                        outside of the application.
                    </h6>
                <h3>Site Rules</h3>
                    <h6>
                        By no means are the following meant to stifle your crfeativity. The goal is to make
                        the experience fun and interactive for everyone. That being said, the following is
                        our list of rules and regulations:
                    </h6>
                        <ul>
                            <li>Limit your submissions from 250 to 1000 words please.</li>
                            <li>Allow at least two other submissions before adding another submission of your own.</li>
                            <li>PLEASE play nice with others. Keep the story line progressive.</li>
                        </ul>
            <Button color="secondary" onClick={this.toggle}>I Accept!</Button>       
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader id="signupmodal"toggle={this.toggle}>Create Your Profile</ModalHeader>
                    <ModalBody id="signupmodal">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="displayname">Display Name</Label>
                                <Input id="su_displayname" type="text" name="displayname" placeholder="enter display name"onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email Address</Label>
                                <Input id="su_email" type="email" name="email"placeholder="enter email address"onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                              <Label for="password">Password</Label>
                              <Input id="su_password" type="password" name="passwordhash" placeholder="enter password"onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="firstname">First Name</Label>
                                <Input id="su_firstname"type="text"name="firstname"placeholder="Optional"onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastname">Last Name</Label>
                                <Input id="su_lastname"type="text"name="lastname"placeholder="Optional"onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="hometown">Hometown</Label>
                                <Input id="su_hometown"type="text"name="hometown"placeholder="Optional"onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="About Me">About Me</Label>
                                <Input id="su_aboutme"type="textarea"name="aboutme"placeholder="Optional"onChange={this.handleChange}/>
                            </FormGroup>
                        </Form>                        
                   </ModalBody>
                        <ModalFooter id="signupmodal">
                            <Button color="primary" onClick={this.handleSubmit}>Create My Profile</Button>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                </Modal>          
            </div>
        )
    }
}
export default Signup;