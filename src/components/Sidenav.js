import React from 'react';
import { Route, Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap';
const Sidenav = (props) => {
    console.log('sidenav');
    return(<div className='sidenav-container'>
        <div className='top-sidenav'>
            <Link to="/">Home</Link>
            <Link to='/search'>Search</Link>
            <Link to='/add'>Add</Link>
            <Link to='/view'>View</Link>
            <Link to='/update'>Update</Link>
            <Link to='/delete'>Delete</Link>
        </div>
        <div className='bottom-sidenav'>
            <Link to='/notifications'>Inbox <Badge>5</Badge></Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/feedback'>Feedback</Link>
            <Link to="/about">About</Link>
        </div>
    </div>);
}
export default Sidenav;

