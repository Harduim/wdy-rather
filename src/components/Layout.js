import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar'



class Layout extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={3} style={{maxWidth:200}}>
                        <Sidebar />
                    </Col>
                    <Col xs={9} style={{minWidth:500}}>
                        <div className='main-content-wrapper'>
                            <Container>
                                <Row>
                                    <Col md={0} lg={1}></Col>
                                    <Col md={12} lg={8}>{this.props.children}</Col>
                                </Row>
                                <Row>
                                    <Col md={0} lg={1}></Col>
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