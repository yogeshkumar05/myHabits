import React from 'react';
import TopActionBar from './TopActionBar';

const Feedback = (props) => {
    const {users} = props;    
    return(<div className='mainpage-container'>
        <TopActionBar heading='Feedback Page'/>
        <h2>Rate us</h2>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<textarea placeholder='what can we improve'/>

<h2>Have a question?</h2>
<textarea placeholder='Write to us'/>
<h2>Find us on..</h2>
        <a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-twitter"></a>
<a href="#" class="fa fa-google"></a>
<a href="#" class="fa fa-linkedin"></a>
<a href="#" class="fa fa-youtube"></a>
<a href="#" class="fa fa-instagram"></a>
<div>&copy; 2018 muh.com by Yogesh </div>
    </div>);
}
export default Feedback;

