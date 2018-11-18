import React, {Component} from 'react';
import APIURL from '../../helpers/environment';
import {Table} from 'reactstrap';
import './results.css'
import FreeScrollBar from 'react-free-scrollbar';

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
        <div style={{width:'500px', height:'550px', border:'2px solid #567077',background:'#CD88AF'}}>
            <FreeScrollBar>
            <Table>
                    <tbody>
                        {
                            this.state.story.map((story, id)=>{
                                return(
                                    <ul id="results" key={id}>
                                        <li>{story.story}</li>
                                    </ul>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </FreeScrollBar>
        </div>
        )
    }
}
export default Results;