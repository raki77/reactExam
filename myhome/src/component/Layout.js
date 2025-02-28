import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';

function Layout() {    
    return (
        <div>            
            <nav className="navbar navbar-expand-sm bg-light">            
                <div className="container-fluid">                
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                    </ul>
                </div>            
            </nav>
            
            <div style={{"marginTop": "20px"}}></div>
            <Outlet/>            
        </div>
    );
}

export default Layout;