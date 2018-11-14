import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FormGroup, Input, Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form} from 'reactstrap'
import UserStory from './UserStoryInfo'

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
    componentWillMount(){
        this.fetchProfile()
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    fetchProfile= () =>{
        fetch(`http://localhost:3000/user/info/${localStorage.getItem('userid')}`,{
            method:'GET',
            headers:new Headers({
                'Content-Type':'application/json',
                'Authorization':this.props.token
            })
        }).then(
            (response)=>response.json()
            ).then((data)=>{
            this.setState({user:data[0]})
            console.log(this.setState)
            console.log(data[0])
        })
    }
    handleUpdate = () =>{
        fetch(`http://localhost:3000/user/update/${localStorage.getItem('userid')}`,{
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
render(){
    return(
    <Container>
      <Row>
          <Col>
          <div>
            <h2>My Profile</h2>
                <div>
                    <b>First Name:</b><br/>{this.state.user.firstname}<hr/>
                    <b>Last Name:</b><br/>{this.state.user.lastname}<hr/>
                    <b>Hometown:</b><br/>{this.state.user.hometown}<hr/>
                    <b>About Me:</b><br/>{this.state.user.aboutme}<hr/>
                </div>
        </div>
            <Button color="secondary" onClick={this.toggle}>Update Profile</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Update Profile Info</ModalHeader>
                    <ModalBody>
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
                  <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>          
          </Col>
          <Col>
            <UserStory/>
            <Button><Link to="/story">Create!</Link></Button>
            <Button><Link to='/suggest'>Suggest a Prompt!</Link></Button>
          </Col>
      </Row>
  </Container>
    )
}
}
export default Profile;