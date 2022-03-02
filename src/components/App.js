import '../App.css'
import React, { Component } from 'react'

import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { handleInitialData } from '../actions/shared'
import AddNew from '../pages/AddNew'
import Home from '../pages/Home'
import Leaderboard from '../pages/Leaderboards'
import Login from '../pages/Login'
import NotFound from '../pages/PageNotFound'
import Question from '../pages/Question'

class App extends Component {
  componentDidMount () {
    const { dispatch, loading } = this.props
    if (loading === true) {
      dispatch(handleInitialData())
    }
  }

  render () {
    const { loading, authedUser } = this.props

    if (loading === true) {
      return <LoadingBar />
    }

    if (!authedUser) {
      return <Login />
    }

    return (
      <BrowserRouter>
        <Routes>
          <Route path='/:i' element={<NotFound />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/add' element={<AddNew />} />
          <Route exact path='/leaderboard' element={<Leaderboard />} />
          <Route path='/questions/:question_id' element={<Question />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    loading: users.length === 0,
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(App)
