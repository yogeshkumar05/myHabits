import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/MainPage';
import '../styles/index.scss'
import { Provider } from 'react-redux';
import store from "./store"
import { Route, BrowserRouter } from 'react-router-dom'
import Sidenav from './components/Sidenav';
import Search from './components/Search';
import Add from './components/Add';
import View from './components/View';
import Update from './components/Update';
import Delete from './components/Delete';
import Inbox from './components/Inbox';
import Feedback from './components/Feedback';
import About from './components/About';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('container');
ReactDOM.render(<Provider store={store}>
                    <BrowserRouter>
                        <div className='app-container'>
                            <Route path="/" component={Sidenav}/>
                            <Route exact path="/" component={Main}/>
                            <Route path="/search" component={Search}/>
                            <Route path="/add" component={Add}/>
                            <Route path="/view" component={View}/>
                            <Route path="/update" component={Update}/>
                            <Route path="/delete" component={Delete}/>
                            <Route path="/notifications" component={Inbox}/>
                            <Route path="/feedback" component={Feedback}/>
                            <Route path="/about" component={About}/>
                            <Route path="/profile" component={Profile}/>
                        </div>
                    </BrowserRouter>
                </Provider>, container );
