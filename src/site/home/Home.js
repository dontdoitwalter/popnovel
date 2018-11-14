import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from '../login-signup/Signup';
import Login from '../login-signup/Login';
import Preview from '../home/Preview'
import './home.css'

const Auth = (props)=>{
    return(
        <div>
        <Container className="auth-container">
            <Row>
                <Col className="homeLeft">
                    <div><Signup setToken={props.setToken}/></div>
                </Col>
                <Col>
                    <div><Preview /></div>
                </Col>
                <Col className="homeRight">
                    <div><Login setToken={props.setToken} /></div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Auth;