import React, { Component } from 'react'

import { Tab, Tabs } from 'react-bootstrap'
import { connect } from 'react-redux'

import Layout from '../components/Layout'
import PoolList from '../components/PoolList'

class Home extends Component {
  render () {
    const { pools, authedUser, users } = this.props

    const answered = Object.keys(users[authedUser].answers)
    const unanswered = Object.keys(pools).filter(e => !answered.includes(e))

    return (
      <Layout>
        <h1>Would You Rather...</h1>
        <div className='main-tabs-wrapper'>
          <Tabs defaultActiveKey='unanswered' id='main-tabs' className='mb-3 test'>
            <Tab eventKey='unanswered' title='Unanswered'>
              <PoolList poolIds={unanswered} pools={pools} />
            </Tab>
            <Tab eventKey='answered' title='Answered'>
              <PoolList poolIds={answered} pools={pools} />
            </Tab>
          </Tabs>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    pools: state.pools,
    authedUser: state.authedUser,
    users: state.users
  }
}

export default connect(mapStateToProps)(Home)
