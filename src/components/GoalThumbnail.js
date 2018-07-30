import React from 'react';
import TopActionBar from './TopActionBar';

const GoalThumbNail = (props) => {
    const {imgsrc, goalTitle} = props;    
    return(<div class="goal-wrapper">
    <div class="goal-img-wrapper">
      <div className='image-wrapper'>
        <img class = "goal-image" src={imgsrc} alt="Forest" width="600" height="400"/>
        <div class="read-wrapper">
          <div class="read-text">Details</div>
      </div>
      </div>

      <div class="goal-title"><img className='add-icon' src = '../../images/addIcon.png' /> {goalTitle}</div>
    </div>
  </div>);
}
export default GoalThumbNail;

