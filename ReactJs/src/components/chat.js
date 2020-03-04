import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Chat extends React.Component {
    render() {
        return (
            
            <Container style={{display:'flex'}}>
                <Row style={{padding:'10px'}}>
                    <Col style={{backgroundColor:'red'}}>
                        <h1>
                            Chatbot interface
                        </h1>
                    
                    </Col>
                    <Col style={{backgroundColor:'blue',flexGrow:'2' }}>
                        cht components
                    
                    </Col>
                    <Col style={{backgroundColor:'green',flexGrow:'1'}}>
                        input
                    </Col>
                </Row>
            </Container>
        );
    };
}
export default Chat;