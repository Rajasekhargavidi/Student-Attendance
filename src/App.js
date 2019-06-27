import React, { Component } from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar';
import DashBoard from './components/DashBoard/DashBoard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp'
import AddStudents from './components/projects/AddStudents'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component ={DashBoard} />
          <Route path="/signin" component ={SignIn} />
          <Route path="/signup" component ={SignUp} />
          <Route path="/addstudents" component ={AddStudents} />
          </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App
