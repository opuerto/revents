import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button  } from 'semantic-ui-react'
import { incrementCounter, decrementCounter } from './TestActions'

const mapState = (state) => ({
       data:state.test.data
})

const actions = {
     incrementCounter,
     decrementCounter   
}
 class TestComponent extends Component {
  render() {
      const{incrementCounter, decrementCounter, data} = this.props;
    return (
      <div>
        <h1>Test Area</h1>
           <h3>the answer is: {data}</h3>
           <Button onClick={incrementCounter} color='green' content='Increment' />
           <Button onClick={decrementCounter} color='red' content='Decrement' /> 
      </div>
    )
  }
}


export default connect(mapState,actions)(TestComponent)