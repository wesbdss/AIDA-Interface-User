import React from 'react';
import Bloco from './components/Bloco/Bloco';

import "./Main.css";


class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            blocos: [<Bloco fontcolor="white" color="black" user="eu" text="{text}" who="you" />, <Bloco fontcolor="white" color="black" user="nois" text="dsadsadasdasdasdasdsaadssddssdsddssddssdsd" who="2" />],
            data: {user:'eu',text:"teste",fontcolor1:'white',color1:'red',who:'me'}
        }
    }
    addBloco() {
        this.setState({ blocos: [this.state.blocos, <Bloco fontcolor={this.state.data.fontcolor1} color={this.state.data.color1} user={this.state.data.user} text={this.state.data.text} who={this.state.data.who} />] });
    }

    render() {
        return (
            <div className="container">
                <div className="row top">
                    <img src="./logo192.png" alt="" />
                    <div className="row top text">
                        Chat in ReactJS
                    </div>
                </div>
                
                <div className="col chat">
                    <div id="infos" className="infos">Infos</div>
                    <div className="col chatbox">
                        {listItens(this.state.blocos)}
                    </div>
                    <div className="textinput">
                        <input id="text"></input>
                        <button >Click me</button>
                    </div>
                </div>
            </div>


        );
    }

}

function listItens(data) {
    const conversas = data.map((itens) => <div>{itens}</div>)
    return conversas
}

export default Main;