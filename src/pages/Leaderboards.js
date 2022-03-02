import React, { Component } from 'react'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import Avatar from '../components/Avatar'
import { Table } from 'react-bootstrap'


class Leaderboard extends Component {
  render() {
    const { authedUser, pools, users } = this.props
    const userIds = Object.keys(users).sort((a, b) => users[b].points - users[a].points)

    userIds.forEach(
      e => users[e]['points'] = Object.keys(users[e].answers).length + users[e].questions.length
    )

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
                      <td>{u.points}</td>
                      <td>{u.points}</td>
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
