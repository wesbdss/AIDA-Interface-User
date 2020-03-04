import React from 'react';
import Container from 'react-bootstrap/Container'
import Chat from './chat.js';

class Hello extends React.Component{

    render(){
        return(
            <Container>
                <Chat/>
            </Container>
        );
    }

}

export default Hello;