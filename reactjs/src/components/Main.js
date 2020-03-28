import React from 'react';
import BoxMessage from './BoxMessages';
import './Main.css';



export default class Main extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="fundo">
                    <div className="navbar">
                        {/* <img src="./AiDAGit.png" alt="" />
                        <h1>Chatbot</h1>
                        <h2>Status: </h2> */}
                        <div className ="screenDraw"></div>
                    </div>
                    <div className="box">
                        <BoxMessage />
                    </div>

                    <div>creditos: <a href="https://www.youtube.com/watch?v=7A4UQGrFU9Q&list=PL85ITvJ7FLoiuaKgHFYgrhZDwXOUEaxWI">Iniciando no ReactJs</a>
                        <br />
                        <a href="https://dev.to/finallynero/using-websockets-in-react-4fkp">Websocket in React</a></div>
                </div>

            </div>

        );


    }
}
