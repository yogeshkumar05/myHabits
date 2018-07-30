import React from 'react';
import TopActionBar from './TopActionBar';
import {Button} from 'react-bootstrap';
import GoalThumbnail from './GoalThumbnail';
import mockData from '../../server/mockData.json';
const Add = (props) => {
    const {users} = props;    
    const {goals} = mockData;
    console.log(goals);
    return(<div>
        <TopActionBar heading='Add Goal'/>
        <div className='add-container'>
            <Button bsStyle="primary">Click here to add your own goal!</Button>
            <div className = 'goals-wrapper'>
                {
                    goals.map ((goal, index) => <GoalThumbnail imgsrc = {goal.img} goalTitle = {goal.title}/>)
                }
            </div>
            <div class="clearfix"></div>
        </div>
    </div>);
}
export default Add;





