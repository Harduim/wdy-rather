import '../App.css';
import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AddNew from '../pages/AddNew';
import Login from '../pages/Login';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'


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
        <Fragment>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/add' component={AddNew} />
        </Fragment>
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






