import './App.css';
import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddNew from './pages/AddNew';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';






class App extends Component {
  state = { uid: "" }

  setUid(uid) {
    sessionStorage.setItem('uid', uid);
  }

  componentDidMount() {
    const uid = sessionStorage.getItem('uid')
    this.setState({ uid: uid })
  }

  render() {
    if (!sessionStorage.getItem('uid')) {
      return <Login setUid={this.setUid} />
    }

    return (
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/add' element={<AddNew />} />
      </Routes>
    )
  }
}


export default App;






