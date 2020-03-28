import React from 'react';
import Messages from './Messages';
import "./BoxMessages.css";


export default class BoxMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: { text: '' },
            messages: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    ws = new WebSocket('ws://localhost:10101');

    componentDidMount() {
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            this.setState({ messages:[...this.state.messages,{text:"Conectado",nick:'System',color:"blue"}]});

        }

        this.ws.onmessage = evt => {
            // listen to data sent from the websocket server
            // const message = JSON.parse(evt.data)
            this.setState({ messages: [... this.state.messages, {text:evt.data,nick:'Bot',color:"red"}] });
        }

        this.ws.onclose = () => {
            this.setState({ messages: [... this.state.messages, {text:"Desconectado",nick:'System',color:"blue"}] });

            // automatically try to reconnect on connection loss

        }

    }

    sendMessage(){
        try{
            this.ws.send(this.state.current.text);
        } catch(error){
            alert('mensagem não enviada');
        }

    }
    handleSubmit(e) {

        this.setState({
            messages: [...this.state.messages,{text:this.state.current.text}]
        })

        this.sendMessage();

        this.setState({current:{text:''}})

        e.preventDefault();
    }

    handleChange(e){
        this.setState({current: {text: e.target.value}})
    }

    render() {
        return (
            <div className="fundo">
                <div className="mensagens">
{
                    this.state.messages.map((msg, index) => {
                        return <Messages key={index} color= {msg.color} nick= {msg.nick} text={msg.text} />
                    })
                }

                </div>
                
                < form onSubmit={this.handleSubmit} >
                    <input type="text" value = {this.state.current.text} onChange={this.handleChange}/>
                    <button type="submit" >press me</button>
                </form >

            </div >
        );
    }
}