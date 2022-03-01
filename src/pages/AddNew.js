import React, { Component, createRef } from 'react'
import Layout from '../components/Layout'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleAddPool } from '../actions/pools'
import { Navigate } from 'react-router-dom'


const maxChars = 255
const minChars = 10
const charLimitWarn = 150

class AddNew extends Component {
    textAreaRef = createRef()
    state = { answer1Count: 0, answer2Count: 0, toRedirect: false }

    handleSumit(e) {
        e.preventDefault()
        const { dispatch, authedUser } = this.props
        dispatch(handleAddPool(e.target.firstAnswer.value, e.target.secondAnswer.value, authedUser))
        this.setState({ toRedirect: true })
    }

    render() {
        const { answer1Count, answer2Count, toRedirect } = this.state

        if (toRedirect) {
            return <Navigate to="/home" />
        }

        return (
            <Layout>
                <h1>Create a new question</h1>
                <br />
                <Form onSubmit={e => this.handleSumit(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label><b>Would You Rather...</b></Form.Label>
                        <Form.Control
                            id="firstAnswer"
                            as="textarea"
                            placeholder="Type the first answer"
                            rows={2}
                            maxLength={maxChars}
                            onChange={(e) => this.setState({ answer1Count: e.target.value.length })}
                        />
                        <Form.Text className="text-muted">
                            <b style={{ color: maxChars - answer1Count < charLimitWarn ? "red" : "" }}>
                                {maxChars - answer1Count}
                            </b> charecters remaining.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            id="secondAnswer"
                            as="textarea"
                            placeholder="Type the second answer"
                            rows={2}
                            maxLength={maxChars}
                            onChange={(e) => this.setState({ answer2Count: e.target.value.length })}
                        />
                        <Form.Text className="text-muted">
                            <b style={{ color: maxChars - answer2Count < charLimitWarn ? "red" : "" }}>
                                {maxChars - answer2Count}
                            </b> charecters remaining.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Layout>
        )
    }
}


const mapStateToProps = state => {
    return { authedUser: state.authedUser }
}



export default connect(mapStateToProps)(AddNew);