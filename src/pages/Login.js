import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import { _getUsers } from '../_DATA'




class Login extends Component {
    state = { users: [] }

    componentDidMount() {
        _getUsers().then(u => this.setState({ users: u }))
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.setUid(e.target.value)
    }

    render() {
        const { users } = this.state
        const { setUid } = this.props
        return (
            <div className="login-wrapper">
                <h1>Please Log In</h1>
                <Form onSubmit={e => setUid(e.target[0].value)}>
                    <Form.Group className="mb-3" controlId="firstAnswer">
                        <Form.Select name="user" aria-label="Select User">
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
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}


export default Login;
