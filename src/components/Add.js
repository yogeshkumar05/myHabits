import React from 'react';
import TopActionBar from './TopActionBar';
import {Button} from 'react-bootstrap';
const Add = (props) => {
    const {users} = props;    
    return(<div>
        <TopActionBar heading='Add Page'/>
        <Button bsStyle="primary">Primary</Button>
    </div>);
}
export default Add;

