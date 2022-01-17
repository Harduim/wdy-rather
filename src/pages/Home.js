import React, { Component } from 'react'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import Layout from '../components/Layout'
import PoolList from '../components/PoolList';

class Home extends Component {
    render() {
        return (
            <Layout>
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
            </Layout>
        )
    }
}

export default Home;