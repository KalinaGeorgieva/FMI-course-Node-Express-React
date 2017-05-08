import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import All from '../posts/all';
import Add from '../posts/add';
import Last from '../posts/last';

class Header extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-inverse navbar-fixed-top">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link to="/"><span className="navbar-brand">Simple Blogging</span></Link>
                            </div>
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Add new post</Link></li>
                                <li><Link to="/all">Get all posts</Link></li>
                                <li><Link to="/last">Get last 15 posts</Link></li>
                            </ul>
                        </div>
                    </nav>

                    
                    <Route exact path="/" component={Add}/>
                    <Route path="/all" component={All}/>
                    <Route path="/last" component={Last}/>
                </div>        
            </Router>
        )
    }
}

export default Header;