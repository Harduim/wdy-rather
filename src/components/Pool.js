import React, { Component } from 'react'
import Avatar from './Avatar'
import { Container, Row, Col } from 'react-bootstrap';


class Pool extends Component {
    render() {
        return (
            <Container className='pool-card'>
                <Row className='pool-header'>
                    <Col><b>Username Asks:</b></Col>
                </Row>
                <Row className='pool-body'>
                    <Col className='pool-avatar' xs={0} sm={3}><Avatar/></Col>
                    <Col xs={12} sm={9}>
                        <div><b>Would You Rather</b></div>
                        <div>Some quick example text to build on the card title and make up the bulk of
                            the card's content.</div>
                        <div style={{textAlign: 'center'}}><a href='#pool'>View pool</a></div>
                    </Col>
                </Row>

            </Container>
        )
    }
}


export default Pool;