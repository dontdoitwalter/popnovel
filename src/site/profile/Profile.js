import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FormGroup, Input, Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form} from 'reactstrap'
import APIURL from '../../helpers/environment';
import './profile.css';

class Profile extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{
            displayname:'',
            email:'',
            firstname:'',
            lastname:'',
            hometown:'',
            aboutme:'',
            },
            modal:false,
        };
        this.toggle=this.toggle.bind(this);
    }
    toggle(){
        this.setState({
            modal:!this.state.modal
        });
    }
    componentDidMount(){
        this.fetchProfile()
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    fetchProfile= () =>{
        fetch(`${APIURL}/user/info/${localStorage.getItem('userid')}`,{
            method:'GET',
            headers:new Headers({
                'Content-Type':'application/json',
                'Authorization':this.props.token
            })
        }).then(
            (response)=>response.json()
            ).then((data)=>{
            this.setState({user:data.user})
            console.log(this.state)
            console.log(data)
        })
    }
    handleUpdate = () =>{
        fetch(`${APIURL}/user/update/${localStorage.getItem('userid')}`,{
            method:'PUT',
            body:JSON.stringify({user:this.state}),
            headers:new Headers({
                'Content-Type':'application/json',
                'Authorization':this.props.token
            })
        }).then(
            (response)=>response.json()
        )
    }
    handleDelete = () =>{
        fetch(`${APIURL}/user/delete/${localStorage.getItem('userid')}`,{
            method:'DELETE',
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization':this.props.token
            })
        })
        .then(
            localStorage.clear()
        ).then(
            this.forceUpdate()
        )
        
    }
render(){
    console.log(this.state.user)
    return(
        <div id="background">
    <Container className="prof-container">
      <Row>
          <Col>
          <div>
            <h2>My Profile</h2>
            <br></br>
                <div>
                    <b>Display Name:</b><br/>{this.state.user.displayname}<hr/>
                    <b>Email Address:</b><br/>{this.state.user.email}<hr/>
                    <b>First Name:</b><br/>{this.state.user.firstname}<hr/>
                    <b>Last Name:</b><br/>{this.state.user.lastname}<hr/>
                    <b>Hometown:</b><br/>{this.state.user.hometown}<hr/>
                </div>
        </div>
            <Button color="secondary" onClick={this.toggle}>Update Profile</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader id="profilemodal" toggle={this.toggle}>Update Profile Info</ModalHeader>
                    <ModalBody id="profilemodal">
                        <Form onSubmit={this.handleUpdate}>
                            <FormGroup>
                                <Input id="up_displayname"type="text"name="displayname"placeholder="Update Display Name"onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Input id="up_email"type="email"name="email"placeholder="Update Email" onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Input id="up_firstname"type="text"name="firstname"placeholder="Enter First Name"onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Input id="up_lastname"type="text"name="lastname"placeholder="Enter Last Name"onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Input id="up_hometown"type="text"name="hometown"placeholder="Enter Your Hometown"onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Input id="up_aboutme"type="textarea"name="aboutme"placeholder="Tell Us About Yourself"onChange={this.handleChange}/>
                            </FormGroup>
                            <Button color="primary" type="submit">Save Changes</Button>
                        </Form>
                   </ModalBody>
                  <ModalFooter id="profilemodal">
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>          
          </Col>
          <Col className="prof-left">
            <h2>About Me:</h2><br/>{this.state.user.aboutme}<hr/>
            <Form onSubmit={this.handleDelete}>
                <Link to="/story"><Button id="prof-button-one">Create!</Button></Link>
                <Link to='/suggest'><Button id="prof-button-two">Suggest a Prompt!</Button></Link>
                <Button type="submit">Delete My Account</Button>
            </Form>
          </Col>
      </Row>
  </Container>
  </div>
    )
}
}
export default Profile;