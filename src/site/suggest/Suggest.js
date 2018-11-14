import React, {Component} from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap'

class Suggest extends Component{
    constructor (props){
        super(props)
        this.state={
            suggest:'',
            modal:false
        };
        this.toggle=this.toggle.bind(this);
    }
    toggle(){
        this.setState({
            modal:!this.state.modal
        });
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    makeSuggestion = (event) =>{
        fetch(`http://localhost:3000/user/suggest`,{
            method:'POST',
            body:JSON.stringify({submission:this.state}),
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization':this.props.token
            })
        }).then((response)=>response.json())
        event.preventDefault()
    }
    render(){
        return(
            <div>
                <h3>If you would like to suggest either a future prompt or genre, enter is in the field below!</h3>
                        <Form onSubmit={this.makeSuggestion}>
                            <FormGroup>
                                <Input id="suggest"type="textarea"name="suggest"placeholder="Suggest Away!!"onChange={this.handleChange}/>
                            </FormGroup>
                            <Button color="primary" type="submit">Submit Suggestion</Button>
                        </Form>
            </div>
        )
    }
}
export default Suggest;