import React, { Component, createRef } from 'react'
import { Form, Button } from 'react-bootstrap';
import Layout from '../components/Layout'

const maxChars = { question: 400, answer: 255 }
const minChars = { question: 400, answer: 255 }
const charLimitWarn = 100

class AddNew extends Component {
    textAreaRef = createRef()
    state = { questionCount: 0, answer1Count: 0, answer2Count: 0 }

    render() {
        const { questionCount, answer1Count, answer2Count } = this.state
        return (
            <Layout>
                <h1>Create a new <i>'Would You Rather'</i></h1>
                <br />
                <Form>
                    <Form.Group className="mb-3" controlId="questionId">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            ref={this.textInput}
                            type="text"
                            placeholder="Would you rather..."
                            maxLength={maxChars.question}
                            onChange={(e) => this.setState({ questionCount: e.target.value.length })}
                        />
                        <Form.Text className="text-muted">
                            <b style={{ color: maxChars.question - questionCount < charLimitWarn ? "red" : "" }}>
                                {maxChars.question - questionCount}
                            </b> charecters remaining.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="firstAnswer">
                        <Form.Control
                            placeholder="Type the first answer"
                            maxLength={maxChars.answer}
                            onChange={(e) => this.setState({ answer1Count: e.target.value.length })}
                        />
                        <Form.Text className="text-muted">
                            <b style={{ color: maxChars.answer - answer1Count < charLimitWarn ? "red" : "" }}>
                                {maxChars.answer - answer1Count}
                            </b> charecters remaining.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="secondAnswer">
                        <Form.Control
                            placeholder="Type the second answer"
                            maxLength={maxChars.answer}
                            onChange={(e) => this.setState({ answer2Count: e.target.value.length })}
                        />
                        <Form.Text className="text-muted">
                            <b style={{ color: maxChars.answer - answer2Count < charLimitWarn ? "red" : "" }}>
                                {maxChars.answer - answer2Count}
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