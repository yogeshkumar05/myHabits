import React from 'react';
import TopActionBar from './TopActionBar';

const Inbox = (props) => {
    const {users} = props;    
    return(<div>
        <TopActionBar heading='Notifications/Inbox Page'/>
    </div>);
}
export default Inbox;

