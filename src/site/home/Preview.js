import React, {Component} from 'react';
import Logo from "../../../src/assets/popnovel.png"
import "./preview.css"
import {Link} from 'react-router-dom';

class Preview extends Component {
    constructor(props){
        super(props)
        this.state = {};
    }

    render(){
        return(
            <div>
                <div>   
                    <h1>Check Us Out!</h1>
                    <h6>Hey we get it, committment is hard! Click on our logo to see what we are all about before you sign up!</h6>
                </div>
                <div>
                        <Link to="/sample">
                            <img src={Logo} alt="logo" id="logo"/>
                        </Link>
                </div>
                <div>

                </div>
            </div>
        )
    }
}
export default Preview;