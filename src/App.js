import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './site/home/Header'
import Home from './site/home/Home'
import Footer from './site/home/Footer'
import Splash from './site/profile/Splash'
import Sample from './site/sample/Sample'
import Story from './site/story/Story'
import Suggest from './site/suggest/Suggest'


class App extends Component {
    constructor(){
        super();
        this.state={
            sessionToken:'',
            test: 'test data'
        }
    }
    
    componentWillMount(){
        const token = localStorage.getItem('token');
        if(token && !this.state.sessionToken){
            this.setState({sessionToken:token});
        }
    }
    setSessionState = (data) => {
        console.log("set token: ", data)
        localStorage.setItem('token', data.sessionToken);
        localStorage.setItem('userid', data.user.id)
        console.log(data)
        this.setState({sessionToken:data.sessionToken})
    }
    logout = () =>{
        this.setState({
            sessionToken:''
        })
        localStorage.clear()
    }

    testMethod() {
        console.log("from app component")
    }

    protectedViews = () =>{
        if(this.state.sessionToken === localStorage.getItem('token')){
            return(
                <Switch>
                    <Route exact path='/'>
                        <Splash sessionToken={this.state.sessionToken} />
                    </Route>
                    <Route exact path="/story">
                        <Story sessionToken={this.state.sessionToken}/>
                    </Route>
                <Route exact path='/suggest'>
                    <Suggest setToken={this.setSessionState}/>
                </Route> 
                </Switch>
            )
        } else{
            return(
            <Switch>
                <Route exact path='/'>
                    <Home setToken={this.setSessionState} />
                </Route>
                <Route exact path='/sample'>
                    <Sample setToken={this.setSessionState} />
                </Route>
            </Switch>
            )
        }
    }
    render(){
        return(
            <Router>
                <div>
                    <Header clickLogout={this.logout}  setToken={this.setSessionState}/>
                    {this.protectedViews()}
                    <Footer />
                </div>
            </Router>
        )
    }
}
export default App;