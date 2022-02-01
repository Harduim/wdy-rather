import '../App.css';
import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddNew from '../pages/AddNew';
import Login from '../pages/Login';
import Leaderboard from '../pages/Leaderboards'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'


class App extends Component {
  componentDidMount() {
    const { dispatch, loading } = this.props
    if (loading === true) {
      dispatch(handleInitialData())
    }
  }


  render() {
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
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/add' element={<AddNew />} />
          <Route exact path='/leaderboard' element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    loading: users.length === 0,
    authedUser,
    users
  }
}


export default connect(mapStateToProps)(App);






