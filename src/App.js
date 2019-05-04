import React from 'react';
import './App.css';
import Welcome from './Welcome.js';
import Counter from './Counter.js'


// const App = () => {
//   return (
//     <section className="App">
//         <Welcome name={'Nick'} isTeacher />
//         <Welcome name="Tim" />
//         <Welcome name="Leo"></Welcome>
//         <Counter diff={3}/>
//     </section>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.diff = 3; 
  }

  render() {
    return (
      <section className="App">
          <Welcome name={'Nick'} isTeacher count={this.state.count}/>
          <Welcome name="Tim" count={this.state.count}/>
          <Welcome name="Leo" count={this.state.count}></Welcome>
          <Counter 
            count={this.state.count}
            handleSubtract={this.handleSubtract}
            handleAdd={this.handleAdd}
          />
      </section>
    );
  }
  
  handleSubtract = () => {
    // Wrong: setState is async
    //this.setState({count: this.state.count - 1});
    this.setState((preState) => ({count: preState.count - 1})); //不用return的简单写法，因为返回一个对象{}，所以需要一个（）避免系统歧义
  };

  handleAdd = () => {
    this.setState((preState, props) => {
        return {count: preState.count + this.diff};
    });
  };

}

export default App;
