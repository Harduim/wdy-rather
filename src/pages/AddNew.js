import React, { Component, createRef } from 'react'
import { Form, Button } from 'react-bootstrap';
import Layout from '../components/Layout'

const maxChars = {question: 400, answer: 255}
const minChars = {question: 400, answer: 255}


class AddNew extends Component {
    textAreaRef = createRef()
    state = {questionCount:0, answer1Count: 0, answer2Count:0}

    render() {
        const { questionCount, answer1Count, answer2Count } = this.state
        return (
            <Layout>
                <h1>Create a new <i>'Would You Rather'</i></h1>
                <Form>
                    <Form.Group className="mb-3" controlId="questionId">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            ref={this.textInput}
                            type="text"
                            placeholder="Would you rather..."
                            maxLength={maxChars.question}
                            onChange={(e) => this.setState({questionCount: e.target.value.length})}
                            />
                        <Form.Text className="text-muted">
                            <b>{maxChars.question-questionCount}</b> charecters remaining.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="firstAnswer">
                        <Form.Control placeholder="Type the first answer" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="secondAnswer">
                        <Form.Control placeholder="Type the second answer" />
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