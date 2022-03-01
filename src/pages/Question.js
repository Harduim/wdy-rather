import React, { Component } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import Avatar from '../components/Avatar'
import { handleAnswerPool } from '../actions/pools'


class QuestionPage extends Component {

    state = { optionSelected: 'optionOne' }

    handleVote(e, poolId, userId) {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(handleAnswerPool(poolId, this.state.optionSelected, userId))
        return
    }

    render() {

        const { authedUser, users, pools, p } = this.props
        const user = users[authedUser]
        const pool = pools[p.question_id]

        if (!pool) {
            return <Navigate to={{ pathname: "/page-not-found" }} />
        }

        const poolOwner = users[pool.author]
        const { optionOne, optionTwo } = pool
        const oVotes = optionOne.votes
        const tVotes = optionTwo.votes
        const allVotes = [...oVotes, ...tVotes]
        const votedOne = oVotes.includes(user.id)
        const votedTwo = tVotes.includes(user.id)
        const voted = votedOne || votedTwo

        return (
            <Layout>
                <h1>Answer The Question</h1>

                <div className='pool-card' key={pool.id}>
                    <div className='pool-header'>
                        <div><b>{poolOwner.name} Asks:</b></div>
                    </div>
                    <div className='pool-body'>

                        <div className='row'>
                            <div className='col-3 pool-avatar'><Avatar user={poolOwner} /></div>
                            <div className='col-9'>
                                <div><b>Would You Rather</b></div>
                                <div>

                                    <Form onSubmit={e => this.handleVote(e, pool.id, user.id)}>
                                        <div key={`default-radio`} className="mb-3">
                                            <Form.Check
                                                defaultChecked
                                                disabled={voted}
                                                type="radio"
                                                id='optOne'
                                                label={`${optionOne.text}`}
                                                name='group1'
                                                onChange={_ => this.setState({ optionSelected: 'optionOne' })}
                                                className={votedOne ? "alert-info" : ""}
                                            />
                                            {voted ? <Form.Label>{`Votes: ${oVotes.length} | ${Math.round(oVotes.length / allVotes.length * 100)}%`}</Form.Label> : null}
                                            <Form.Check
                                                disabled={voted}
                                                type="radio"
                                                label={`${optionTwo.text}`}
                                                id='optTwo'
                                                name='group1'
                                                onChange={_ => this.setState({ optionSelected: 'optionTwo' })}
                                                className={votedTwo ? "alert-info" : ""}
                                            />
                                            {voted ? <Form.Label>{`Votes: ${tVotes.length} | ${Math.round(tVotes.length / allVotes.length * 100)}%`}</Form.Label> : null}
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <Button disabled={voted} className={'nav-pills'} type="submit">Vote</Button>
                                        </div>
                                    </Form>

                                </div>
                                <br />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </Layout>
        )

    }

}


const mapStateToProps = state => {
    return { authedUser: state.authedUser, users: state.users, pools: state.pools }
}
const Question = connect(mapStateToProps)(QuestionPage)

export default () => <Question p={useParams()}></Question>;