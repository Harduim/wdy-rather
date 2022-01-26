import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'



class Login extends Component {
    handleSubmit(e) {
        // e.preventDefault()
        const { dispatch } = this.props
        const uid = e.target[0].value
        dispatch(setAuthedUser(uid))
        sessionStorage.setItem('uid', uid)
        this.setState({ toHome: true })
    }

    render() {
        const { users } = this.props

        return (
            <div className="login-wrapper">
                <div>
                    <h1>Please Log In</h1>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className="mb-3" controlId="firstAnswer">
                            <select name="user" aria-label="Select User">
                                <option key='0' value="">Select a user</option>
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
                        <button variant="primary" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}


function mapStateToProps({ users, authedUser }) {
    return { users, loading: users.length === 0, authedUser }
}


export default connect(mapStateToProps)(Login)