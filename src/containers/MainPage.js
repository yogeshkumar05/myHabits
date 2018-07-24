import React, { Component } from 'react';
import { fetchUsers } from '../action-creators/userActions';
import { connect } from 'react-redux';
import Main from '../components/Main';
import TopActionBar from '../components/TopActionBar'


class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount()
    {
        fetchUsers('Hassan');
    }  

    componentWillReceiveProps(nextProps) {
       console.log(nextProps.users);
    }
    render() {
        return(<div className='mainpage-container'><TopActionBar heading='My Habits'/>
        <Main users={this.props.users && this.props.users}/></div>);
    }
}
export default connect(state => (
    {
        users: state.userReducer.users
    }
))(MainPage);
