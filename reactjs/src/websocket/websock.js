import React from 'react';

export default class Websock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ws:'ws://localhost' || props.ws,
            port: '10101' || props.port
        }
    }

    ws = new WebSocket([this.state.ws,this.state.port].join());

    componentDidMount() {
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            this.setState({ messages: [...this.state.messages, { text: "Conectado", nick: 'System', color: "blue" }] });

        }

        this.ws.onmessage = evt => {
            // listen to data sent from the websocket server
            // const message = JSON.parse(evt.data)
            this.setState({ messages: [... this.state.messages, { text: evt.data, nick: 'Bot', color: "red" }] });
        }

        this.ws.onclose = () => {
            this.setState({ messages: [... this.state.messages, { text: "Desconectado", nick: 'System', color: "blue" }] });

            // automatically try to reconnect on connection loss

        }

    }

    sendMessage(msg) {
        try {
            this.ws.send(msg);
        } catch (error) {
            alert('mensagem não enviada');
        }

    }
}
