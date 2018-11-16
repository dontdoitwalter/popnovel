import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import {Navbar,NavbarBrand,Collapse,NavbarToggler,Nav,NavItem,Button} from 'reactstrap';
import Logo from "../../../src/assets/popnovel.png";
import './header.css'
import Contact from '../contact-us/Contact'

class Navigation extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
          isOpen:!this.state.isOpen
        });
      }
    render(){
        return(
        <div>
            <div className="navabar">
                <Navbar className="navigator" color="faded" light expand="md">
                    <NavbarBrand><img src={Logo} alt="logo" id="icon"/>PopNovel</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="buttons">    
                            <Link to="/"><Button id="buttonone">Home</Button></Link>
                            </NavItem>
                            <NavItem className="buttons">
                            <Link to="/contact"><Button id="buttontwo">Contact Us</Button></Link>
                            </NavItem>
                            <NavItem className="buttons">
                            <Link to="/"><Button id="buttonthree"onClick={()=> this.props.clickLogout()}>Logout</Button></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            <div>
                <Switch>
                    <Route exact path="/contact"><Contact /></Route>
                </Switch>
            </div>
        </div>
        )
    }
}
// do we need more props line 45??
export default Navigation;