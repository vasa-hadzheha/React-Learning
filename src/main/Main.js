import React from "react";
import './Main.css';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text: "Main_Text1",
            text2: "555"
        }
        // this.showText2 = this.showText2.bind(this);
    }

    showText (){
        console.log("work");
        this.setState({text: "hi"})
    }
    showText2= (e)=>{
        // this.setState({text2: e.targer.value});
        //console.log(e.targer)
        this.setState({text2: e.target.value});
        console.log(e.target.value);
    }
    move(e){
        console.log(e.target.textContent);
    }
    render(){
        return (
            <div className="container">
            <main>
                <p>{this.state.text}</p>
                <input onInput={this.showText2}/>
                <p>{this.state.text2}</p>
                <div onMouseMove={this.move}>lorem</div>
            <article>
            <header>
                <h1>Article_1</h1>
                <h2>Article_2</h2>
            </header>
            <p>
                Продолжение приключений Тандзиро и его неизменных спутников: 
                сестры-демона Нэдзуко, вечно ноющего Дзэницу и сорвиголовы Иносукэ. 
                На этот раз «столп звука» Тэнгэн Удзуи берёт их с собой на задание в Квартал красных фонарей, 
                где в последнее время стали пропадать люди. Причиной этого скорее всего служат демоны. Так кто 
                же стоит за всеми исчезновениями, и смогут ли наши герои с ним справиться?
            </p>
            <p>
                Продолжение приключений Тандзиро и его неизменных спутников: 
                сестры-демона Нэдзуко, вечно ноющего Дзэницу и сорвиголовы Иносукэ. 
                На этот раз «столп звука» Тэнгэн Удзуи берёт их с собой на задание в Квартал красных фонарей, 
                где в последнее время стали пропадать люди. Причиной этого скорее всего служат демоны. Так кто 
                же стоит за всеми исчезновениями, и смогут ли наши герои с ним справиться?
            </p>
            </article>
        </main>
        </div>
            )
    }
}

export default Main;