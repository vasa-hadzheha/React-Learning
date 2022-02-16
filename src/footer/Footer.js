import React from "react";
import './Footer.css';

class Footer extends React.Component{
    render(){
        return (
            <footer className="section footer-classic context-dark bg-image" style={{background: "#2d3646", color: "#fff"}}>
                <p>Copyright</p>
            </footer>
            )
    }
}

export default Footer;