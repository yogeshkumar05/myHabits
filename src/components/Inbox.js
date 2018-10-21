import React, {Component} from 'react';
import TopActionBar from './TopActionBar';

class Inbox extends Component {
    constructor(props) {
        super(props);
        this.state = {showPanel: false};
    }
    togglePanel = () => {
        const current = this.state.showPanel;
        this.setState({showPanel: !current});
    }
    render() {
    const {users} = this.props;    
    return(<div className='mainpage-container'>
        <TopActionBar heading='Notifications/Inbox Page'/>
<button className="accordion" onClick={this.togglePanel}>Section 1</button>
<div className={this.state.showPanel? 'show-panel': 'panel'}>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="accordion">Section 2</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button className="accordion">Section 3</button>
<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
    </div>);
}

}
export default Inbox;

