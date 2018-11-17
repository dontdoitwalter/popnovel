import React, {Component} from 'react';
import APIURL from '../../helpers/environment';

class Results extends Component{
    constructor(){
        super()
        this.state={
            storysubmit:{
            story:''
            }
        };
    }

componentDidMount(){
    this.fetchResults()
}

fetchResults = () =>{
    fetch(`${APIURL}/user/read`,{
        method:'GET',
        headers: new Headers({
            'Content-Type':'application/json'
        })
    })
}

    render(){
        return(
            <div>
                This is there the sample story for the month will go.
            </div>
        )
    }
}
export default Results;