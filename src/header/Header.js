import React from "react";
import logo from './logo.svg';
import './Header.css';

class Header extends React.Component{
    render(){
        return (
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               (simple comment) Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://itgid.info"
                target="_blank"
                rel="noopener noreferrer"
            >
                itgit
            </a>
            </header>
        )
    }
}   

export default Header;