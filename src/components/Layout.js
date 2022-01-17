import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar'



class Layout extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={3} >
                        <Sidebar />
                    </Col>
                    <Col xs={9} >
                        <div className='main-content-wrapper'>
                            <Container>
                                <Row>
                                    <Col sm={0} md={1}></Col>
                                    <Col>{this.props.children}</Col>
                                </Row>
                                <Row>
                                    <Col sm={0} md={1}></Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Layout