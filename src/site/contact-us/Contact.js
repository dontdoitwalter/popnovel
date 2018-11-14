import React from 'react';
import {Form, FormGroup, Label, Input, Button, Container, Col, Row} from 'reactstrap';
import './contact.css';
import Lemon from '../../assets/lizlemon.gif';

const Contact = () =>{
    return(
<Container>
    <Row>
        <Col>
    <h1>Contact Us!</h1>
    <h6>Feedback is important to us! If you find any bugs we would LOVE to know so that we
        can fix them. In addition, if you have any suggestions for quality of life imporvements
        let us know. This application is for you the user, so we want it to be the best experience possible.
    </h6>
    <img src={Lemon} alt="lemon" id="lemon"></img>

    </Col>
    <Col>
    <Form action="https://formspree.io/emailwaltervanhooser@gmail.com" method="POST">
        <FormGroup>    
            <Label>Name</Label>
                     <Input
                       type="text"
                       className="form-control"
                       placeholder="Your Name"
                       id="name"
                       required
                       data-validation-required-message="Please enter your name"
                       name="name"
                       />
                     <p className="help-block text-danger"></p>
            </FormGroup>
            <FormGroup>
                <Label>Email Address</Label>
                     <Input
                       type="email"
                       className="form-control"
                       placeholder="Your Email"
                       id="email"
                       required
                       data-validation-required-message="Please enter your email"
                       name="_replyto"
                     />
                     <p className="help-block text-danger"></p>
            </FormGroup>
                     <textarea
                       className="form-control"
                       rows="7"
                       placeholder="Your Message"
                       id="message"
                       required
                       data-validation-required-message="Please leave a message"
                       name="message"
                     ></textarea>
                     <p className="help-block text-danger"></p>
                   <Button type="submit" className="btn btn-lg btn-black">
                     <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                     Send Message
                   </Button>
               </Form>
        </Col>
    </Row>
</Container>    
    )
}
export default Contact;