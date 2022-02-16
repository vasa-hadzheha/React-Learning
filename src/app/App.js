import React from "react";
import './App.css';
import Main from '../main/Main';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Nav from '../navigation/Nav'

class App extends React.Component{
  render(){
      let a = 55;
      let nav = this.props.nav;
      return (
        <div className="App">
          <Header/>
          <Nav nav={nav}/>
          <Main/>
          <h1>{this.props.title}</h1>
          <p>{this.props.hero}</p>
          <Footer/>
        </div>
      );
  }
}

export default App;
