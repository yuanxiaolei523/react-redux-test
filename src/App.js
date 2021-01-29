import store from './components/counter/index'

import React, { Component } from 'react'

console.log(store);
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  addCount() {
    store.dispatch({
      type: 'add',
      count: 1
    });
    this.setState({
      count: store.getState()
    })
  }
  delCount() {
    store.dispatch({
      type: 'del',
      count: 1
    });
    this.setState({
      count: store.getState()
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.addCount.bind(this)}>addCount</button>
        <button onClick={this.delCount.bind(this)}>del</button>
        {this.state.count}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <button onClick={addCount}>click</button>
//       {this.state.count}
//     </div>
//   );
// }


// export default App;
