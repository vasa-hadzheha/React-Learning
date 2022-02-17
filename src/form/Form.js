import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "",
            age: 4,
        }
    }

    myInput = (e) =>{
        console.log(e.target.value);
        console.log(e.target.name);
        this.setState({[e.target.name]: e.target.value})
    }

    submitForm = (e) =>{
        e.preventDefault();
    }

    render(){
        // let a = '';
        // if(this.state.text){
        //     a = <p>Your enter text: {this.state.text}</p>
        // }
        // else{
        //     a=''
        // }
        return(
            <div>
                <p>It`s input from class Form</p>
                <form onSubmit={this.sunmitForm}>
                    <input onChange={this.myInput} name="text"/>
                    <input onChange={this.myInput} type="number" name="age"/>
                    {/* {a} */}
                    {this.state.text && <p>Your enter text: {this.state.text}</p>}
                    <input type="submit"/>
                    <p>Age:{this.state.age}</p>
                </form>
            </div>
        );
    }
}
export default Form;