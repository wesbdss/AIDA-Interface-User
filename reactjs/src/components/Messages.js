import React from 'react';

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color || "grey",
            nick: this.props.nick || "eu",
            img: this.props.img || '',
            text: this.props.text
        }
        
    }

    render() {
        return (
            <div><span style={{ backgroundColor: this.state.color }} > <strong>{this.state.nick}:</strong>{this.state.img}{this.state.text}<br /> </ span> </div>
        );

    }
}