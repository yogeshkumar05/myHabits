import React from 'react';
import TopActionBar from './TopActionBar';
import GoalThumbnail from './GoalThumbnail';
import mockData from '../../server/mockData.json';
const View = (props) => {
    const {users} = props;  
    const {goals} = mockData;  
    return(<div>
        <TopActionBar heading='Manage My Goals'/>
        <div className='add-container'>
            <div className = 'goals-wrapper'>
                {
                    goals.map ((goal, index) => <GoalThumbnail action='view' imgsrc = {goal.img} goalTitle = {goal.title}/>)
                }
            </div>
            <div class="clearfix"></div>
        </div>
    </div>);
}
export default View;






