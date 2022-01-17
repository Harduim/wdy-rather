import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Avatar from './Avatar'
import SiteNav from './SiteNav';


class Sidebar extends Component {
    render() {
        return (
            <Container className='sidebar'>
                <Row className='sidebar-padding'>
                    <Col><br/></Col>
                </Row>
                <Row className='sidebar-main'>
                    <Col xs={12}><Avatar /></Col>
                    <Col xs={12}><SiteNav /></Col>
                    <Col xs={12}><br/><br/><br/></Col>
                </Row>

            </Container>
        )
    }
}

export default Sidebar