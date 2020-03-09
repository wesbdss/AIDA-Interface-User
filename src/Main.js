import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bloco from './components/Bloco';
import "./Main.css";


class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            blocos:[<Bloco fontcolor="white"  color= "black" user="eu" text="{text}"/>]
        }
    }

    addBloco(user,text,fontcolor1='white',color1='blue'){
        this.setState({blocos: [...this.state.blocos,<Bloco fontcolor={fontcolor1}  color= {color1} user={user} text={text}/>]});
    }
    
    render() {
        return (
            <Container >
                <Row>
                    <Col style={{backgroundColor:"black",textAlign:"center"}}>
                        <img src="logo192.png" width="200vw" height="200vh"></img>
                        <h1 style={{color:"white",fontFamily:"Oldtown,Fantasy"}}>Chat in React JS</h1>
                    </Col>
                    <Col style={{textAlign:"center"}}>
                        <Row>
                            <Col>
                                {listItens(this.state.blocos)}
                            </Col>
                        </Row>
                    </Col>
                    <Col className="teste">
                        <input id="text"></input>
                        <button >Click me</button>
                    </Col>
                </Row>
            </Container>
        );
    }

}

function listItens(data){
    const conversas = data.map((itens) =><ul>{itens}</ul>)
    return conversas
}

export default Main;