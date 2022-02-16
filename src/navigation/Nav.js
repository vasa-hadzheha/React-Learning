import React from "react";

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            title: "Navigation",
            subtitle: "Main menu",
            show: "show"
        }
    }
    showNav = () =>{
        this.setState({show: "hide"});
    }
    render(){
        let a = 55;
        let nav=this.props.nav;
        return (
          <nav>
              <button type="button" onClick={this.showNav}> Show menu </button>
              <h1>{this.state.title}</h1>
              <h2>{this.state.subtitle}</h2>
              <p>{this.state.show}</p>
              {Object.keys(nav).map(el => {
                  return <li><a href="{nav[el]}">{el}</a></li>;
              })}
          </nav>
        );
    }
  }
  
  export default Nav;