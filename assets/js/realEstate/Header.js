import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<header>
      <div className="logo">Logo</div>

      <nav>
        <a href="#">create ads</a>
        <a href="#">About us</a>
        <a href="#">log in</a>
        <a href="#" className="register-btn">Register</a>
      </nav>
    </header>)
  }
}

