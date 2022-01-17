import React, { Component } from 'react'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Sidebar from './Sidebar'



class Layout extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={3} ><Sidebar /></Col>
                    <Col xs={9} ><div className='main-content-wrapper'>{this.props.children}</div></Col>
                </Row>
            </Container>
        )
    }
}

export default Layout