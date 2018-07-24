import React from 'react';
import TopActionBar from './TopActionBar';

const View = (props) => {
    const {users} = props;    
    return(<div>
        <TopActionBar heading='View Page'/>
    </div>);
}
export default View;

