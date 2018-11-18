import React, {Component} from 'react';
import APIURL from '../../helpers/environment';

class Results extends Component{
    constructor(){
        super()
        this.state={
         story:''
        };
    }
componentDidMount(){
    fetch(`${APIURL}/user/read`,{
        method:'GET',
        headers:new Headers({
            'Content-Type':'application/json',
        })
    }).then(
        (res)=>res.json()
    ).then((story)=>{
        this.setState({story:story})
    })
    console.log(this.story)
}
// fetchResults = () => {
//     fetch(`${APIURL}/user/read`,{
//         method:'GET',
//         headers:new Headers({
//             'Content-Type':'application/json',
//         })
//     }).then(
//         (res)=>res.json()
//     ).then((story)=>{
//         console.log(story)
//         this.setState({story:story})
//     })
// }
    render(){
        return(
            <div>
                This is there the sample story for the month will go.
            </div>
        )
    }
}
export default Results;