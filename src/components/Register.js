import React from 'react';
import {Modal, InputGroup, FormControl, ControlLabel, Button, FormGroup, HelpBlock} from 'react-bootstrap';
const   Register = (props) => {
    console.log(props);
    return(
        <Modal.Dialog>
            <div className='close-modal'>
                <Button onClick={props.hideRegisterModal}>Close</Button>
            </div>
                <Modal.Header>
                    <Modal.Title>Register for an Account</Modal.Title>
                </Modal.Header>
    
        <Modal.Body>
            <div className='sigin-userText'><input type='text' placeholder='Full Name'/></div>
            <div className='sigin-userText'><input type='text' placeholder='Email ID'/></div>
            <div> OR </div>
            <div className='sigin-userText'><input type='number' placeholder='Phone Number'/></div>
            <div className='sigin-passText'><input type='password' placeholder='Create Password'/></div>
            <div className='sigin-passText'><input type='password' placeholder='Confirm Password'/></div>
            <div className='signin-btn-wrapper'>
                <Button bsStyle='primary'>Sign Up</Button>
            </div>
            <div className='signin-or'>Or, Fetch Details Using</div>
            <div className='social-signin'>
                <div className='signin-fb'>fb Connect</div>
                <div className='signin-google'>G+ Connect</div>
            </div>
        </Modal.Body>
    
        <Modal.Footer>
          <div className='footer-wrapper'>
              <div>Already a member?</div>
              <div><span className='signup-text'>SIGN IN</span> to access your account</div>
          </div>
        </Modal.Footer>
      </Modal.Dialog>);
}
export default Register;

