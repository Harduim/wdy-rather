import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Avatar from './Avatar'
import SiteNav from './SiteNav'
import { connect } from 'react-redux'

class Sidebar extends Component {
  render () {
    const { authedUser, users } = this.props
    const user = users[authedUser]

    return (
      <Container className='sidebar'>
        <Row className='sidebar-padding'>
          <Col><br /></Col>
        </Row>
        <Row className='sidebar-main'>
          <Col xs={12}><Avatar user={user} /></Col>
          <Col xs={12}><SiteNav /></Col>
          <Col xs={12}><br /><br /><br /></Col>
        </Row>

      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    authedUser: state.authedUser,
    users: state.users
  }
}

export default connect(mapStateToProps)(Sidebar)
