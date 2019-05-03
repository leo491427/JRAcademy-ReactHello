import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    render() {
        return (
            <div>
                <span>This is a counter: {this.state.counter}  </span>
                <button onClick = {this.handleSubtract}>-</button>
                <button onClick = {this.handleAdd}>+</button>
            </div>
        )
    }

    handleSubtract = () => {
        this.setState({counter: this.state.counter - 1});
    };

    handleAdd = () => {
        this.setState({counter: this.state.counter + 1});
    }
};

export default Counter;