// import React from 'react';

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.state = {counter: 0};
//         console.log('constructor');
//     }

//     componentDidMount() {
//         console.log('componentDidMount');
//     }

//     componentDidUpdate() {
//         console.log(`componentDidUpdate`);
//     }

//     componentWillUnmount() {
//         console.log(`componentWillUnmount`);
//     }

//     render() {
//         console.log('render');
//         return (
//             <div>
//                 <span>This is a counter: {this.props.count}  </span>
//                 <button onClick = {this.props.handleSubtract}>-</button>
//                 <button onClick = {this.props.handleAdd}>+</button>
//             </div>
//         )
//     }

//     // handleSubtract = () => {
//     //     // Wrong: setState is async
//     //     //this.setState({counter: this.state.counter - 1});
//     //     this.setState((preState) => ({counter: preState.counter - 1})); //不用return的简单写法，因为返回一个对象{}，所以需要一个（）避免系统歧义
//     //     //this.setState({counter:this.preState.counter -1});  报错
//     // };

//     // handleAdd = () => {
//     //     // Wrong: setState is asyn
//     //     //this.setState({counter: this.state.counter + 1});
//     //     this.setState((preState, props) => {
//     //         return {counter: preState.counter + props.diff};
//     //     });
//     // };
// };

// export default Counter;