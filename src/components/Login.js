import React from 'react';
import {Modal, InputGroup, FormControl, ControlLabel, Button, FormGroup, HelpBlock} from 'react-bootstrap';
const   Login = (props) => {
    console.log(props);
    return(
        <Modal.Dialog>
            <div className='close-modal'>
                <Button onClick={props.hideLoginModal}>Close</Button>
            </div>
                <Modal.Header>
                    <Modal.Title>SIGN IN</Modal.Title>
                </Modal.Header>
    
        <Modal.Body>
            <div className='sigin-userText'><input type='text' placeholder='username or email'/></div>
            <div className='sigin-passText'><input type='password' placeholder='password'/></div>
            <div className='signin-btn-wrapper'>
                <Button bsStyle='primary'>Sign in</Button>
            </div>
            <div className='signin-or'>Or</div>
            <div className='social-signin'>
                <div className='signin-fb'>fb Connect</div>
                <div className='signin-google'>G+ Connect</div>
            </div>
        </Modal.Body>
    
        <Modal.Footer>
          <div className='footer-wrapper'>
              <div>Forgot password?</div>
              <div><span className='signup-text' onClick={props.showRegisterModal}>SIGN UP</span> to create new account</div>
          </div>
        </Modal.Footer>
      </Modal.Dialog>);
}
export default Login;

