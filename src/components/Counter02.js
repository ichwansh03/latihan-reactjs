import React, { Component } from 'react'

export default class Counter02 extends Component {

    state = {
        counter: 0
    }

    //arrow function, without bind
    increment =()=>{
        this.setState({
            counter : this.state.counter + 1
        })
    }

    decrement =()=>{
        this.setState({
            counter : this.state.counter - 1
        })
    }

  render() {
    return (
    <div>
        <h3>Counter : {this.state.counter}</h3>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
    </div>
    )
  }
}
