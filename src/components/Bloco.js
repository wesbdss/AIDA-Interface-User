import React from 'react';
import './Bloco.css';

class Bloco extends React.Component{
    constructor(props){
        super(props);
        this.text= props.text;
        this.user= props.user;
        this.color = props.color;
        this.fontcolor = props.fontcolor;
    }
    render(){
        return(
            <div className="Bloco" style={{backgroundColor: this.color, color: this.fontcolor}}>
                <span ><strong>{this.user}:</strong></span><span>{this.text}</span>
            </div>
        );
    }
}

export default Bloco;