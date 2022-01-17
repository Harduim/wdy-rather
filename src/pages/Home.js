import React, { Component } from 'react'
import Layout from '../components/Layout'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Layout>
                <Container>
                    <Row>
                        <Col sm={0} md={1}></Col>
                        <Col>
                            <h1>Would You Rather...</h1>
                            <Tabs defaultActiveKey="profile" id="main-tabs" className="mb-3">
                                <Tab eventKey="home" title="Home">
                                    AAAA
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    bbbbbbb
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col sm={0} md={1}></Col>
                    </Row>
                </Container>
            </Layout>
        )
    }
}

export default Home;