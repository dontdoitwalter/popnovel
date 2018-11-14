import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../helpers/environment';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            displayname:'',
            passwordhash:''
        };
    }

    componentWillMount(){
        console.log("yo")
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    handleSubmit = (event) =>{
        fetch(`${APIURL}/user/login`,{
            method:'POST',
            body:JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type':'application/json'
            })
        }).then(
            (response)=>response.json()
        ).then((data)=>{
            console.log("data: ", data);
            this.props.setToken(data)
        })
        event.preventDefault()
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <h6>If you already have an account go ahead and enter your Display Name and Password below to sign in.<br></br> Welcome back!</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="displayname">Display Name</Label>
                        <Input id="li_displayname" type="text" name="displayname" placeholder="enter display name"onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="passwordhash" placeholder="enter password" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit">Log In!</Button>
                </Form>
            </div>
        )
    }
}
export default Login;