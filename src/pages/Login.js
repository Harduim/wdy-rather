import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  handleSubmit (e) {
    e.preventDefault()
    const { dispatch } = this.props
    const uid = e.target[0].value
    dispatch(setAuthedUser(uid))
    this.setState({ toHome: true })
  }

  render () {
    const { users } = this.props

    return (
      <div className='login-wrapper'>

        <Container className='login-container'>
          <Row>
            <Col xs={1} md={4} />
            <Col xs={10} md={4}>
              <h1>Would You Rather...</h1>
              <h4>The Game</h4>
              <br />

              <Card style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <Card.Body>
                  <Card.Title>Please Log In</Card.Title>
                  <form onSubmit={e => this.handleSubmit(e)}>
                    <div className='mb-3'>
                      <select name='user' aria-label='Select User'>
                        <option key='0' value=''>Select a user</option>
                        {
                                                    Object.keys(users).map(
                                                      (u, i) => {
                                                        return (
                                                          <option key={i} value={users[u].id}>{users[u].name}</option>
                                                        )
                                                      }
                                                    )
                                                }
                      </select>
                    </div>
                    <Button variant='primary' type='submit'>Submit</Button>
                  </form>
                </Card.Body>
              </Card>

            </Col>
            <Col xs={1} md={4} />
          </Row>
        </Container>

      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return { users, loading: users.length === 0, authedUser }
}

export default connect(mapStateToProps)(Login)
