import React, { Component } from 'react'
import Layout from '../components/Layout'

const maxChars = 255
const minChars = 10
const charLimitWarn = 150

class Leaderboard extends Component {
    render() {
        return (
            <Layout>
                <h1>Leaderboard</h1>
                <br />
            </Layout>
        )
    }
}

export default Leaderboard;