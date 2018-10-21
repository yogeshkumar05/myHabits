import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {showLogin : false, showRegister : false};
    }
    showLoginModal = () => {
        this.setState({showLogin:true});
    }
    showRegisterModal = () => {
        this.setState({showRegister:true});
    }
    hideLoginModal = () => {
        this.setState({showLogin:false});
    }
    hideRegisterModal = () => {
        this.setState({showRegister:false, showLogin:false});
    }
    render() {
    const {users} = this.props;    
    return(<div className='main-container'>
    {users && users.map && users.map((item)=> <div>{item.name}, {item.address}</div>)}
    <div className='test-scroll'>'MyHabits' helps you to start tracking your day to day tasks and makes your life simple.</div>
    <div className='test-scroll'> You can log any activities like:</div>
    <ul>
        <li>Todos</li>
        <li>Reminders</li>
        <li>Goals</li>
        <li>Habits</li>
    </ul>
    <div className='test-scroll'> Start practicing healthy habits from a predefined list of healthy practices or add your own habit which you 
    would like to follow regularly and track the status.</div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    <div className='login-user'> If you are an existing user, please <Button onClick={this.showLoginModal} bsStyle="primary">Login</Button> to access your account. </div>
    <div className='register-user'> If you are new here, plase <Button onClick={this.showRegisterModal} bsStyle="primary">Register</Button> to start tracking your activities. </div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    {this.state.showLogin &&
    <Login showRegisterModal={this.showRegisterModal} showLogin ={this.state.showLogin} hideLoginModal={this.hideLoginModal}/>}
    {this.state.showRegister &&
    <Register hideRegisterModal={this.hideRegisterModal}/>}   
    <div>Footer</div> 
    </div>);
}
}
