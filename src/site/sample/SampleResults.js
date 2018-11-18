import React, {Component} from 'react';
import APIURL from '../../helpers/environment';
import {Table} from 'reactstrap';

class Results extends Component{
    constructor(props){
        super(props)
        this.state={
            story:[]
        };
    }
componentDidMount(){
    this.fetchResults()
}
fetchResults = () => {
    fetch(`${APIURL}/user/read`,{
        method:'GET',
        headers:new Headers({
            'Content-Type':'application/json',
        })
    }).then(
        (res)=>res.json()
    ).then((data)=>{
        this.setState({story:data.story})
        console.log(this.state.story)
    })
}
    render(){
        return(
            <div>
                <h2>The story so far:</h2>
                <Table>
                    <tbody>
                        {
                            this.state.story.map((story, id)=>{
                                return(
                                    <tr key={id}>
                                        <td>{story.story}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default Results;