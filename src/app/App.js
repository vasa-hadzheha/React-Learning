import React from "react";
import './App.css';
import Main from '../main/Main';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Nav from '../navigation/Nav'
import Form from '../form/Form'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: "hello",
    }
  }

  //props -> state and we can manipulate it
  // static getDerivedStateFromProps(props, state){
  //   return{
  //     text: props.text
  //   }
  // }
  // after render

  componentDidMount(){
    setTimeout(()=>{
      this.setState({text: "Component did mount"})
    },3000)
  }

  render(){
      let a = 55;
      let nav = this.props.nav;
      return (
        <div className="App">
        <div>
          <p>{this.state.text}</p>
        </div>
        <br></br>
        <br></br>
        <br></br>
          <Header/>
          <Nav nav={nav}/>
          <Form/>
          <Main/>
          <h1>{this.props.title}</h1>
          <p>{this.props.hero}</p>
          <Footer/>
        </div>
      );
  }
}

export default App;
