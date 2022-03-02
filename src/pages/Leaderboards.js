import React, { Component } from 'react'

import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'

import Avatar from '../components/Avatar'
import Layout from '../components/Layout'

class Leaderboard extends Component {
  render () {
    const { authedUser, pools, users } = this.props

    const _users = { ...users }
    let userIds = Object.keys(users)

    userIds.forEach(
      e => _users[e].points = Object.keys(_users[e].answers).length + _users[e].questions.length
    )

    userIds = Object.keys(users).sort((a, b) => users[b].points - users[a].points)

    return (
      <Layout>
        <h1>Leaderboard</h1>
        <Table className='leaderboard-table'>
          <thead>
            <tr>
              <th>User</th>
              <th>Questions</th>
              <th>Answers</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              userIds.map(
                i => {
                  const u = users[i]
                  return (
                    <tr key={i}>
                      <td>
                        <Avatar user={u} />
                      </td>
                      <td>{u.questions.length}</td>
                      <td>{Object.keys(u.answers).length}</td>
                      <td>{u.points}</td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </Table>
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

export default connect(mapStateToProps)(Leaderboard)
