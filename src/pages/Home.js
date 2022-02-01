import React, { Component } from 'react'
import Layout from '../components/Layout'
import PoolList from '../components/PoolList';


class Home extends Component {
    render() {
        return (
            <Layout>
                <h1>Would You Rather...</h1>
                <div className='main-tabs-wrapper'>
                    <div id="main-tabs">
                        <div>
                            <PoolList />
                        </div>
                        <div>
                            <PoolList />
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}


export default Home;