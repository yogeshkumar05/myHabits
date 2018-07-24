import React from 'react';

const Main = (props) => {
    const {users} = props;    
    return(<div className='main-container'>
    {users && users.map((item)=> <div>{item.name}, {item.address}</div>)}
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    <div className='test-scroll'> Just to test vertical scroll & top action bar fixed</div>
    </div>);
}
export default Main;

