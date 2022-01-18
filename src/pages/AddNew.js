import React, { Component, createRef } from 'react'
import { Form, Button } from 'react-bootstrap';
import Layout from '../components/Layout'

const maxChars = 255
const minChars = 10
const charLimitWarn = 150

class AddNew extends Component {
    textAreaRef = createRef()
    state = { answer1Count: 0, answer2Count: 0 }

    render() {
        const { answer1Count, answer2Count } = this.state
        return (
            <Layout>
                <h1>create a new poll</h1>
                <br />
                <Form>
                    <Form.Group className="mb-3" controlId="firstAnswer">
                        <Form.Label><b>Would You Rather...</b></Form.Label>
                        <Form.Control
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
                    <Form.Group className="mb-3" controlId="secondAnswer">
                        <Form.Control
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

export default AddNew;