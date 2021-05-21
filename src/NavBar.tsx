import React from 'react';
import './App.css';

function NavBar() {
    return (
        <div className='container'>
            <nav>
                <div className="nav-left-side">
                    <ul>
                        <li></li>
                        <li>Home</li>
                        <li>
                            <input type="text"  />
                        </li>
                    </ul>
                </div>

                <div className="nav-left-side">
                    <ul>
                        <li>Add Task</li>
                        <li>Help</li>
                        <li>Profile</li>
                    </ul>
                </div>
            </nav>
            
        </div>
    )
}

export default NavBar
