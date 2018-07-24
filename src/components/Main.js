import React from 'react';

const Main = (props) => {
    const {users} = props;    
    return(<div>{users && users.map((item)=> <div>{item.name}, {item.address}</div>)}</div>);
}
export default Main;

