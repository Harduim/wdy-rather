import './App.css';
import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddNew from './pages/AddNew';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render () {
    return (
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/add' element={<AddNew/>}/>
      </Routes>
    )
  }
}

export default App;






