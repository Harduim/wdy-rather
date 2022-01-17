import React, { Component } from 'react'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import Layout from '../components/Layout'
import PoolList from '../components/PoolList';

class Home extends Component {
    render() {
        return (
            <Layout>
                <Container>
                    <Row>
                        <Col sm={0} md={1}></Col>
                        <Col>
                            <h1>Would You Rather...</h1>
                            <div className='main-tabs-wrapper'>
                            <Tabs defaultActiveKey="unanswered" id="main-tabs" className="mb-3 test">
                                <Tab eventKey="unanswered" title="Unanswered">
                                    <PoolList />
                                </Tab>
                                <Tab eventKey="answered" title="Answered">
                                    <PoolList />
                                </Tab>
                            </Tabs>
                            </div>
                        </Col>
                        <Col sm={0} md={1}></Col>
                    </Row>
                </Container>
            </Layout>
        )
    }
}

export default Home;